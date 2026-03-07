import { Body, Controller, Post } from '@nestjs/common';
import { RegisterInputDto } from '@schemas/auth/auth.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  register(@Body() registerInputDto: RegisterInputDto) {
    return this.authService.register(registerInputDto);
  }
}
