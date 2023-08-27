import { IsArray, IsNotEmpty, IsString } from 'class-validator';
import { Consoles } from 'src/consoles/models/consoles.modules';
import { Developers } from 'src/developer/models/developers.modules';

export class CreateGameDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  readonly describe: string;
  @IsString()
  @IsNotEmpty()
  readonly releaseDate: string;
  @IsString()
  @IsNotEmpty()
  readonly website: string;
  @IsArray()
  @IsNotEmpty()
  readonly consoles: Consoles[];
  @IsArray()
  @IsNotEmpty()
  readonly developer: Developers[];
}
