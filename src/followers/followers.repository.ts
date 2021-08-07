/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import { FollowerEntity } from './entities/follower.entity';

@EntityRepository(FollowerEntity)
export class FollowersRepository extends Repository<FollowerEntity> {}
