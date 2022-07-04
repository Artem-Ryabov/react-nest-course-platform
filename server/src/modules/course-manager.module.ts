import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserCourse } from '../models/table models/user-course.model';
import { Course } from '../models/table models/course.model';
import { Status } from '../models/catalog models/status.model';
import { User } from '../models/table models/user.model';
import { Role } from '../models/catalog models/role.model';
import { Lesson } from '../models/table models/lesson.model';
import { AuthModule } from './auth.module';
import { CourseManagerController } from '../controllers/course-manager.controller';
import { UserCourseService } from '../services/data services/user-course.service';
import { CourseService } from '../services/data services/course.service';
import { StatusService } from '../services/data services/status.service';
import { UserService } from '../services/data services/user.service';
import { RoleService } from '../services/data services/role.service';
import { LessonService } from '../services/data services/lesson.service';
import { CourseManagerService } from '../services/course-manager.service';

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
  controllers: [CourseManagerController],
  providers: [
    CourseManagerService,
    UserCourseService,
    CourseService,
    StatusService,
    UserService,
    RoleService,
    LessonService,
  ],
})
export class CourseManagerModule {
}
