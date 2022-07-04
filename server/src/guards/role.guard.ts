import {
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/role-auth.decorator';
import { RoleService } from '../services/data services/role.service';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
      private jwtService: JwtService,
      private roleService: RoleService,
      private reflector: Reflector) {
  }

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    try {
      const requiredRoles = this.reflector.getAllAndOverride<string[]>(
          ROLES_KEY,
          [
            context.getHandler(),
            context.getClass(),
          ]);

      if (!requiredRoles) {
        return true;
      }

      const req = context.switchToHttp().getRequest();
      const authHeader = req.headers.authorization;
      const bearer = authHeader.split(' ')[0];
      const token = authHeader.split(' ')[1];

      if (bearer !== 'Bearer' || !token) {
        throw new UnauthorizedException({ message: 'Пользователь не авторизован' });
      }

      const user = this.jwtService.verify(token);
      req.user = user;
      return this.roleService
          .getRoleById(user.idRole)
          .then((role) => requiredRoles.includes(role.Name));
    } catch (e) {
      console.log(e);
      throw new HttpException('Нет доступа', HttpStatus.FORBIDDEN);
    }
  }
}
