import { BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { Subject } from '../catalog models/subject.model';
import { BannedCourse } from './banned-course.model';
import { Lesson } from './lesson.model';
import { UserCourse } from './user-course.model';
import { CourseBanReason } from '../text catalog models/course-ban-reason.model';
import { User } from './user.model';

interface CourseCreationAttr {
  Name: string;
  idSubject: number;
}

@Table({ tableName: 'Course', createdAt: false, updatedAt: false })
export class Course extends Model<Course, CourseCreationAttr> {
  @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING(50), unique: true, allowNull: false })
  Name: string;

  @ForeignKey(() => Subject)
  @Column({ type: DataType.INTEGER })
  idSubject: number;

  @Column({ type: DataType.STRING(5000), unique: false, allowNull: true, defaultValue: '' })
  Text: string;

  @Column({ type: DataType.BOOLEAN, unique: false, allowNull: false, defaultValue: false })
  Published: boolean;

  @BelongsTo(() => Subject)
  subject: Subject;

  @HasMany(() => Lesson)
  lessons: Lesson[];

  @BelongsToMany(() => CourseBanReason, () => BannedCourse)
  banReasons: CourseBanReason[];

  @BelongsToMany(() => User, () => UserCourse)
  userCourses: User[];
}
