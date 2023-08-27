import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { Consoles } from 'src/consoles/models/consoles.modules';
import { Developers } from 'src/developer/models/developers.modules';

export class CreateGameDto {
  @ApiProperty({ description: 'Nome do jogo' })
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({ description: 'Descrição do jogo' })
  @IsString()
  @IsNotEmpty()
  readonly describe: string;

  @ApiProperty({ description: 'Data de lançamento' })
  @IsString()
  @IsNotEmpty()
  readonly releaseDate: string;

  @ApiProperty({ description: 'website do jogo' })
  @IsString()
  @IsNotEmpty()
  readonly website: string;

  @ApiProperty({ description: 'Array de consoles' })
  @IsArray()
  @IsNotEmpty()
  readonly consoles: Consoles[];

  @ApiProperty({ description: 'Array de desenvolvedores' })
  @IsArray()
  @IsNotEmpty()
  readonly developer: Developers[];
}
