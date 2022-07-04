import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { Course } from './course.model';
import { Task } from './task.model';

interface LessonCreationAttr {
  Name: string;
  idCourse: number;
}

@Table({ tableName: 'Lesson', createdAt: false, updatedAt: false })
export class Lesson extends Model<Lesson, LessonCreationAttr> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING(50), unique: false, allowNull: false })
  Name: string;

  @ForeignKey(() => Course)
  @Column({ type: DataType.INTEGER })
  idCourse: number;

  @Column({ type: DataType.STRING(10000), unique: false, allowNull: false })
  Text: string;

  @Column({ type: DataType.BOOLEAN, unique: false, allowNull: false, defaultValue: false })
  Published: boolean;

  @BelongsTo(() => Course)
  course: Course;

  @HasMany(() => Task)
  tasks: Task[];
}
