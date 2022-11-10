import { IsString, IsNotEmpty, IsDateString } from 'class-validator';
import { IsAfter, PresentOrFuture } from 'src/shared/validations/decorators';

export class CreateJobDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsDateString()
  @PresentOrFuture({ message: 'Start Date must be today or in the future' })
  startDate: string;

  @IsDateString()
  @IsAfter('startDate', { message: 'End Date must be on or after Start Date' })
  endDate: string;
}
