import { Injectable } from '@nestjs/common';
import { User } from './schemas/user.schema';

import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async getAllUsers() {
    return await this.usersRepository.find({});
  }

  async creatNewUser(
    name: string,
    email: string,
    password: string,
    phone: string,
  ) {
    return this.usersRepository.create({
      name,
      email,
      password,
      phone,
    });
  }
}
