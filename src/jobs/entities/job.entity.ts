import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { RemoveExcessWhiteSpace } from 'src/shared/transformations/decorators';

@Entity({ tableName: 'jobs' })
export class Job {
  @PrimaryKey()
  id: number;

  @Property()
  @RemoveExcessWhiteSpace()
  name: string;

  @Property()
  startDate: Date;

  @Property()
  endDate: Date;
}
