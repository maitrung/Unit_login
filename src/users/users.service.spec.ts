import { Test, TestingModule } from '@nestjs/testing';
import { UsersSer } from './users.service';

describe('UsersService', () => {
  let service: UsersSer;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersSer],
    }).compile();

    service = module.get<UsersSer>(UsersSer);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
