import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class PostService {
  constructor(
    // Injecting User Service
    private readonly userService: UserService,
  ) {}
  public findAll(userId: string) {
    // Users Service
    // Find A User
    const user = this.userService.findOneById(userId);

    // return a Post
    return [
      {
        user: user,
        title: 'Test Title',
        content: ' Test Content',
      },
      {
        user: user,
        title: 'Test Title 2',
        content: ' Test Content 2',
      },
    ];
  }
}
