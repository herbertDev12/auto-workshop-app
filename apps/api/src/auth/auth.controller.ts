import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { LoginInputDto, LoginOutputDto, RegisterInputDto } from '@schemas/auth/auth.dto';
import { AuthService } from './auth.service';
import {
  ApiBody,
  ApiTags,
  ApiOperation,
  ApiCreatedResponse,
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

  @HttpCode(HttpStatus.OK)
  @Post('/login') 
  @ApiOperation({ summary: 'Signin a user' })
  @ApiBody({ type: LoginInputDto })
  @ApiCreatedResponse({
    type: LoginOutputDto,
    description: 'User loged successfully, returns the email of the user',
  })
  signIn(@Body() signInputDto: LoginInputDto) {
    return this.authService.signIn(signInputDto);
  }
/*
  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
*/
}
