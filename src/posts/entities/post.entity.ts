import { BaseEntity } from '../../common/base.entity';
import { Column, Entity, ManyToOne, JoinColumn } from 'typeorm';
import { UserEntity as User } from '../../users/entities/user.entity';
import { MediaType } from './post.types';

@Entity('posts')
export class PostEntity extends BaseEntity {
  @Column({ length: 500, nullable: false })
  text: string;

  @Column({ nullable: true, default: true })
  mediaUrl: string;

  @Column({ type: 'enum', enum: MediaType, default: MediaType.NONE })
  mediaType: MediaType;

  @Column({ nullable: false, default: false })
  isMedia: boolean;

  @ManyToOne((type) => User, { nullable: false })
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: User;
}
