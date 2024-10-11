// src/users/dto/create-user.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Caio César' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'Caio@exemplo.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'senha123' })
  @IsString()
  password: string;

  @ApiProperty({ example: '11999999999' }) // Agora este campo é obrigatório
  phone: string; // Removido o decorator @IsOptional

  @ApiProperty({ example: 'Salinas' })
  @IsString()
  city: string; // Este campo pode continuar opcional se for desejado
}
