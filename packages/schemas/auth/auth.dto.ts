import { createZodDto } from "nestjs-zod";
import { loginInputSchema, loginOutputSchema, registerInputSchema } from "./auth";
import { ApiProperty } from '@nestjs/swagger';
export class LoginOutputDto extends createZodDto(loginOutputSchema) {
  @ApiProperty({ description: 'ID of the authenticated user' })
  id: string;
  @ApiProperty({ description: 'Email of the authenticated user' })
  email: string;
  @ApiProperty({ description: 'JWT access token' })
  token: string;
}

export class LoginInputDto extends createZodDto(loginInputSchema) {
  @ApiProperty({ example: 'user@example.com' })
  email: string;

  @ApiProperty({ example: 'strongPassword123' })
  password: string;
}

export class RegisterInputDto extends createZodDto(registerInputSchema) {
  @ApiProperty({ example: 'John', description: 'First name of the user' })
  name: string;

  @ApiProperty({ example: 'Doe', description: 'Last name of the user' })
  lastName: string;

  @ApiProperty({ example: 'user@example.com' })
  email: string;

  @ApiProperty({ example: 'strongPassword123' })
  password: string;
}
