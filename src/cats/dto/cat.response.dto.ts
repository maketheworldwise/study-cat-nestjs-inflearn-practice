import { ApiProperty, PickType } from '@nestjs/swagger';
import { Cat } from '../cats.schema';

export class CatResponseDto extends PickType(Cat, ['email', 'name'] as const) {
  @ApiProperty({
    example: '<id>',
    description: 'id',
  })
  id: string;
}
