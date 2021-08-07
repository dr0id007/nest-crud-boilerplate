import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FollowersService } from './followers.service';
import { CreateFollowerDto } from './dto/create-follower.dto';
import { UpdateFollowerDto } from './dto/update-follower.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Followers')
@Controller('followers')
export class FollowersController {
  constructor(private readonly followersService: FollowersService) {}

  @Post()
  async create(@Body() createFollowerDto: CreateFollowerDto) {
    return await this.followersService.create(createFollowerDto);
  }

  @Get()
  async findAll() {
    return await this.followersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.followersService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateFollowerDto: UpdateFollowerDto,
  ) {
    return await this.followersService.update(id, updateFollowerDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.followersService.remove(id);
  }
}
