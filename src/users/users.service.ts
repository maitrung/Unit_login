import { Injectable } from '@nestjs/common';

export class User{
    constructor(
        public id:number, 
        public name:string,
        public username:string, 
        public password:string,)
        {};
}
@Injectable()
export class UsersSer {
    private readonly users:User[]=
    [
    {
        id: 1,
        name:'maitrung',
        username:'maitrung',
        password:'123456'

    },
    {
        id: 2,
        name:'kien',
        username:'kien',
        password:'1234567'

    },
];
async findOne(username:string,):Promise<User|undefined>{
    return this.users.find(user=>user.username===username);
}
}
