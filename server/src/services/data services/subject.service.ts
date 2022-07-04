import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Subject } from '../../models/catalog models/subject.model';
import { CatalogDto } from '../../dtos/catalog.dto';

@Injectable()
export class SubjectService {
  constructor(@InjectModel(Subject) private subjectRepo: typeof Subject) {
  }

  public async createSubject(subjectDto: CatalogDto) {
    return await this.subjectRepo.create({ Name: subjectDto.Name } as Subject);
  }

  public async getAllSubjects(): Promise<Subject[]> {
    return await this.subjectRepo.findAll();
  }

  public async getSubjectById(id: number): Promise<Subject> {
    return await this.subjectRepo.findByPk(id);
  }

  public async getSubjectByName(name: string) {
    return await this.subjectRepo.findOne({ where: { $Name$: name } });
  }
}
