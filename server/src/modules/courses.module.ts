import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Course } from '../models/table models/course.model';
import { Subject } from '../models/catalog models/subject.model';
import { Status } from '../models/catalog models/status.model';
import { User } from '../models/table models/user.model';
import { CoursesController } from '../controllers/courses.controller';
import { CoursesService } from '../services/courses.service';
import { SubjectService } from '../services/data services/subject.service';
import { StatusService } from '../services/data services/status.service';
import { UserCourseService } from '../services/data services/user-course.service';
import { CourseService } from '../services/data services/course.service';
import { UserService } from '../services/data services/user.service';
import { RoleService } from '../services/data services/role.service';
import { UserCourse } from '../models/table models/user-course.model';
import { Role } from '../models/catalog models/role.model';
import { AuthModule } from './auth.module';

@Module({
  imports: [
    SequelizeModule.forFeature([
      Course,
      Subject,
      Status,
      UserCourse,
      User,
      Role,
    ]),
    AuthModule,
  ],
  controllers: [CoursesController],
  providers: [
    CoursesService,
    SubjectService,
    UserCourseService,
    CourseService,
    StatusService,
    UserService,
    RoleService,
  ],
})
export class CoursesModule {
}
