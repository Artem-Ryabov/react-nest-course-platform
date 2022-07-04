import { Body, Controller, Delete, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { endPoints, mainRoutes } from '../constants/routes';
import { CourseManagerService } from '../services/course-manager.service';
import { AuthGuard } from '../guards/auth.guard';
import { User } from '../decorators/user.decorator';
import { CourseDto } from '../dtos/course.dto';
import { LessonDto } from '../dtos/lesson.dto';

@Controller(mainRoutes.coursemanager)
@UseGuards(AuthGuard)
export class CourseManagerController {
  constructor(private courseManagerService: CourseManagerService) {
  }

  @Post('/')
  createCourse(@User() user, @Body() courseDto: CourseDto) {
    return this.courseManagerService.createCourse(user.id, courseDto);
  }

  @Post(endPoints.idCourse + endPoints.lesson)
  createLesson(@Param('idCourse') idCourse, @Body() lessonDto: LessonDto) {
    return this.courseManagerService.createLesson(idCourse, lessonDto);
  }

  @Put(endPoints.idCourse)
  editCourse(@Param('idCourse') idCourse, @Body() courseDto: CourseDto) {
    return this.courseManagerService.editCourse(idCourse, courseDto);
  }

  @Put(endPoints.lesson + endPoints.idLesson)
  editLesson(@Param('idLesson') idLesson, @Body() lessonDto: LessonDto) {
    return this.courseManagerService.editLesson(idLesson, lessonDto);
  }

  @Delete(endPoints.idCourse)
  deleteCourse(@Param('idCourse') idCourse) {
    return this.courseManagerService.deleteCourse(idCourse);
  }

  @Delete(endPoints.lesson + endPoints.idLesson)
  deleteLesson(@Param('idLesson') idLesson) {
    return this.courseManagerService.deleteLesson(idLesson);
  }
}
