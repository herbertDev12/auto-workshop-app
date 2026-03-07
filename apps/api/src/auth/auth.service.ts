import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../database/prisma.service';
import { RegisterInputDto } from '@schemas/auth/auth.dto';
import { UserAlreadyExistsException } from './auth.exceptions';


const SALT_ROUNDS = 10;

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async register(dto: RegisterInputDto): Promise<{ id: string; email: string; name: string }> {
    const existing = await this.prisma.user.findUnique({
      where: { email: dto.email },
    });

    if (existing) {
      throw new UserAlreadyExistsException();
    }

    const passwordHash = await bcrypt.hash(dto.password, SALT_ROUNDS);

    const user = await this.prisma.user.create({
      data: {
        email: dto.email,
        passwordHash,
        name: `${dto.name} ${dto.lastName}`,
      },
      select: {
        id: true,
        email: true,
        name: true,
      },
    });

    return user;
  }
}
