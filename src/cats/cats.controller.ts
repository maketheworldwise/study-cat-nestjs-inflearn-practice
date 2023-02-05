import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AuthService } from 'src/auth/auth.service';
import { SignInRequestDto } from 'src/auth/dto/signin.request.dto';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CurrentUser } from 'src/common/decorators/user.decorator';
import { CatRequestDto } from './\bdto/cat.request.dto';
import { CatResponseDto } from './\bdto/cat.response.dto';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(
    private readonly catsService: CatsService,
    private readonly authService: AuthService,
  ) {}

  @ApiOperation({ summary: '현재 고양이 가져오기' })
  @UseGuards(JwtAuthGuard)
  @Get()
  getCurrentCat(@CurrentUser() cat) {
    return cat.readOnlyData;
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
  signIn(@Body() body: SignInRequestDto) {
    return this.authService.createJwt(body);
  }

  @ApiOperation({ summary: '고양이 이미지 업로드' })
  @Post('/upload/cats')
  async uploadCat() {
    return 'upload cat';
  }
}
