import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthRegisterDTO } from './dto/auth-register.dto';
import { AuthLoginDTO } from './dto/auth-login.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  @Post('register')
  register(@Body() registerDTO: AuthRegisterDTO) {
    return { message: 'User registered successfully', data: registerDTO };
  }

  @Post('login')
  login(@Body() loginDTO: AuthLoginDTO) {
    return { message: 'User logged in successfully', data: loginDTO };
  }
}
