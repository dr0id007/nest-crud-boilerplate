import { Injectable } from '@nestjs/common';
import { CreateFollowerDto } from './dto/create-follower.dto';
import { UpdateFollowerDto } from './dto/update-follower.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { FollowerEntity as Follower } from './entities/follower.entity';
import { ERROR } from './followers.error';
import { UsersService } from 'src/users/users.service';
import { UserEntity as User } from 'src/users/entities/user.entity';

@Injectable()
export class FollowersService {
  constructor(
    @InjectRepository(Follower) private followerRepo: Repository<Follower>,
    private usersService: UsersService,
  ) {}

  async create(createFollowerDto: CreateFollowerDto) {
    const followerUser: User = await this.usersService.findOne(
      createFollowerDto.followerId,
    );

    const followeeUser: User = await this.usersService.findOne(
      createFollowerDto.followeeId,
    );

    if (followerUser && followeeUser) {
      const follower: Follower = this.followerRepo.create({
        followee: followerUser,
        follower: followeeUser,
      });

      return await this.followerRepo.save(follower);
    }
    return ERROR.USER;
  }

  async findAll(): Promise<Follower[]> {
    return await this.followerRepo.find();
  }

  async findOne<Type>(param: Type): Promise<Follower> {
    return await this.followerRepo.findOne(param);
  }

  async update(id: string, updateFollowerDto: UpdateFollowerDto) {
    const followerUser: User = await this.usersService.findOne(
      updateFollowerDto.followerId,
    );

    const followeeUser: User = await this.usersService.findOne(
      updateFollowerDto.followeeId,
    );

    if (followerUser && followeeUser) {
      return await this.followerRepo.update(id, {
        follower: followerUser,
        followee: followeeUser,
      });
    }
    return ERROR.USER;
  }

  async remove(id: string) {
    return await this.followerRepo.delete(id);
  }
}
