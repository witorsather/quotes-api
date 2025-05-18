import { Test, TestingModule } from '@nestjs/testing';
import { CitacaoService } from './citacao.service';

describe('CitacaoService', () => {
  let service: CitacaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CitacaoService],
    }).compile();

    service = module.get<CitacaoService>(CitacaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
