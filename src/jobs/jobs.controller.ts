import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { JobsService } from './jobs.service';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { Job } from './entities/job.entity';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post()
  async create(@Body() createJobDto: CreateJobDto): Promise<Job> {
    return await this.jobsService.create(createJobDto);
  }

  @Get()
  async findAll(@Query('assigned') assigned: string): Promise<Job[]> {
    // if(assigned) {
    //   return await this.jobsService.findByAssigned(assigned)
    // }
    return await this.jobsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Job | null> {
    const job = await this.jobsService.findOne(+id);
    return job;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateJobDto: UpdateJobDto) {
    return this.jobsService.update(+id, updateJobDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.jobsService.remove(+id);
  }
}
