import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  readonly firstname: string;
  readonly lastname: string;
  readonly avatar: string;
  readonly bio: string;
}
