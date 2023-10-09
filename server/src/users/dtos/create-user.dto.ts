import { IsNotEmpty, IsString } from 'class-validator';

export class createUserDto {
  @IsNotEmpty()
  @IsString()
  mail: string;
  @IsNotEmpty()
  @IsString()
  password: string;
}
