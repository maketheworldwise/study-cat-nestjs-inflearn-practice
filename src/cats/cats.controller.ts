import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatRequestDto } from './\bdto/cats.request.dto';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getCurrentCat() {
    return 'current cat';
  }

  @Post('/sign-up')
  async signUp(@Body() body: CatRequestDto) {
    return await this.catsService.signUp(body);
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
