import { ApiProperty } from '@nestjs/swagger';

export class CatResponseDto {
  @ApiProperty({
    example: '<id>',
    description: 'id',
  })
  id: string;

  @ApiProperty({
    example: '<email>',
    description: 'email',
  })
  email: string;

  @ApiProperty({
    example: '<name>',
    description: 'name',
  })
  name: string;
}
