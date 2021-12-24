import { TypeGuardClass } from '../../functionsGuard/typeValidations';

export class FormValidation {
  static validateFirstName(firstName: string) {
    const isStringValid = TypeGuardClass.isTypeExpected(firstName, 'string');
    const isItemLengthValid = Validations.validateItemLength(firstName, 2, 15);
    return isStringValid && isItemLengthValid;
  }

  static validateLastName(lastName: string) {
    const isStringValid = TypeGuardClass.isTypeExpected(lastName, 'string');
    const isItemLengthValid = Validations.validateItemLength(lastName, 10, 20);
    return isStringValid && isItemLengthValid;
  }

  static validateEmail(email: string) {
    const isStringValid = TypeGuardClass.isTypeExpected(email, 'string');
    const isItemLengthValid = Validations.validateItemLength(email, 1, 20);
    const doesItemContainSpecialChars = Validations.doesItemContainSpecialChars(
      email,
      ['@', '.']
    );
    return isStringValid && isItemLengthValid && doesItemContainSpecialChars;
  }

  static isElementEmpty = (elem: string) => {
    if (!elem || elem.length === 0) {
      return true;
    } else {
      return false;
    }
  };
}

export class Validations {
  static validateItemLength(item: any, min: number, max: number) {
    let isItemValid = false;
    const itemLength = item.length;
    if (itemLength < min || itemLength > max) {
      isItemValid = true;
    }
    return isItemValid;
  }
  static doesItemContainSpecialChars(item: string, specialChars: string[]) {
    let isItemValid = false;
    isItemValid = /\w+$/i.test(item);
    for (let i = 0; i < specialChars.length; i++) {
      isItemValid = item.includes(specialChars[i]);
      console.log('isItemValid', isItemValid);
    }
    return isItemValid;
  }
}
