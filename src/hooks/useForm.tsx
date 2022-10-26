import { useState, ChangeEvent } from 'react';
import { ICreateAccountProps } from '../types/interfaces/formsInterfaces';
import { ITEM_IS_INVALID } from '../messages/errors';
import { FormValidation } from '../utils/validations/FormsValidation';
import { validationHandler } from './validationHook';

const useForm = (props: ICreateAccountProps) => {
  const [formData, setFormData] = useState<ICreateAccountProps>({ ...props });

  const [error, setError] = useState<ICreateAccountProps>({ ...props });

  const handleFormDataChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData(formData => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFocusOut = (e: ChangeEvent<HTMLInputElement>) => {
    const isItemEmpty = FormValidation.isElementEmpty(e.target.value);
    console.log(e.target.name, isItemEmpty);
    if (isItemEmpty) {
      setError(error => ({
        ...error,
        [e.target.name]: ITEM_IS_INVALID,
      }));
    } else {
      setError(error => ({
        ...error,
        [e.target.name]: '',
      }));
    }
  };

  // const handleEmailOrPassordChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   let isDataValid = false;
  //   const item = e.target.value;
  //   const isItemEmail = item.split('').includes('@');
  //   if (isItemEmail) {
  //     isDataValid = validationHandler(item, 'email');
  //   } else if (/\d{1,12}/.test(item)) {
  //     isDataValid = validationHandler(item, 'phone-number');
  //     console.log('is data valid', isDataValid);
  //   }

  //   if (isDataValid) {
  //     setFormData((formData) => ({
  //       ...formData,
  //       [e.target.name]: e.target.value,
  //     }));
  //   } else {
  //     console.log('data is not valid');
  //     return false;
  //   }
  // };

  const handleEmailOrpassord = (e: ChangeEvent<HTMLInputElement>) => {
    const item = e.target.value;
    if (item.split('').includes('@')) {
      return 'email';
    } else {
      return validationHandler(e.target.value, 'phone-number');
    }
  };

  const handleDataChangeFromNonInput = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.name, e.target.value);
    setFormData(formData => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  return {
    formData,
    error,
    handleFormDataChange,
    handleDataChangeFromNonInput,
    handleFocusOut,
    // handleEmailOrPassordChange,
  };
};

export default useForm;
