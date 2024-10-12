import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserDto): Promise<User> {
    // Cria um novo usuário com os dados fornecidos
    return this.prisma.user.create({
      data,
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    // Encontra um usuário pelo email
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async findAllUsers(): Promise<User[]> {
    // Retorna todos os usuários
    return this.prisma.user.findMany();
  }
}