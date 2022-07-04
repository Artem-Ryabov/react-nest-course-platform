import { Controller, Get, UseGuards } from '@nestjs/common';
import { endPoints, mainRoutes } from '../constants/routes';
import { CoursesService } from '../services/courses.service';
import { AuthGuard } from '../guards/auth.guard';
import { User } from '../decorators/user.decorator';

@Controller(mainRoutes.courses)
export class CoursesController {
  constructor(private coursesService: CoursesService) {
  }

  @Get(endPoints.all)
  getAllCourses() {
    return this.coursesService.getAllCourses();
  }

  @Get('/subjects')
  getAllSubjects() {
    return this.coursesService.getAllSubject();
  }

  @Get('/subscriptions')
  @UseGuards(AuthGuard)
  getSubscriptions(@User() user) {
    return this.coursesService.getSubscriptions(user.id);
  }

  @Get('/created')
  @UseGuards(AuthGuard)
  getCreatedCourses(@User() user) {
    return this.coursesService.getCreatedCourses(user.id);
  }
}
