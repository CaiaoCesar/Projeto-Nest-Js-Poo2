import { Controller, Post, Body, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthLoginDTO } from './dto/auth-login.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() authLoginDto: AuthLoginDTO) {
    const user = await this.authService.validateUser(authLoginDto.email, authLoginDto.password);
    return this.authService.login(user);
  }
}
