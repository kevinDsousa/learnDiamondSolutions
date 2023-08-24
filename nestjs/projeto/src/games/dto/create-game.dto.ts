import { IsDate, IsMongoId, IsNotEmpty, IsString } from 'class-validator';

export class CreateGameDto {
  @IsMongoId()
  readonly id: string;
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsString()
  @IsNotEmpty()
  readonly describe: string;
  @IsDate()
  @IsNotEmpty()
  readonly releaseDate: Date;
  @IsString()
  @IsNotEmpty()
  readonly website: string;
  // readonly company: ;
  // readonly console: ;
}
