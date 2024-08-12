import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { GetUserParamsDto } from './dtos/get-user.dto';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UserService {
  constructor(
    // injecting the Auth service
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}
  public findAll(
    getUserParamsDto: GetUserParamsDto,
    limit: number,
    page: number,
  ) {
    // Auth service
    const isAuth = this.authService.isAuth();
    console.log(isAuth);

    return [
      {
        firstName: 'Philip',
        email: 'pheel@gmail.com',
      },

      {
        firstName: 'Friday',
        email: 'friday@gmail.com',
      },
    ];
  }

  public findOneById(id: string) {
    return {
      id: 123,
      firstName: 'Friday',
      email: 'friday@gmail.com',
    };
  }
}
