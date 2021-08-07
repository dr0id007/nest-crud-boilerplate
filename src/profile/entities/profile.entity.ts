import { BaseEntity } from '../../common/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('profile')
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
}
