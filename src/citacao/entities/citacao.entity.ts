import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { Categoria } from './categoria.entity';

@Entity()
export class Citacao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  texto: string;

  @Column()
  autor: string;

  @ManyToOne(() => Categoria, categoria => categoria.citacoes, { eager: true })
  categoria: Categoria;

  @CreateDateColumn()
  dataCriacao: Date;
}
