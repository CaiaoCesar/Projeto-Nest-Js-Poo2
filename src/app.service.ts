import { Injectable } from '@nestjs/common';

@Injectable() // Marca a classe como um serviço injetável
export class AppService {
  getHello(): string {
    // Retorna uma mensagem de saudação
    return 'Hello World!';
  }
}