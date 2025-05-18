import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Citacao } from '../../citacao/entities/citacao.entity';

@Entity()
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @OneToMany(() => Citacao, citacao => citacao.categoria)
  citacoes: Citacao[];
}