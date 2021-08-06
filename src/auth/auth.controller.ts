import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';

interface LoginRequestBody {
  email: string;
  password: string;
}

interface LoginResponseBody {
  token: string;
}

interface VerifyRequestBody {
  token: string;
}

// interface VerifyResponseBody {
//   success: boolean;
//   payload: JSON;
// }

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/login')
  async login(@Body() body: LoginRequestBody): Promise<LoginResponseBody> {
    const token = await this.authService.createNewSession(
      body.email,
      body.password,
    );
    return { token };
  }
  @Post('/verify')
  async verify(@Body() body: VerifyRequestBody) {
    return await this.authService.verifySessionToken(body.token);
  }
}
