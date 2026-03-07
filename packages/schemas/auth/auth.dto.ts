import { createZodDto } from "nestjs-zod";
import { loginInputSchema, loginOutputSchema, registerInputSchema } from "./auth";

export class LoginOutputDto extends createZodDto(loginOutputSchema) {}
export class LoginInputDto extends createZodDto(loginInputSchema) {}
export class RegisterInputDto extends createZodDto(registerInputSchema) {}
