import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller'; // Certifique-se de importar o controller corretamente

@Module({
  controllers: [AuthController], // Registrando o controller no módulo
})
export class AuthModule {}
