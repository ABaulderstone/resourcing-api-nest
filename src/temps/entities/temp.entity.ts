import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
@Entity({ tableName: 'temps' })
export class Temp {
  @PrimaryKey()
  id: number;

  @Property()
  firstName: string;

  @Property()
  lastName: string;
}
