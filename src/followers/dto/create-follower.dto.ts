import { IsNotEmpty } from 'class-validator';

export class CreateFollowerDto {
  @IsNotEmpty()
  readonly followerId: string;

  @IsNotEmpty()
  readonly followeeId: string;
}
