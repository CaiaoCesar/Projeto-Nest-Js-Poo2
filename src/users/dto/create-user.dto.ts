import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Caio César' }) // Nome do usuário
  @IsString()
  name: string;

  @ApiProperty({ example: 'Caio@exemplo.com' }) // Email do usuário
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'senha123' }) // Senha do usuário
  @IsString()
  password: string;

  @ApiProperty({ example: '11999999999' }) // Telefone do usuário
  phone: string; 

  @ApiProperty({ example: 'Salinas' }) // Cidade do usuário
  @IsString()
  city: string; 
}