import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersSer } from '../users/users.service';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { SessionSerializizer } from './session.serializer';
import * as dotevn from 'dotenv';
dotevn.config();


@Module({
    imports:[UsersSer,PassportModule.register({session:true}),
        JwtModule.register({
            
        secret:process.env.JWT_KEY,
        
        signOptions:{expiresIn:'60s'},
    })],
   
    providers:[AuthService,UsersSer, LocalStrategy,SessionSerializizer,JwtService],
    exports:[AuthService],
}) 
export class AuthModule {}
