import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post.dto';

@Controller('post')
@ApiTags('Post')
export class PostController {
  // injecting the post service
  constructor(private readonly postService: PostService) {}

  @Get('/:userId?')
  public getPost(@Param('userId') userId: string) {
    return this.postService.findAll(userId);
  }

  @Post()
  public createPost(@Body() createPostDto: CreatePostDto) {}
}
