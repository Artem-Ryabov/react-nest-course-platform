import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CourseDto } from '../dtos/course.dto';
import { CourseService } from './data services/course.service';
import { LessonService } from './data services/lesson.service';
import { UserCourseService } from './data services/user-course.service';
import { UserCourse } from '../models/table models/user-course.model';
import { LessonDto } from '../dtos/lesson.dto';
import { Lesson } from '../models/table models/lesson.model';
import { Course } from '../models/table models/course.model';

@Injectable()
export class CourseManagerService {
  constructor(
      private courseService: CourseService,
      private userCourseService: UserCourseService,
      private lessonService: LessonService,
  ) {
  }

  public async createCourse(idUser: number, courseDto: CourseDto): Promise<UserCourse> {
    const exCourse = await this.courseService.getCourseByName(courseDto.Name);
    if (exCourse) {
      throw new HttpException('Курс с таким именем уже существует', HttpStatus.BAD_REQUEST);
    }
    const course = await this.courseService.createCourse(courseDto);
    return await this.userCourseService.createCourseByUser(idUser, course.id);
  }

  public async createLesson(idCourse: number, lessonDto: LessonDto): Promise<Lesson> {
    const exCourse = await this.courseService.getCourseById(idCourse);
    if (!exCourse) {
      throw new HttpException('Такой курс не существует', HttpStatus.BAD_REQUEST);
    }
    return await this.lessonService.createLesson(exCourse.id, lessonDto);
  }

  public async editCourse(idCourse: number, courseDto: CourseDto): Promise<Course> {
    const exCourse = await this.courseService.getCourseById(idCourse);
    if (!exCourse) {
      throw new HttpException('Такой курс не существует', HttpStatus.BAD_REQUEST);
    }
    return await this.courseService.editCourse(exCourse.id, courseDto);
  }

  public async editLesson(idLesson: number, lessonDto: LessonDto) {
    const exLesson = await this.lessonService.getLessonById(idLesson);
    if (!exLesson) {
      throw new HttpException('Такой урок не существует', HttpStatus.BAD_REQUEST);
    }
    return await this.lessonService.editLesson(exLesson.id, lessonDto);
  }

  public async deleteCourse(idCourse: number): Promise<void> {
    const exCourse = await this.courseService.getCourseById(idCourse);
    if (!exCourse) {
      throw new HttpException('Такой курс не существует', HttpStatus.BAD_REQUEST);
    }
    await this.lessonService.deleteAllLessons(exCourse.id);
    await this.userCourseService.deleteCourseByUser(exCourse.id);
    return await this.courseService.deleteCourse(exCourse.id);
  }

  public async deleteLesson(idLesson: number): Promise<void> {
    const exLesson = await this.lessonService.getLessonById(idLesson);
    if (!exLesson) {
      throw new HttpException('Такой урок не существует', HttpStatus.BAD_REQUEST);
    }
    return await this.lessonService.deleteLesson(exLesson.id);
  }
}
