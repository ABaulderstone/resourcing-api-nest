import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
@Entity({ tableName: 'jobs' })
export class Job {
  @PrimaryKey()
  id: number;

  @Property()
  name: string;

  @Property()
  startDate: Date;

  @Property()
  endDate: Date;
}
