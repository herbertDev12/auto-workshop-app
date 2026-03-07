import { Body, Controller, Post } from '@nestjs/common';
import { LoginOutputDto, RegisterInputDto } from '@schemas/auth/auth.dto';
import { AuthService } from './auth.service';
import {
  ApiBody,
  ApiTags,
  ApiOperation,
  ApiCreatedResponse,
  ApiOkResponse,
} from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/register')
  @ApiOperation({ summary: 'Register a new user account' })
  @ApiBody({ type: RegisterInputDto })
  @ApiCreatedResponse({
    type: LoginOutputDto,
    description: 'User registered successfully, returns a JWT access token',
  })
  register(@Body() registerInputDto: RegisterInputDto) {
    return this.authService.register(registerInputDto);
  }

}
