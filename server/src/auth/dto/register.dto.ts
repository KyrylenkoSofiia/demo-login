import { IsNotEmpty, IsString } from 'class-validator';

export class registerUserDto {
  @IsNotEmpty()
  @IsString()
  mail: string;
  @IsNotEmpty()
  password: string;
}
