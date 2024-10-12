import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // Cria a aplicação Nest com o módulo principal

  const config = new DocumentBuilder() // Configurações para a documentação Swagger
    .setTitle('API do Projeto Nest') // Define o título da API
    .setDescription('API do BSI') // Define a descrição da API
    .setVersion('1.0') // Define a versão da API
    .build();
    
  const document = SwaggerModule.createDocument(app, config); // Cria o documento Swagger
  SwaggerModule.setup('api', app, document); // Configura o endpoint da documentação Swagger

  await app.listen(3002); // Inicia o servidor na porta 3002
}
bootstrap(); // Executa a função de inicialização