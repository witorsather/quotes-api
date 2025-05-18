import { Test, TestingModule } from '@nestjs/testing';
import { CitacaoController } from './citacao.controller';

describe('CitacaoController', () => {
  let controller: CitacaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CitacaoController],
    }).compile();

    controller = module.get<CitacaoController>(CitacaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
