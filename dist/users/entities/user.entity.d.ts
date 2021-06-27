import { BaseEntity } from '../../common/base.entity';
export declare class UserEntity extends BaseEntity {
    username: string;
    name: string;
    avatar: string;
    bio: string;
    followerCount: number;
    followeeCount: number;
    verified: boolean;
}
