import { Test, TestingModule } from '@nestjs/testing';
import { BultoService } from './bulto.service';

describe('BultoService', () => {
  let service: BultoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BultoService],
    }).compile();

    service = module.get<BultoService>(BultoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
