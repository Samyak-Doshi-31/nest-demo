import {Controller, Get, Post} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController{
    constructor(private readonly userService: UserService) {}

    @Get()
    getUsers(): string {
        return this.userService.getUsers();
    }

    @Post()
    postUsers(): string {
        return this.userService.postUsers();
    }
}