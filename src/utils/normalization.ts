import { returnMonthsList } from '../static/data/staticDatesData';

export const normalizeDate = (
  day: string,
  month: string,
  year: string
): string => {
  const monthsList = returnMonthsList();
  const numberOfMonth = monthsList.findIndex(val => val === month) + 1;
  const concatenatedDate = year
    .concat('-', `${numberOfMonth}`)
    .concat('-', day);
  return concatenatedDate;
};
