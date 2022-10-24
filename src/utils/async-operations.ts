import axios, { AxiosRequestConfig } from 'axios';

import { SetStateAction, Dispatch } from 'react';

export const performSetStateAfterXSeconds = (
  op: Dispatch<SetStateAction<boolean>>,
  param: boolean,
  time: number
) => {
  const timeInSeconds = time * 1000;
  setTimeout(() => {
    op(param);
  }, timeInSeconds);
};

export const returnBaseUrl = () => {
  switch (process.env.NODE_ENV) {
    case 'development':
      return `http://localhost:${process.env.REACT_APP_SERVER_PORT}/api/v1`
    default:
      return ''
  }
}

export const returnHttpClient = () => {
  const config: AxiosRequestConfig = {
    baseURL: returnBaseUrl()
  };
  return axios.create(config);
};
