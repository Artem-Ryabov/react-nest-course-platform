import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserCourse } from '../../models/table models/user-course.model';
import { StatusService } from './status.service';
import { UserService } from './user.service';
import { CourseService } from './course.service';
import { FeedbackDto } from '../../dtos/feedbackDto';

export interface CourseCreator {
  id: number;
  Name: string;
  Text: string;
  Creator: string;
}

export interface CourseCard {
  id: number;
  Name: string;
  idSubject: number;
  Text: string;
  Status: string;
  Progress?: number;
}

@Injectable()
export class UserCourseService {
  constructor(
      @InjectModel(UserCourse) private userCourseRepo: typeof UserCourse,
      private statusService: StatusService,
      private userService: UserService,
      private courseService: CourseService,
  ) {
  }

  public async createCourseByUser(idUser: number, idCourse: number): Promise<UserCourse> {
    const creatorStatus = await this.statusService.getStatusByName('Создатель');
    return await this.userCourseRepo.create({
      idUser,
      idCourse,
      idStatus: creatorStatus.id,
    } as UserCourse);
  }

  public async getCourseInfo(idCourse: number): Promise<CourseCreator> {
    const creatorStatus = await this.statusService.getStatusByName('Создатель');
    const usercourse = await this.userCourseRepo.findOne({
      where: [{
        $idCourse$: idCourse,
        $idStatus$: creatorStatus.id,
      }],
    });
    const creator = await this.userService.getUserById(usercourse.idUser);
    const course = await this.courseService.getCourseById(usercourse.idCourse);
    return {
      id: course.id,
      Name: course.Name,
      Text: course.Text,
      Creator: creator.Email,
    };
  }

  public async getUsersCourses(idUser: number, statusName: string): Promise<CourseCard[]> {
    const status = await this.statusService.getStatusByName(statusName);
    const usercourses = await this.userCourseRepo.findAll({ where: [{ $idUser$: idUser }, { $idStatus$: status.id }] });
    const courses = [];
    for (const usercourse of usercourses) {
      const course = await this.courseService.getCourseById(usercourse.idCourse);
      courses.push({ course, progress: usercourse.Progress });
    }
    return courses.map(({ course, progress }) => {
      return {
        id: course.id,
        Name: course.Name,
        idSubject: course.idSubject,
        Text: course.Text,
        Status: status.Name,
        Progress: progress,
      };
    });
  }

  public async subscribe(idUser: number, idCourse: number): Promise<UserCourse> {
    const subscribeStatus = await this.statusService.getStatusByName('Подписан на курс');
    return await this.userCourseRepo.create({
      idUser,
      idCourse,
      idStatus: subscribeStatus.id,
    } as UserCourse);
  }

  public async unsubscribe(idUser: number, idCourse: number, forced?: boolean): Promise<void | UserCourse> {
    const usercourse = await this.userCourseRepo.findOne({ where: [{ $idUser$: idUser }, { $idCourse$: idCourse }] });
    if (forced) {
      return await usercourse.destroy();
    }
    const unsubscribeStatus = await this.statusService.getStatusByName('Отписан от курса');
    usercourse.idStatus = unsubscribeStatus.id;
    return await usercourse.save();
  }

  public async deleteCourseByUser(idCourse: number): Promise<number> {
    return await this.userCourseRepo.destroy({ where: { $idCourse$: idCourse } });
  }

  public async leaveReview(idUser: number, idCourse: number, feedback: FeedbackDto): Promise<UserCourse> {
    const usercourse = await this.userCourseRepo.findOne({ where: [{ $idUser$: idUser }, { $idCourse$: idCourse }] });
    usercourse.Score = feedback.Score;
    if (feedback.Review != null) {
      usercourse.Review = feedback.Review;
    }
    return await usercourse.save();
  }
}
