import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-profile.dto';
import { UpdateUserDto } from './dto/update-profile.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity as User } from './entities/profile.entity';
import { ERROR } from './profile.error';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  async create(createUserDto: CreateUserDto) {
    if ((await this.userRepo.find({ email: createUserDto.email })).length > 0)
      return { err: ERROR.EMAIL };

    if (
      (await this.userRepo.find({ username: createUserDto.username })).length >
      0
    )
      return { err: ERROR.USERNAME };

    const user: User = this.userRepo.create(createUserDto);

    const hashPassword = await hash(createUserDto.password, 10);
    user.password = hashPassword;

    return await this.userRepo.save(user);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepo.find();
  }

  async findOne<Type>(param: Type): Promise<User> {
    return await this.userRepo.findOne(param);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userRepo.update(id, updateUserDto);
  }

  async remove(id: string) {
    return await this.userRepo.delete(id);
  }
}
