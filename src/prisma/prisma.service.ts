import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

// Serviço Prisma para gerenciar conexão com o banco de dados
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {

  // Inicializa o módulo e conecta ao banco de dados
  async onModuleInit() {
    await this.$connect();
  }

  // Desconecta do banco de dados ao destruir o módulo
  async onModuleDestroy() {
    await this.$disconnect();
  }
}