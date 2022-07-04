import { Injectable } from '@nestjs/common';
import { CourseCreator, UserCourseService } from './data services/user-course.service';
import { UserCourse } from '../models/table models/user-course.model';
import { LessonService } from './data services/lesson.service';
import { Lesson } from '../models/table models/lesson.model';
import { FeedbackDto } from '../dtos/feedbackDto';

@Injectable()
export class CoursePageService {
  constructor(
      private userCourseService: UserCourseService,
      private lessonService: LessonService,
  ) {
  }

  public async getCourseInfo(idCourse: number): Promise<CourseCreator> {
    return await this.userCourseService.getCourseInfo(idCourse);
  }

  public async subscribeToCourse(idUser: number, idCourse: number): Promise<UserCourse> {
    return await this.userCourseService.subscribe(idUser, idCourse);
  }

  public async unsubscribeToCourse(idUser: number, idCourse: number): Promise<void | UserCourse> {
    return await this.userCourseService.unsubscribe(idUser, idCourse);
  }

  public async getAllLessonsInCourse(idCourse: number): Promise<Lesson[]> {
    return await this.lessonService.getAllLessons(idCourse);
  }

  public async leaveReview(idUser: number, idCourse: number, feedback: FeedbackDto): Promise<UserCourse> {
    return await this.userCourseService.leaveReview(idUser, idCourse, feedback);
  }
}
