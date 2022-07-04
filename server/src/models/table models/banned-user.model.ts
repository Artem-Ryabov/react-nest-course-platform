import { Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { User } from './user.model';
import { UserBanReason } from '../text catalog models/user-ban-reason.model';

@Table({ tableName: 'BannedUser', createdAt: false, updatedAt: false })
export class BannedUser extends Model<BannedUser> {
  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, primaryKey: true })
  idUser: number;

  @ForeignKey(() => UserBanReason)
  @Column({ type: DataType.INTEGER, primaryKey: true })
  idUserBanReason: number;
}
