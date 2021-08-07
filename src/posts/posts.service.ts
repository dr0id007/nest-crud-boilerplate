import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity as Post } from './entities/post.entity';
import { UserEntity as User } from 'src/users/entities/user.entity';
import { ERROR } from './posts.error';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postRepo: Repository<Post>,
    private usersService: UsersService,
  ) {}

  async create(createPostDto: CreatePostDto) {
    const user: User = await this.usersService.findOne(createPostDto.userId);

    if (user) {
      const post: Post = this.postRepo.create({ ...createPostDto, user });
      console.log('post:', post, createPostDto, user);
      return await this.postRepo.save(post);
    }
    return ERROR.USER;
  }

  async findAll(): Promise<Post[]> {
    return await this.postRepo.find();
  }

  async findOne<Type>(param: Type): Promise<Post> {
    return await this.postRepo.findOne(param);
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    return await this.postRepo.update(id, updatePostDto);
  }

  async remove(id: string) {
    return await this.postRepo.delete(id);
  }
}
