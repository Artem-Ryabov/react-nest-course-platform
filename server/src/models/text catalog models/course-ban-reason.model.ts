import { BelongsToMany, Table } from 'sequelize-typescript';
import { TextCatalog } from './text-catalog.model';
import { Course } from '../table models/course.model';
import { BannedCourse } from '../table models/banned-course.model';

@Table({ tableName: 'CourseBanReason', createdAt: false, updatedAt: false })
export class CourseBanReason extends TextCatalog {
  @BelongsToMany(() => Course, () => BannedCourse)
  courses: Course[];
}
