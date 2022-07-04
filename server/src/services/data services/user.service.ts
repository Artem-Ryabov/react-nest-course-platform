import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from '../../models/table models/user.model';
import { UserDto } from '../../dtos/user.dto';
import { RoleService } from './role.service';

@Injectable()
export class UserService {
  constructor(
      @InjectModel(User) private userRepo: typeof User,
      private roleService: RoleService,
  ) {
  }

  public async createUser(userDto: UserDto): Promise<User> {
    let exRole = userDto.idRole ? await this.roleService.getRoleById(userDto.idRole) : null;
    if (exRole == null) {
      exRole = await this.roleService.getRoleByName('Пользователь');
    }
    return await this.userRepo.create({
      idRole: exRole.id,
      Email: userDto.Email,
      Password: userDto.Password,
    } as User);
  }

  public async getAllUsers(): Promise<User[]> {
    return await this.userRepo.findAll();
  }

  public async getUserById(id: number): Promise<User> {
    return await this.userRepo.findByPk(id);
  }

  public async getUserByEmail(email: string): Promise<User> {
    return await this.userRepo.findOne({ where: { $Email$: email } });
  }
}
