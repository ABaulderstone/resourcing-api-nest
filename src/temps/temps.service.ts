import { EntityRepository } from '@mikro-orm/mysql';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { CreateTempDto } from './dto/create-temp.dto';
import { UpdateTempDto } from './dto/update-temp.dto';
import { Temp } from './entities/temp.entity';

@Injectable()
export class TempsService {
  constructor(
    @InjectRepository(Temp)
    private readonly tempRepository: EntityRepository<Temp>,
  ) {}

  async create(createTempDto: CreateTempDto): Promise<Temp> {
    const newTemp = plainToClass(Temp, createTempDto);
    await this.tempRepository.persistAndFlush(newTemp);
    return newTemp;
  }

  async findAll(): Promise<Temp[]> {
    return await this.tempRepository.findAll();
  }

  async findOne(id: number): Promise<Temp | null> {
    return await this.tempRepository.findOne({ id });
  }

  async update(id: number, updateTempDto: UpdateTempDto): Promise<Temp | null> {
    const temp = await this.findOne(id);
    const updatedTemp = plainToClass(Temp, { ...temp, ...updateTempDto });
    return await this.tempRepository.upsert(updatedTemp);
  }

  async remove(id: number): Promise<void> {
    const tempRef = this.tempRepository.getReference(id);
    return await this.tempRepository.removeAndFlush(tempRef);
  }
}
