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

export const returnHttpClient = () => {
  const config: AxiosRequestConfig = {
    baseURL: 'http://localhost:5000/api/v1/',
  };
  return axios.create(config);
};
