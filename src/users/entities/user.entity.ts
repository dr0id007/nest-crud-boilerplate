import { BaseEntity } from '../../common/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { PostEntity as Post } from '../../posts/entities/post.entity';
import { FollowerEntity as Follower } from '../../followers/entities/follower.entity';

@Entity('users')
export class UserEntity extends BaseEntity {
  @Column({ length: 30, nullable: false, unique: true })
  username: string;

  @Column({ length: 30, nullable: false, unique: true })
  email: string;

  @Column({ length: 30 })
  firstname: string;

  @Column({ length: 30 })
  lastname: string;

  @Column({ nullable: false })
  password: string;

  @Column({ length: 100, nullable: true })
  avatar: string;

  @Column({ length: 240, nullable: true, default: '' })
  bio: string;

  @Column('boolean', { default: false })
  verified: boolean;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];

  @OneToMany(() => Follower, (follower) => follower.followee)
  followee: Follower[];

  @OneToMany(() => Follower, (follower) => follower.follower)
  follower: Follower[];
}
