import { Module } from '@nestjs/common';
import { UsersService } from './profile.service';
import { UsersController } from './profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity as User } from './entities/profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class ProfileModule {}
