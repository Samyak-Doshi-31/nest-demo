import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    getUsers(){
        return 'users'
    }

    postUsers(){
        return 'post users'
    }
}