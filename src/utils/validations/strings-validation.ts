import { lengthValidation } from './general-validations';

// // this class will be based on functional utils
// export class AuthenticationValidationClass {
//   public firstName;
//   public lastName;
//   public email;
//   public password;
//   public stringIsValid;

//   constructor(
//     firstName: string,
//     lastName: string,
//     email: string,
//     password: string,
//     stringIsValid: boolean
//   ) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.password = password;
//     this.stringIsValid = false;
//   }

//   elemContainsOnlyLetters(str: string) {
//     this.stringIsValid = /^[a-z]+$/i.test(str);
//   }

//   stringLength(str: string) {
//     this.stringIsValid = lengthValidation(str, 2, 100);
//   }
// }
