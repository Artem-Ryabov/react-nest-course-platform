import { Module } from '@nestjs/common';
import { AuthModule } from './auth.module';
import { UserCourseService } from '../services/data services/user-course.service';
import { LessonService } from '../services/data services/lesson.service';
import { CoursePageController } from '../controllers/course-page.controller';
import { CoursePageService } from '../services/course-page.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserCourse } from '../models/table models/user-course.model';
import { User } from '../models/table models/user.model';
import { Role } from '../models/catalog models/role.model';
import { Course } from '../models/table models/course.model';
import { Subject } from '../models/catalog models/subject.model';
import { Status } from '../models/catalog models/status.model';
import { Lesson } from '../models/table models/lesson.model';
import { StatusService } from '../services/data services/status.service';
import { UserService } from '../services/data services/user.service';
import { CourseService } from '../services/data services/course.service';
import { RoleService } from '../services/data services/role.service';

@Module({
  imports: [
    SequelizeModule.forFeature([
      UserCourse,
      Course,
      Status,
      User,
      Role,
      Lesson,
    ]),
    AuthModule,
  ],
  controllers: [CoursePageController],
  providers: [
    CoursePageService,
    UserCourseService,
    CourseService,
    StatusService,
    UserService,
    RoleService,
    LessonService,
  ],
})
export class CoursePageModule {
}
