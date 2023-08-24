import { IsDate, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateConsoleDto {
  @IsNumber()
  id: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsDate()
  @IsNotEmpty()
  dataRelease: Date;

  @IsString()
  @IsNotEmpty()
  company: string;
}
