import { Module } from '@nestjs/common';
import { UserService } from '../services/data services/user.service';
import { JwtModule } from '@nestjs/jwt';
import { RoleService } from '../services/data services/role.service';
import { User } from '../models/table models/user.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { Role } from '../models/catalog models/role.model';
import { AuthService } from '../services/auth.service';
import { AuthController } from '../controllers/auth.controller';

@Module({
  imports: [
    SequelizeModule.forFeature([
      User,
      Role,
    ]),
    JwtModule.register({
      secret: 'course app key',
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    UserService,
    RoleService,
  ],
  exports: [
    AuthService,
    JwtModule,
  ],
})
export class AuthModule {
}
