import { IsString, IsInt } from 'class-validator';

export class CreateCitacaoDto {
  @IsString()
  texto: string;

  @IsString()
  autor: string;

  @IsInt()
  categoriaId: number;
}
