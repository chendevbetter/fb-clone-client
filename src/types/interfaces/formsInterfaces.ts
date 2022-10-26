import { Egender } from '../enums';

export interface ICreateAccountProps {
  lastName: string;
  firstName: string;
  emailOrNumber: string;
  password: string;
  'birthday-day': string;
  'birthday-month': string;
  'birthday-year': string;
  gender: Egender;
}
