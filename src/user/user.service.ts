//================
// Import
//================
import { Injectable } from '@nestjs/common';
import { User } from './user.interface';


//================
// Service class
//================
@Injectable()
export class UserService {

  private user: User = {
    id: 1,
    admin: false,
  }

  getData() {
    return this.user;
  }
}
