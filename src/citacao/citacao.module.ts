import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // ✅ Importa TypeORM para este módulo
import { Citacao } from './entities/citacao.entity'; // ✅ Entidade
import { CitacaoService } from './citacao.service';
import { CitacaoController } from './citacao.controller';
import { Categoria } from './entities/categoria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Citacao, Categoria])], // ✅ Aqui é onde o Nest "vê" a entidade
  providers: [CitacaoService],
  controllers: [CitacaoController],
})
export class CitacaoModule {}
// ✅ O módulo CitacaoModule importa o TypeOrmModule com a entidade Citacao, permitindo que o serviço e o controlador acessem o repositório da entidade Citacao. Isso é essencial para a funcionalidade de CRUD do módulo.
// ✅ O módulo CitacaoModule é responsável por agrupar a lógica relacionada às citações, incluindo o serviço e o controlador, e também configura o TypeORM para trabalhar com a entidade Citacao. Isso facilita a manutenção e a escalabilidade do código.