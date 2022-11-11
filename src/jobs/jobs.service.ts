import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/mysql';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { Job } from './entities/job.entity';
import { plainToClass } from 'class-transformer';
import { TempsService } from 'src/temps/temps.service';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Job)
    private readonly jobRepository: EntityRepository<Job>,
    private readonly tempService: TempsService,
  ) {}

  async create(data: CreateJobDto): Promise<Job> {
    const newJob = plainToClass(Job, data);
    if (data.tempId) {
      const temp = await this.tempService.findOne(data.tempId);
      if (temp) newJob.temp = temp;
    }

    await this.jobRepository.persistAndFlush(newJob);
    return newJob;
  }

  async findAll(): Promise<Job[]> {
    return await this.jobRepository.findAll({ populate: ['temp'] });
  }

  async findOne(id: number): Promise<Job | null> {
    return await this.jobRepository.findOne({ id });
  }

  // async findByAssigned(assigned: string) : Promise<Job[]> {

  // }

  async update(id: number, data: UpdateJobDto): Promise<Job | null> {
    const job = await this.findOne(id);
    if (!job) return null;
    // let updatedJob = plainToClass(Job, { ...job, ...data });
    // if (data.tempId) {
    //   const assignedJob = await this.assignTempToJob(data.tempId, job);
    //   if (assignedJob) {
    //     updatedJob = assignedJob;
    //   }
    // }
    const updatedJob = plainToClass(Job, { ...job, ...data });
    console.log(data);
    console.log(updatedJob);

    return await this.jobRepository.upsert(updatedJob);
  }

  async remove(id: number): Promise<void> {
    const jobRef = this.jobRepository.getReference(id);
    return await this.jobRepository.removeAndFlush(jobRef);
  }

  // async assignTempToJob(tempId: number, job: Job): Promise<Job | null> {
  //   const temp = await this.tempService.findOne(tempId);
  //   if (!temp) {
  //     return null;
  //   }
  //   job.temp = temp;
  //   return job;
  // }
}
