import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller'; // Opcional
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [],
  controllers: [UsersController], // Inclua o controller se criado
  providers: [UsersService, PrismaService],
  exports: [UsersService], // Para exportar o serviço para outros módulos
})
export class UsersModule {}
