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

  async findAll() {
    return await this.jobRepository.findAll();
  }

  async findOne(id: number): Promise<Job | null> {
    return await this.jobRepository.findOne({ id });
  }

  async update(id: number, data: UpdateJobDto) {
    const job = await this.findOne(id);
    const updatedPlain = { ...job, ...data };
    const updatedJob = plainToClass(Job, updatedPlain);

    return await this.jobRepository.upsert(updatedJob);
  }

  remove(id: number) {
    return `This action removes a #${id} job`;
  }
}
