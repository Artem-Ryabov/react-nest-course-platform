import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { Lesson } from './lesson.model';
import { TaskType } from '../catalog models/task-type.model';
import { Answer } from './answer.model';

interface TaskCreationAttr {
  idLesson: number;
  idTaskType: number;
  Text: string;
}

@Table({ tableName: 'Task', createdAt: false, updatedAt: false })
export class Task extends Model<Task, TaskCreationAttr> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => Lesson)
  @Column({ type: DataType.INTEGER })
  idLesson: number;

  @ForeignKey(() => TaskType)
  @Column({ type: DataType.INTEGER })
  idTaskType: number;

  @Column({ type: DataType.STRING(500), unique: false, allowNull: false })
  Text: string;

  @Column({ type: DataType.BOOLEAN, unique: false, allowNull: false, defaultValue: false })
  Published: boolean;

  @BelongsTo(() => Lesson)
  lesson: Lesson;

  @BelongsTo(() => TaskType)
  taskType: TaskType;

  @HasMany(() => Answer)
  answers: Answer[];
}
