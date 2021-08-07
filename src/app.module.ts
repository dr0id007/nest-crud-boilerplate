import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity as User } from './users/entities/user.entity';
import { PostEntity as Post } from './posts/entities/post.entity';
import { FollowerEntity as Follower } from './followers/entities/follower.entity';
// import { ProfileEntity as Profile } from './profile/entities/profile.entity';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';
// import { ProfileModule } from './profile/profile.module';
import { FollowersModule } from './followers/followers.module';
import 'dotenv';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      username: 'postgres',
      password: 'admin123',
      database: 'nest_crud_dev',
      synchronize: true,
      logger: 'advanced-console',
      logging: 'all',
      entities: [User, Post, Follower],
    }),
    UsersModule,
    AuthModule,
    PostsModule,
    FollowersModule,
    // ProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
