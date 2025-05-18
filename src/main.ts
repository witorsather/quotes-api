import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { json } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 🧠 Middleware para permitir que o Nest entenda JSON
  app.use(json());

  // 🛠️ Middleware Global: escuta tudo o que entra no sistema
  // tipo requisição, URL e corpo
  app.use((req, res, next) => {
    console.log(`🧾 [MIDDLEWARE] ${req.method} ${req.url}`);
    
    // Se tiver corpo na requisição (POST/PUT), mostra também
    if (req.body && Object.keys(req.body).length > 0) {
      console.log(`📦 [BODY]`, req.body);
    }

    next(); // 🔁 Deixa seguir pro controller
  });

  // 🚀 Sobe o servidor na porta 3000 ou outra definida
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
