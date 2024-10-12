import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';

// Teste da classe AuthController
describe('AuthController', () => {
  let controller: AuthController;

  // Configuração do módulo de teste antes de cada execução
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  // Verifica se o controlador está definido
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});