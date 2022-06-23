import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from './auth.service';
import * as dotevn from 'dotenv';
dotevn.config();

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
constructor(private authService:AuthService){
    super({
        secretOrKey:process.env.JWT_SECRET,
    });// nơi định cấu hình ban đầu khi đăng nhập với bên thứ 3-fb, tw, gg,...
}
async validate(username:string,password:string):Promise<any>{
    const user= await this.authService.validateUser(username,password);
    if(!user){
        throw new UnauthorizedException();
    }
    return user;
}
}