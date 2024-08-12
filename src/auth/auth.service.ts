import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  // injecting a user service
  constructor(
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
  ) {}
  public login(email: string, password: string, id: string) {
    // checking if the user exist in the database or not
    const user = this.userService.findOneById('123');

    // login

    // token
    return 'SAMPLE_TOKEN';
  }

  public isAuth() {
    return true;
  }
}
