import { IsNotEmpty } from 'class-validator';
import { MediaType } from '../entities/post.types';

export class CreatePostDto {
  @IsNotEmpty()
  readonly text: string;

  readonly mediaUrl: string;

  readonly mediaType: MediaType;

  @IsNotEmpty()
  readonly isMedia: boolean;

  @IsNotEmpty()
  readonly userId: string;
}
