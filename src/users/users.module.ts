import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './user.service';
import { PrismaService } from '../prisma/prisma.service'; // Importando o PrismaService

@Module({
  controllers: [UsersController], // Controlador de usuários
  providers: [UsersService, PrismaService], // Serviços utilizados
  exports: [UsersService], // Exporta UsersService para outros módulos
})
export class UsersModule {}