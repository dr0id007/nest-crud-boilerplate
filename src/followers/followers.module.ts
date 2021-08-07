import { Module } from '@nestjs/common';
import { FollowersService } from './followers.service';
import { FollowersController } from './followers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FollowerEntity as Follower } from './entities/follower.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Follower]), UsersModule],
  controllers: [FollowersController],
  providers: [FollowersService],
})
export class FollowersModule {}
