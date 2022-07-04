import { Injectable } from '@nestjs/common';
import { SubjectService } from './data services/subject.service';
import { StatusService } from './data services/status.service';
import { CourseCard, UserCourseService } from './data services/user-course.service';
import { Course } from '../models/table models/course.model';
import { Subject } from '../models/catalog models/subject.model';
import { Status } from '../models/catalog models/status.model';
import { CourseService } from './data services/course.service';

@Injectable()
export class CoursesService {
  constructor(
      private courseService: CourseService,
      private subjectService: SubjectService,
      private statusService: StatusService,
      private userCourseService: UserCourseService,
  ) {
  }

  public async getAllCourses(): Promise<Course[]> {
    return await this.courseService.getAllCourses();
  }

  public async getAllSubject(): Promise<Subject[]> {
    return await this.subjectService.getAllSubjects();
  }

  public async getAllStatuses(): Promise<Status[]> {
    return await this.statusService.getAllStatuses();
  }

  public async getSubscriptions(idUser: number): Promise<CourseCard[]> {
    return await this.userCourseService.getUsersCourses(idUser, 'Подписан на курс');
  }

  public async getCreatedCourses(idUser: number) {
    return await this.userCourseService.getUsersCourses(idUser, 'Создатель');
  }
}
