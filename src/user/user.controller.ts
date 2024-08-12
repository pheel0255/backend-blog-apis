import {
  Controller,
  Get,
  Post,
  Patch,
  Put,
  Delete,
  Param,
  ParseIntPipe,
  Query,
  Body,
  Headers,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUserParamsDto } from './dtos/get-user.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UserService } from './user.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('user')
@ApiTags('User')
export class UserController {
  constructor(
    // injecting user service
    private readonly userService: UserService,
  ) {}
  @Get('/:id')
  // Api Query from swagger to describe the query
  // API SWAGGER these are to decorate the swagger ui
  @ApiOperation({
    summary: 'Fetches a list of registered users on the application',
  })
  @ApiResponse({
    status: 200,
    description: 'Users fetched successfully based on the query',
  })
  @ApiQuery({
    name: 'limit',
    type: 'number',
    required: false,
    description: 'The number of entries returned per query',
    example: 10,
  })
  @ApiQuery({
    name: 'page',
    type: 'number',
    required: false,
    description:
      'The position of the page number that you want the API to return',
    example: 1,
  })
  public getUsers(
    @Param() getUserParamDto: GetUserParamsDto,
    @Query('limit', ParseIntPipe) limit: number,
    @Query('page', ParseIntPipe) page: number,
  ) {
    return this.userService.findAll(getUserParamDto, limit, page);
  }

  @Post()
  public createUsers(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    console.log(createUserDto);

    return 'You create a request to user endpoints';
  }

  @Patch()
  public patchUser(@Body() patchUserDto: PatchUserDto) {
    console.log(patchUserDto);
    return 'You create a request';
  }
}
