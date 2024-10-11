import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module'; // seu módulo de usuários
import { PrismaService } from './prisma/prisma.service'; // PrismaService

@Module({
  imports: [UsersModule],
  providers: [PrismaService], // Registre o PrismaService aqui
})
export class AppModule {}
