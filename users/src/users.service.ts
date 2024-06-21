import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  private users: CreateUserDto[] = [];

  create(createUserDto: CreateUserDto): CreateUserDto {
    const newUser = { ...createUserDto };
    this.users.push(newUser);
    return newUser;
  }

  findAll(): CreateUserDto[] {
    return this.users;
  }
}
