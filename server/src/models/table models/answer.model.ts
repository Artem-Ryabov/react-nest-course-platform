import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Task } from './task.model';

interface AnswerCreationAttr {
  idTask: number;
  Text: string;
}

@Table({ tableName: 'Answer', createdAt: false, updatedAt: false })
export class Answer extends Model<Answer, AnswerCreationAttr> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => Task)
  @Column({ type: DataType.INTEGER })
  idTask: number;

  @Column({ type: DataType.BOOLEAN, unique: false, allowNull: false, defaultValue: true })
  Correct: boolean;

  @Column({ type: DataType.STRING(500), unique: false, allowNull: false })
  Text: string;

  @BelongsTo(() => Task)
  task: Task;
}
