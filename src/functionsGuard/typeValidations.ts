import {
  inValidAttrMsg,
  ITEM_DOES_NOT_EXIST,
  ITEM_IS_INVALID,
  ITEM_IS_NOT_A_NUMBER,
} from '../messages/errors';
import { ITEM_IS_VALID } from '../messages/generalMessages';

export const returnValidNum = (attr: any) => {
  if (typeof attr === 'number') {
    return { error: false, value: attr };
  } else if (typeof attr === 'string') {
    return convertStringToNum(attr);
  } else {
    return { error: true, value: inValidAttrMsg };
  }
};

export const convertStringToNum = (attr: string, type = '') => {
  if (type === 'float') {
    return { error: false, value: Number.parseFloat(attr) };
  } else {
    return { error: false, value: Number.parseInt(attr) };
  }
};

export class TypeGuardClass {
  public item: any;
  public type: any;

  static isTypeExpected(item: any, type: any) {
    if (!item) {
      return false;
    }

    switch (type) {
      case 'string':
        const isStrValid = /^[a-z]+$/i.test(item);
        return isStrValid;

      default:
        return false;
    }
  }

  // else if (typeof item !== type) {
  //   return { decision: false, msg: ITEM_IS_NOT_A_NUMBER };
  // } else {
  //   return { decision: true, msg: ITEM_IS_VALID };
  // }
}
