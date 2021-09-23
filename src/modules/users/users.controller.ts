import { Body, Controller, Get, Query, Post } from '@nestjs/common';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { FindOneUserQuery } from './dto/findOneUser.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('all')
  getUsers(): any {
    return this.usersService.getAllUsers();
  }

  @Post('add')
  async createUser(@Body() createUserDto: CreateUserDto): Promise<any> {
    const { name, email, password, phone } = createUserDto;

    const response = await this.usersService.creatNewUser(
      name,
      email,
      password,
      phone,
    );

    return { ok: true, data: response };
  }

  @Get('')
  async getUserById(@Query() queryParams: FindOneUserQuery) {
    console.log(queryParams);
    return 'hi';
  }
}
