import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Course } from '../../models/table models/course.model';
import { CourseDto } from '../../dtos/course.dto';

@Injectable()
export class CourseService {
  constructor(
      @InjectModel(Course) private courseRepo: typeof Course,
  ) {
  }

  public async createCourse(courseDto: CourseDto): Promise<Course> {
    const description = courseDto.Text ? courseDto.Text : '';
    return await this.courseRepo.create({
      Name: courseDto.Name,
      idSubject: courseDto.idSubject,
      Text: description,
    } as Course);
  }

  public async getAllCourses(): Promise<Course[]> {
    return await this.courseRepo.findAll();
  }

  public async getCourseById(id: number): Promise<Course> {
    return await this.courseRepo.findByPk(id);
  }

  public async getCourseByName(name: string): Promise<Course> {
    return await this.courseRepo.findOne({ where: { $Name$: name } });
  }

  public async editCourse(id: number, courseDto: CourseDto): Promise<Course> {
    const course = await this.getCourseById(id);
    course.Name = courseDto.Name;
    course.idSubject = courseDto.idSubject;
    if (courseDto.Text != null) {
      course.Text = courseDto.Text;
    }
    return await course.save();
  }

  async deleteCourse(id: number): Promise<void> {
    const course = await this.getCourseById(id);
    return await course.destroy();
  }
}
