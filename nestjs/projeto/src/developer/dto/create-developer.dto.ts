import { IsDate, IsMongoId, IsNotEmpty, IsString } from 'class-validator';

export class CreateDeveloperDto {
  @IsMongoId()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsDate()
  @IsNotEmpty()
  dataFoundation: Date;

  @IsString()
  @IsNotEmpty()
  website: string;

  @IsString()
  @IsNotEmpty()
  headquarters: string;
}
