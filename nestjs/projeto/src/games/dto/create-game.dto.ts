import { IsMongoId, IsNotEmpty, IsString } from 'class-validator';

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
  @IsMongoId()
  readonly console: string;
  @IsMongoId()
  readonly developer: string;
}
