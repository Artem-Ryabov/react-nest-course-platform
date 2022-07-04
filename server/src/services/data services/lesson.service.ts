import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Lesson } from '../../models/table models/lesson.model';
import { LessonDto } from '../../dtos/lesson.dto';


@Injectable()
export class LessonService {
  constructor(@InjectModel(Lesson) private lessonRepo: typeof Lesson) {
  }

  public async getAllLessons(idCourse: number): Promise<Lesson[]> {
    return await this.lessonRepo.findAll({ where: { $idCourse$: idCourse } });
  }

  public async getLessonById(id: number): Promise<Lesson> {
    return await this.lessonRepo.findByPk(id);
  }

  public async createLesson(idCourse: number, lessonDto: LessonDto): Promise<Lesson> {
    return await this.lessonRepo.create({
      Name: lessonDto.Name,
      idCourse,
      Text: lessonDto.Text,
    } as Lesson);
  }

  public async editLesson(id: number, lessonDto: LessonDto): Promise<Lesson> {
    const lesson = await this.lessonRepo.findByPk(id);
    lesson.Name = lessonDto.Name;
    lesson.Text = lessonDto.Text;
    return await lesson.save();
  }

  public async deleteLesson(id: number): Promise<void> {
    const lesson = await this.lessonRepo.findByPk(id);
    return await lesson.destroy();
  }

  public async deleteAllLessons(idCourse): Promise<number> {
    return await this.lessonRepo.destroy({ where: { $idCourse$: idCourse } });
  }
}
