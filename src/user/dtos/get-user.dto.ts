import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

export class GetUserParamsDto {
  // Api property for swagger use to add up description in the swagger api
  @ApiPropertyOptional({
    description: 'Get user with a specific id',
    example: 123,
  })
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  id?: number;
}
