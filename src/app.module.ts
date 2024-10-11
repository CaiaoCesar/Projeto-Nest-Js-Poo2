import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaService } from 'prisma/prisma.service'; 
import { AuthModule } from './auth/auth.module'; // Auth Module para rotas de login/registro

@Module({
  imports: [UsersModule, AuthModule],
  providers: [PrismaService],
})
export class AppModule {}
