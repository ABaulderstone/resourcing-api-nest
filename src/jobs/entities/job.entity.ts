import {
  Cascade,
  Entity,
  ManyToOne,
  PrimaryKey,
  Property,
} from '@mikro-orm/core';
import { Temp } from 'src/temps/entities/temp.entity';

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

  @ManyToOne({
    entity: () => Temp,
    nullable: true,
    cascade: [Cascade.PERSIST],
  })
  temp: Temp;

  // constructor(name: string, startDate: string, endDate: string) {
  //   this.name = name;
  //   this.startDate = new Date(startDate);
  //   this.endDate = new Date(endDate);
  // }
}
