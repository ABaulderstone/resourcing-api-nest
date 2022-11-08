import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidationArguments,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint()
class IsDateInPresentOrFuture implements ValidatorConstraintInterface {
  validate(
    dateString: string,
    validationArguments?: ValidationArguments | undefined,
  ): boolean {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const dateToCheck = new Date(dateString);
    return (
      dateToCheck.getTime() >= new Date(`${year}-${month}-${day}`).getTime()
    );
  }
}

export const PresentOrFuture = (validationOptions?: ValidationOptions) => {
  return (object: Object, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsDateInPresentOrFuture,
    });
  };
};

export const IsAfter = (
  property: string,
  validationOptions?: ValidationOptions,
) => {
  return (object: Object, propertyName: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName,
      options: validationOptions,
      constraints: [property],
      validator: {
        validate(value: string, args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints;
          const relatedValue = (args.object as any)[relatedPropertyName];
          return new Date(value).getTime() >= new Date(relatedValue).getTime();
        },
      },
    });
  };
};
