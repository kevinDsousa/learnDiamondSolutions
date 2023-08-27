import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateConsoleDto {
  @ApiProperty({ description: 'Nome do console' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Data de lançamento' })
  @IsString()
  @IsNotEmpty()
  dataRelease: string;

  @ApiProperty({ description: 'website do console' })
  @IsString()
  @IsNotEmpty()
  website: string;

  @ApiProperty({ description: 'Empresa que possui console' })
  @IsString()
  @IsNotEmpty()
  company: string;
}
