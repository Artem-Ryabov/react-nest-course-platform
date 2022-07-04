import { Module } from '@nestjs/common';
import { CoursesController } from './controllers/courses.controller';
import { CourseManagerController } from './controllers/course-manager.controller';
import { CoursePageController } from './controllers/course-page.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from './models/catalog models/role.model';
import { Status } from './models/catalog models/status.model';
import { Subject } from './models/catalog models/subject.model';
import { TaskType } from './models/catalog models/task-type.model';
import { CourseBanReason } from './models/text catalog models/course-ban-reason.model';
import { UserBanReason } from './models/text catalog models/user-ban-reason.model';
import { Answer } from './models/table models/answer.model';
import { BannedCourse } from './models/table models/banned-course.model';
import { BannedUser } from './models/table models/banned-user.model';
import { Course } from './models/table models/course.model';
import { Lesson } from './models/table models/lesson.model';
import { Task } from './models/table models/task.model';
import { User } from './models/table models/user.model';
import { UserCourse } from './models/table models/user-course.model';
import { AuthModule } from './modules/auth.module';
import { CoursesModule } from './modules/courses.module';
import { CoursePageModule } from './modules/course-page.module';
import { CourseManagerModule } from './modules/course-manager.module';
import { AdminModule } from './modules/admin.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'CoursePlatformDB',
      models: [
        Role,
        Status,
        Subject,
        TaskType,
        CourseBanReason,
        UserBanReason,
        Answer,
        BannedCourse,
        BannedUser,
        Course,
        Lesson,
        Task,
        User,
        UserCourse,
      ],
      autoLoadModels: true,
    }),
    AuthModule,
    AdminModule,
    CoursesModule,
    CoursePageModule,
    CourseManagerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
