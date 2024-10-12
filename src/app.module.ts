import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaService } from 'prisma/prisma.service'; 
import { AuthModule } from './auth/auth.module'; // Auth Module para rotas de login/registro

@Module({
  imports: [UsersModule, AuthModule], // Importa módulos de usuários e autenticação
  providers: [PrismaService], // Fornece o PrismaService para acesso ao banco de dados
})
export class AppModule {}