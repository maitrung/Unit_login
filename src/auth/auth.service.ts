import { Injectable, UseGuards } from '@nestjs/common';
import { UsersSer, User } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
    
    
    constructor(private userService:UsersSer,private jwtService: JwtService,){};
    
    async validateUser(username:string,password:string):Promise<any>{
        const user=await this.userService.findOne(username);
        if(user&&user.password===password){
            const {username,password,...rest}=user;
            return user;
        }
        return null;
    }
    
    async login (user:any){
        const payload={name:user.name,sub:user.password};
       
        return {access_token:this.jwtService.sign(payload)};
        
    }
}
