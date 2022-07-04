import { Catalog } from './catalog.model';
import { HasMany, Table } from 'sequelize-typescript';
import { Course } from '../table models/course.model';

@Table({ tableName: 'Subject', createdAt: false, updatedAt: false })
export class Subject extends Catalog {
  @HasMany(() => Course)
  courses: Course[];
}
