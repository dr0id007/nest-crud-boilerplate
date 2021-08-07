import { PartialType } from '@nestjs/mapped-types';
import { CreatePostDto } from './create-post.dto';
import { MediaType } from '../entities/post.types';

export class UpdatePostDto extends PartialType(CreatePostDto) {
  readonly text: string;
  readonly mediaUrl: string;
  readonly mediaType: MediaType;
  readonly isMedia: boolean;
}
