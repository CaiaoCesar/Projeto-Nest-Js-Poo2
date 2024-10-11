import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: { email: string; password: string }): Promise<User> {
    return this.prisma.user.create({
      data,
    });
  }

  // Método para listar todos os usuários
  async findAllUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  // Outros métodos como atualizar, deletar, etc.
}
