import { BelongsToMany, Table } from 'sequelize-typescript';
import { TextCatalog } from './text-catalog.model';
import { BannedUser } from '../table models/banned-user.model';
import { User } from '../table models/user.model';

@Table({ tableName: 'UserBanReason', createdAt: false, updatedAt: false })
export class UserBanReason extends TextCatalog {
  @BelongsToMany(() => User, () => BannedUser)
  users: User[];
}
