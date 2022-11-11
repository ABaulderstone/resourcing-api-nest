import { Entity, OneToMany, PrimaryKey, Property } from '@mikro-orm/core';
import { Job } from 'src/jobs/entities/job.entity';
@Entity({ tableName: 'temps' })
export class Temp {
  @PrimaryKey()
  id: number;

  @Property()
  firstName: string;

  @Property()
  lastName: string;

  @OneToMany(() => Job, (job) => job.temp)
  jobs: Job[];
}
