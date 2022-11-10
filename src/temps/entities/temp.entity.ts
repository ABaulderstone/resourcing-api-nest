import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
import { RemoveExcessWhiteSpace } from 'src/shared/transformations/decorators';
@Entity({ tableName: 'temps' })
export class Temp {
  @PrimaryKey()
  id: number;

  @Property()
  @RemoveExcessWhiteSpace()
  firstName: string;

  @Property()
  @RemoveExcessWhiteSpace()
  lastName: string;
}
