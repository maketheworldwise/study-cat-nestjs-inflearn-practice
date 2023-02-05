import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CatRequestDto } from './dto/cat.request.dto';
import { CatResponseDto } from './\bdto/cat.response.dto';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @ApiOperation({ summary: '현재 고양이 가져오기' })
  @Get()
  getCurrentCat() {
    return 'current cat';
  }

  @ApiOperation({ summary: '회원가입' })
  @ApiResponse({
    status: 200,
    description: '<message>',
  })
  @ApiResponse({
    status: 500,
    description: '<message>',
    type: CatResponseDto,
  })
  @Post('/sign-up')
  async signUp(@Body() body: CatRequestDto) {
    return await this.catsService.signUp(body);
  }

  @ApiOperation({ summary: '로그인' })
  @Post('/sign-in')
  signIn() {
    return 'sign-in';
  }

  @ApiOperation({ summary: '로그아웃' })
  @Post('/sign-out')
  signOut() {
    return 'sign-out';
  }

  @ApiOperation({ summary: '고양이 이미지 업로드' })
  @Post('/upload/cats')
  async uploadCat() {
    return 'upload cat';
  }
}
