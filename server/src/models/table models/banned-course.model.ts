import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Course } from './course.model';
import { CourseBanReason } from '../text catalog models/course-ban-reason.model';

@Table({ tableName: 'BannedCourse', createdAt: false, updatedAt: false })
export class BannedCourse extends Model<BannedCourse> {
  @ForeignKey(() => Course)
  @Column({ type: DataType.INTEGER, primaryKey: true })
  idCourse: number;

  @ForeignKey(() => CourseBanReason)
  @Column({ type: DataType.INTEGER, primaryKey: true })
  idCourseBanReason: number;
}
