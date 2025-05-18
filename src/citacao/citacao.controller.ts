import { Controller, Post, Body, Get } from '@nestjs/common';
import { CitacaoService } from './citacao.service';
import { CreateCitacaoDto } from './dto/create-citacao.dto';

@Controller('citacoes')
export class CitacaoController {
  constructor(private readonly service: CitacaoService) {}

  @Post()
  criar(@Body() dto: CreateCitacaoDto) {
    return this.service.criar(dto);
  }

  @Get()
  listar() {
    return this.service.listar();
  }

  @Get('aleatoria')
  aleatoria() {
    return this.service.aleatoria();
  }
}
