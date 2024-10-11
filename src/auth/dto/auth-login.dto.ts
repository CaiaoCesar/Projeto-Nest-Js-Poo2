import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, MinLength } from "class-validator";

export class AuthLoginDTO {
  @ApiProperty({ example: "Leo@Humberto.com" })
  @IsEmail()
  email: string;

  @ApiProperty({ example: "Leo123" })
  @MinLength(6)
  password: string;
}
