// src/users/users.module.ts
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './user.service';
import { PrismaService } from '../prisma/prisma.service'; // Importando o PrismaService

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService],
  exports: [UsersService], // Para poder ser usado em outros módulos, se necessário
})
export class UsersModule {}
