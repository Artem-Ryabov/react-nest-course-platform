import { Test, TestingModule } from '@nestjs/testing';
import { CoursePageController } from '../../controllers/course-page.controller';

describe('CoursepageController', () => {
  let controller: CoursePageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoursePageController],
    }).compile();

    controller = module.get<CoursePageController>(CoursePageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
