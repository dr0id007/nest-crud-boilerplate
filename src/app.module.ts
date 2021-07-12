import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity as User } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';
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
      entities: [User],
    }),
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
