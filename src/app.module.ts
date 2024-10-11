import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module'; // Se você tiver um módulo para o Prisma

@Module({
  imports: [UsersModule, PrismaModule], // Adicione o UsersModule
})
export class AppModule {}
