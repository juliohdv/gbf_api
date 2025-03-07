import { Test, TestingModule } from '@nestjs/testing';
import { BultoController } from './bulto.controller';
import { BultoService } from './bulto.service';

describe('BultoController', () => {
  let controller: BultoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BultoController],
      providers: [BultoService],
    }).compile();

    controller = module.get<BultoController>(BultoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
