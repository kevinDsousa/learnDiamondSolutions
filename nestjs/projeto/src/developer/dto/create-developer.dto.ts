import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDeveloperDto {
  @ApiProperty({ description: 'Nome do developer' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Data de criação' })
  @IsString()
  @IsNotEmpty()
  dataFoundation: string;

  @ApiProperty({ description: 'Website do developer' })
  @IsString()
  @IsNotEmpty()
  website: string;

  @ApiProperty({ description: 'Sede do developer' })
  @IsString()
  @IsNotEmpty()
  headquarters: string;
}
