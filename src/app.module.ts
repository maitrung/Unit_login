import { Module, Session } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { JwtService } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UsersModule, AuthModule,ConfigModule.forRoot(),],
  controllers: [AppController],
  providers: [AppService, AuthService,JwtService,],
})
export class AppModule {}
