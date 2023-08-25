import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDeveloperDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  dataFoundation: string;

  @IsString()
  @IsNotEmpty()
  website: string;

  @IsString()
  @IsNotEmpty()
  headquarters: string;
}
