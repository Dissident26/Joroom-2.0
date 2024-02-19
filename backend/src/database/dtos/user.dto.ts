import { ApiProperty } from '@nestjs/swagger';

import { CommentDto, PostDto } from '.';

export class UserDto {
  @ApiProperty({
    type: Number,
  })
  id: number;

  @ApiProperty({
    uniqueItems: true,
    maxLength: 250,
    type: String,
  })
  name: string;

  @ApiProperty({
    type: String,
    uniqueItems: true,
  })
  email: string;

  @ApiProperty({
    type: String,
  })
  imageUrl: string;

  @ApiProperty({
    type: String,
  })
  description: string;

  @ApiProperty({
    type: Boolean,
  })
  isActive: boolean;

  @ApiProperty({ type: () => Array<PostDto> })
  posts: PostDto[];

  @ApiProperty({ type: () => Array<CommentDto> })
  comments: CommentDto[];

  @ApiProperty({ type: Date })
  created_at: Date;
}
