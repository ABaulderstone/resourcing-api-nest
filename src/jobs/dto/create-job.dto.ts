import { IsString, IsNotEmpty, IsDateString } from 'class-validator';
import { PresentOrFuture } from 'src/shared/validations/decorators';

export class CreateJobDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsDateString()
  @PresentOrFuture({ message: 'Start Date must be today or in the future' })
  startDate: string;

  @IsDateString()
  @PresentOrFuture({ message: 'End Date must be today or in the future' })
  endDate: string;
}
