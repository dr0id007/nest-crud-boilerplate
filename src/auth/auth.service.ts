import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { compare } from 'bcrypt';
import { UsersRepository } from 'src/users/users.repository';
import { UserEntity as User } from 'src/users/entities/user.entity';
import { sign, verify } from 'jsonwebtoken';

const JWT_SECRET = 'secret';

@Injectable()
export class AuthService {
  constructor(private userRepo: UsersRepository) {}

  public static PASSWORD_SALT_ROUNDS = 10;

  async createNewSession(email: string, password: string) {
    const user: User = await this.userRepo.findOne({ where: { email } });
    if (!user) {
      throw new NotFoundException('Email not found.');
    }
    const passMatch = this.matchPassHash(password, user.password);
    if (!passMatch) {
      throw new NotFoundException('password is incorrect.');
    }
    //   create new session.
    return this.createToken(JSON.stringify({ email, id: user.id }));
  }

  async createToken(payload: string) {
    //   can add expires option
    return sign(payload, JWT_SECRET);
  }

  private async matchPassHash(
    password: string,
    hash: string,
  ): Promise<boolean> {
    return (await compare(password, hash)) === true;
  }

  async verifySessionToken(token: string) {
    if (!token) {
      throw new UnauthorizedException('Session not found');
    }

    return verify(token, JWT_SECRET, (err, payload) => {
      if (err) {
        throw new UnauthorizedException('Invalid Token');
      }
      return { success: true, payload };
    });
  }
}
