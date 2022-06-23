import { Module } from '@nestjs/common';
import { UsersSer } from './users.service';

@Module({
  providers: [UsersSer],
  exports:[UsersSer]
})
export class UsersModule {}
