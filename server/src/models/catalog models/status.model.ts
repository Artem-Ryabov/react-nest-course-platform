import { Catalog } from './catalog.model';
import { HasMany, Table } from 'sequelize-typescript';
import { UserCourse } from '../table models/user-course.model';

@Table({ tableName: 'Status', createdAt: false, updatedAt: false })
export class Status extends Catalog {
  @HasMany(() => UserCourse)
  userCourses: UserCourse[];
}
