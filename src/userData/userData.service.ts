import { Injectable } from '@nestjs/common';
import { UserData } from './userData.entity';

@Injectable()
export class UserDataService {
  public users: UserData[] = [
    {
      username: 'user1',
      password: '123',
      email: 'user@gmail.com',
      age: 23,
    },

    {
      username: 'user2',
      password: '123',
      email: 'user@gmail.com',
      age: 23,
    },
    {
      username: 'user3',
      password: '123',
      email: 'user@gmail.com',
      age: 23,
    },
  ];

  getUserByName(username: string): UserData {
    
            return   this.users.find((user) => user.username === username);
  }
}
