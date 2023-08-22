import { Test, TestingModule } from '@nestjs/testing';
import { ConsolesController } from './consoles.controller';
import { ConsolesService } from './consoles.service';

describe('ConsolesController', () => {
  let controller: ConsolesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConsolesController],
      providers: [ConsolesService],
    }).compile();

    controller = module.get<ConsolesController>(ConsolesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
