import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/mysql';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { Job } from './entities/job.entity';
import { plainToClass } from 'class-transformer';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Job)
    private readonly jobRepository: EntityRepository<Job>,
  ) {}

  async create(createJobDto: CreateJobDto): Promise<Job> {
    const newJob = plainToClass(Job, createJobDto);
    await this.jobRepository.persistAndFlush(newJob);
    return newJob;
  }

  async findAll(): Promise<Job[]> {
    return await this.jobRepository.findAll();
  }

  async findOne(id: number): Promise<Job | null> {
    return await this.jobRepository.findOne({ id });
  }

  async update(id: number, data: UpdateJobDto): Promise<Job | null> {
    const job = await this.findOne(id);
    const updatedJob = plainToClass(Job, { ...job, ...data });
    return await this.jobRepository.upsert(updatedJob);
  }

  async remove(id: number): Promise<void> {
    const jobRef = this.jobRepository.getReference(id);
    return await this.jobRepository.removeAndFlush(jobRef);
  }
}
