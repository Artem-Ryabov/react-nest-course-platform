import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { endPoints, mainRoutes } from '../constants/routes';
import { CoursePageService } from '../services/course-page.service';
import { User } from '../decorators/user.decorator';
import { AuthGuard } from '../guards/auth.guard';
import { FeedbackDto } from '../dtos/feedbackDto';

@Controller(mainRoutes.coursepage)
export class CoursePageController {
  constructor(private coursePageService: CoursePageService) {
  }

  @Get(endPoints.idCourse)
  getCourse(@Param('idCourse') idCourse) {
    return this.coursePageService.getCourseInfo(idCourse);
  }

  @Get(endPoints.idCourse + endPoints.lesson + endPoints.all)
  getAllLessons(@Param('idCourse') idCourse) {
    return this.coursePageService.getAllLessonsInCourse(idCourse);
  }

  @Post(endPoints.idCourse + '/subscribe')
  @UseGuards(AuthGuard)
  subscribe(@Param('idCourse') idCourse, @User() user) {
    return this.coursePageService.subscribeToCourse(user.id, idCourse);
  }

  @Post(endPoints.idCourse + '/unsubscribe')
  @UseGuards(AuthGuard)
  unsubscribe(@Param('idCourse') idCourse, @User() user) {
    return this.coursePageService.unsubscribeToCourse(user.id, idCourse);
  }

  @Put(endPoints.idCourse + '/feedback')
  @UseGuards(AuthGuard)
  leaveFeedback(@Param('idCourse') idCourse, @User() user, @Body() feedbackDto: FeedbackDto) {
    return this.coursePageService.leaveReview(user.id, idCourse, feedbackDto);
  }
}
