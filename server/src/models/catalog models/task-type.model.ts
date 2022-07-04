import { Catalog } from './catalog.model';
import { HasMany, Table } from 'sequelize-typescript';
import { Task } from '../table models/task.model';

@Table({ tableName: 'TaskType', createdAt: false, updatedAt: false })
export class TaskType extends Catalog {
  @HasMany(() => Task)
  tasks: Task[];
}
