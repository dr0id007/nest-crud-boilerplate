/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from './entities/profile.entity';

@EntityRepository(UserEntity)
export class UsersRepository extends Repository<UserEntity> {}
