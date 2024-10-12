import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController], // Define o controlador a ser testado
      providers: [AppService], // Define o serviço utilizado pelo controlador
    }).compile();

    appController = app.get<AppController>(AppController); // Inicializa o controlador
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      // Testa se o método getHello retorna a string correta
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});