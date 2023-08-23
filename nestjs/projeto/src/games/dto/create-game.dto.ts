import { IsDate, IsNotEmpty, IsString, IsUrl } from 'class-validator';
import { Company } from 'src/companies/entities/company.entity';

export class CreateGameDto {
  @IsString()
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
  @IsUrl()
  readonly website: string;

  @IsString()
  @IsNotEmpty()
  readonly company: Company;

  @IsString()
  @IsNotEmpty()
  @IsUrl()
  readonly url: string;

  @IsString()
  @IsNotEmpty()
  readonly console: Console[];
}
