import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  readonly username: string;

  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  readonly firstname: string;

  @IsNotEmpty()
  readonly lastname: string;

  @IsNotEmpty()
  readonly password: string;

  readonly avatar: string;

  readonly bio: string;
}
