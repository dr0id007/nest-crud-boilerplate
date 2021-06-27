import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity as User } from './users/entities/user.entity';
import 'dotenv';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      username: 'admin',
      password: 'admin',
      database: 'test',
      synchronize: true,
      logger: 'advanced-console',
      logging: 'all',
      entities: [User],
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
