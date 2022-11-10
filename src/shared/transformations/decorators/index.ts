import { Transform } from 'class-transformer';

export function RemoveExcessWhiteSpace() {
  return Transform(({ value }) => value.trim().replace(/\s\s+/g, ' '));
}
