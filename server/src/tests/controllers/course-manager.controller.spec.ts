import { Test, TestingModule } from '@nestjs/testing';
import { CourseManagerController } from '../../controllers/course-manager.controller';

describe('CoursemanagerController', () => {
  let controller: CourseManagerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourseManagerController],
    }).compile();

    controller = module.get<CourseManagerController>(CourseManagerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
