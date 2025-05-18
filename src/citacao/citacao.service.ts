import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Citacao } from './entities/citacao.entity';
import { CreateCitacaoDto } from './dto/create-citacao.dto';
import { Categoria } from './entities/categoria.entity';


@Injectable()
export class CitacaoService {
  constructor(
    @InjectRepository(Citacao)
    private citacaoRepo: Repository<Citacao>,

    @InjectRepository(Categoria)
    private categoriaRepo: Repository<Categoria>
  ) {}

async criar(dto: CreateCitacaoDto): Promise<Citacao> {
  debugger
  const categoria = await this.categoriaRepo.findOne({
    where: { id: dto.categoriaId }
  });

  if (!categoria) {
    throw new HttpException('Categoria não encontrada', HttpStatus.NOT_FOUND);
  }

  const nova = this.citacaoRepo.create({
    texto: dto.texto,
    autor: dto.autor,
    categoria: categoria,
  });

  return this.citacaoRepo.save(nova);
}

  async listar(): Promise<Citacao[]> {
    return this.citacaoRepo.find({ order: { dataCriacao: 'DESC' } });
  }

  async aleatoria(): Promise<Citacao> {
    const todas = await this.citacaoRepo.find();
    return todas[Math.floor(Math.random() * todas.length)];
  }
}
