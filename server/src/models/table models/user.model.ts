import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Role } from '../catalog models/role.model';
import { UserCourse } from './user-course.model';
import { UserBanReason } from '../text catalog models/user-ban-reason.model';
import { Course } from './course.model';
import { BannedUser } from './banned-user.model';

interface UserCreationAttr {
  idRole: number;
  Email: string;
  Password: string;
}

@Table({ tableName: 'User', createdAt: false, updatedAt: false })
export class User extends Model<User, UserCreationAttr> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => Role)
  @Column({ type: DataType.INTEGER })
  idRole: number;

  @Column({ type: DataType.STRING(50), unique: true, allowNull: false })
  Email: string;

  @Column({ type: DataType.STRING, unique: false, allowNull: false })
  Password: string;

  @BelongsTo(() => Role)
  Role: Role;

  @BelongsToMany(() => UserBanReason, () => BannedUser)
  userBanReasons: UserBanReason[];

  @BelongsToMany(() => Course, () => UserCourse)
  userCourses: Course[];
}
