import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from '../../models/catalog models/role.model';

@Injectable()
export class RoleService {
  constructor(@InjectModel(Role) private roleRepo: typeof Role) {
  }

  public async getAllRoles(): Promise<Role[]> {
    return await this.roleRepo.findAll();
  }

  public async getRoleById(id: number): Promise<Role> {
    return await this.roleRepo.findByPk(id);
  }

  public async getRoleByName(name: string): Promise<Role> {
    return await this.roleRepo.findOne({ where: { $Name$: name } });
  }
}
