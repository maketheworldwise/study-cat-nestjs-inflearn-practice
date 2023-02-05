import { Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getCurrentCat() {
    return 'current cat';
  }

  @Post('/sign-up')
  async signUp() {
    return 'sign-up';
  }

  @Post('/sign-in')
  signIn() {
    return 'sign-in';
  }

  @Post('/sign-out')
  signOut() {
    return 'sign-out';
  }

  @Post('/upload/cats')
  async uploadCat() {
    return 'upload cat';
  }
}
