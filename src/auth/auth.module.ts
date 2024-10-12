import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';

// Módulo de autenticação
@Module({
  imports: [
    UsersModule, // Importa o módulo de usuários
    JwtModule.register({
      secret: 'SECRET_KEY', // Chave secreta para gerar tokens JWT
      signOptions: { expiresIn: '1h' }, // Token expira em 1 hora
    }),
  ],
  providers: [AuthService], // Provedor de serviços de autenticação
  controllers: [AuthController], // Controlador de autenticação
})
export class AuthModule {}