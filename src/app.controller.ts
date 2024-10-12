import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // Define o controlador
export class AppController {
  constructor(private readonly appService: AppService) {} // Injeta o AppService

  @Get() // Define o endpoint GET na raiz
  getHello(): string {
    // Retorna uma mensagem de saudação
    return this.appService.getHello();
  }
}