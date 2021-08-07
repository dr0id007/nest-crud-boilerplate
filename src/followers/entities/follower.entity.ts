import { BaseEntity } from '../../common/base.entity';
import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { UserEntity as User } from '../../users/entities/user.entity';

@Entity('followers')
export class FollowerEntity extends BaseEntity {
  @ManyToOne((type) => User, { nullable: false })
  @JoinColumn({ name: 'followerId', referencedColumnName: 'id' })
  follower: User;

  @ManyToOne((type) => User, { nullable: false })
  @JoinColumn({ name: 'followeeId', referencedColumnName: 'id' })
  followee: User;
}
