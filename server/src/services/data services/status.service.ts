import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Status } from '../../models/catalog models/status.model';
import { CatalogDto } from '../../dtos/catalog.dto';

@Injectable()
export class StatusService {
  constructor(@InjectModel(Status) private statusRepo: typeof Status) {
  }

  public async createStatus(statusDto: CatalogDto) {
    return await this.statusRepo.create({ Name: statusDto.Name } as Status);
  }

  public async getAllStatuses(): Promise<Status[]> {
    return await this.statusRepo.findAll();
  }

  public async getStatusById(id: number): Promise<Status> {
    return await this.statusRepo.findByPk(id);
  }

  public async getStatusByName(name: string) {
    return await this.statusRepo.findOne({ where: { $Name$: name } });
  }
}
