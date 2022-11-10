import { IsNotEmpty } from 'class-validator';

export class CreateTempDto {
  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;
}
