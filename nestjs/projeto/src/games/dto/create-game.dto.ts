import { IsDate, IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { Company } from 'src/companies/entities/company.entity';

export class CreateGameDto {
  @IsString()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  describe: string;

  @IsDate()
  @IsNotEmpty()
  releaseDate: Date;

  @IsString()
  @IsNotEmpty()
  @IsUrl()
  website: string;

  @IsString()
  @IsNotEmpty()
  company: Company;

  @IsString()
  @IsNotEmpty()
  @IsUrl()
  url: string;
  console: Console;
}
