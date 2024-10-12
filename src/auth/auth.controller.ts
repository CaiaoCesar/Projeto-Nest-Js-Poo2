import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthLoginDTO } from './dto/auth-login.dto';

// Controlador para autenticação
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // Rota POST para login
  @Post('login')
  async login(@Body() authLoginDto: AuthLoginDTO) {
    const user = await this.authService.validateUser(authLoginDto.email, authLoginDto.password);
    return this.authService.login(user);
  }
}