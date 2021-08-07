/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import { PostEntity } from './entities/post.entity';

@EntityRepository(PostEntity)
export class PostsRepository extends Repository<PostEntity> {}
