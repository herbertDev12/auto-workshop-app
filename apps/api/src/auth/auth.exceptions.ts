import { HttpException, HttpStatus } from '@nestjs/common';

export class WrongUsernameOrPasswordError extends HttpException {
  constructor() {
    super('Wrong username or password', HttpStatus.UNAUTHORIZED);
  }
}

export class UserAlreadyExistsException extends HttpException {
  constructor() {
    super('A user with that email already exists', HttpStatus.CONFLICT);
  }
}

export class NotAllowedInB2CError extends HttpException {
  constructor() {
    super('Not allowed in B2C deployment', HttpStatus.FORBIDDEN);
  }
}

export class TurnstileHttpException extends HttpException {
  constructor(status: number) {
    super(`Turnstile http exception status: ${status}`, HttpStatus.BAD_REQUEST);
  }
}

export class TurnstileInvalidTokenException extends HttpException {
  constructor(code: string) {
    super(`Turnstile invalid token: ${code}`, HttpStatus.UNAUTHORIZED);
  }
}

export class TurnstileException extends HttpException {
  constructor(error: string) {
    super(`Turnstile exception: ${error}`, HttpStatus.BAD_REQUEST);
  }
}
