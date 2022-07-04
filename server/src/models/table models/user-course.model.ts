import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from './user.model';
import { Course } from './course.model';
import { Status } from '../catalog models/status.model';

@Table({ tableName: 'UserCourse', createdAt: false, updatedAt: false })
export class UserCourse extends Model<UserCourse> {
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, primaryKey: true })
  idUser: number;

  @ForeignKey(() => Course)
  @Column({ type: DataType.INTEGER, primaryKey: true })
  idCourse: number;

  @ForeignKey(() => Status)
  @Column({ type: DataType.INTEGER })
  idStatus: number;

  @Column({ type: DataType.INTEGER, unique: false, allowNull: false, defaultValue: 0 })
  Progress: number;

  @Column({ type: DataType.INTEGER, unique: false, allowNull: false, defaultValue: 0 })
  Score: number;

  @Column({ type: DataType.STRING(250), unique: false, allowNull: true, defaultValue: '' })
  Review: string;

  @BelongsTo(() => Status)
  status: Status;
}
