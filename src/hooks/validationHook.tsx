import { TypeGuardClass } from '../functionsGuard/typeValidations';
import { FormValidation } from '../utils/validations/FormsValidation';

const validationsArr = [
  { key: 'firstName', validationType: 'string' },
  { key: 'lastName', validtionType: 'string' },
  { key: 'email', validtionType: 'string' },
  { key: 'phone-number', validtionType: 'number' },
  { key: 'password', validtionType: 'string' },
];

export const validationHandler = (itemToValidate: string, type: string) => {
  const typeOfValidationObj = validationsArr.find(item => item.key === type);
  const validationType = typeOfValidationObj?.key;
  let isItemValid = false;

  const isElemEmpty = FormValidation.isElementEmpty(itemToValidate);
  if (isElemEmpty) return false;

  switch (validationType) {
    case 'firstName':
      isItemValid = TypeGuardClass.isTypeExpected(itemToValidate, 'string');
      isItemValid = FormValidation.validateFirstName(itemToValidate);
      return isItemValid;

    case 'lastName':
      isItemValid = TypeGuardClass.isTypeExpected(itemToValidate, 'string');
      isItemValid = FormValidation.validateLastName(itemToValidate);
      return isItemValid;

    case 'email':
      isItemValid = TypeGuardClass.isTypeExpected(itemToValidate, 'string');
      isItemValid = FormValidation.validateEmail(itemToValidate);
      return isItemValid;

    default:
      return true;
  }
};
