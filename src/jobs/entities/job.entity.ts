import {
  BeforeCreate,
  BeforeUpdate,
  Entity,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';

import { Transform } from 'class-transformer';
@Entity({ tableName: 'jobs' })
export class Job {
  @PrimaryKey()
  id: number;

  @Property()
  @Transform(({ value }) => value.trim().replace(/\s\s+/g, ' '))
  name: string;

  @Property()
  startDate: Date;

  @Property()
  endDate: Date;
}
