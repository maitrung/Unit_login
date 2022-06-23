import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import process from 'process';
import { ConfigModule } from '@nestjs/config';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      
      secret:"secret_key",
      resave: false,
      saveUninitialized: true,
      cookie:{
        maxAge:3600000*24}
      
     
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());
 
  await app.listen(3000);
}
bootstrap();
