import { Catalog } from './catalog.model';
import { HasMany, Table } from 'sequelize-typescript';
import { User } from '../table models/user.model';

@Table({ tableName: 'Role', createdAt: false, updatedAt: false })
export class Role extends Catalog {
  @HasMany(() => User)
  users: User[];
}
