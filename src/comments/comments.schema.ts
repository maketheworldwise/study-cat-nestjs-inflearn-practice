import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaOptions, Types } from 'mongoose';
import { IsNotEmpty, IsPositive, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

const options: SchemaOptions = {
  timestamps: true,
};

@Schema(options)
export class Comments extends Document {
  @ApiProperty({
    description: 'cat id',
    required: true,
  })
  @Prop({
    required: true,
    ref: 'cats',
    type: Types.ObjectId,
  })
  @IsNotEmpty()
  author: Types.ObjectId;

  @ApiProperty({
    description: 'contents',
    required: true,
  })
  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  contents: string;

  @ApiProperty({
    description: 'likes',
  })
  @Prop({
    default: 0,
  })
  @IsString()
  @IsNotEmpty()
  @IsPositive()
  likeCount: number;

  @ApiProperty({
    description: 'post, information',
    required: true,
  })
  @Prop({
    required: true,
    ref: 'cats',
    type: Types.ObjectId,
  })
  @IsNotEmpty()
  info: Types.ObjectId;
}

export const CommentsSchema = SchemaFactory.createForClass(Comments);
