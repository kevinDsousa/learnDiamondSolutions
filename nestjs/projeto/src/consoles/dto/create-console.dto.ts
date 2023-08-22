import { IsNotEmpty, IsString } from 'class-validator';

export class CreateConsoleDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;
}
