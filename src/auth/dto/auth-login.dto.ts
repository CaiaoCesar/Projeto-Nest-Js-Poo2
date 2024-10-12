import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, MinLength } from "class-validator";

// DTO para login de autenticação
export class AuthLoginDTO {

  // Campo de email com validação e exemplo para documentação
  @ApiProperty({ example: "Leo@Humberto.com" }) 
  @IsEmail()
  email: string;

  // Campo de senha com validação de tamanho mínimo e exemplo
  @ApiProperty({ example: "Leo123" }) 
  @MinLength(6)
  password: string;
}