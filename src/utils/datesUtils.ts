import { returnValidNum } from "../functionsGuard/typeValidations";

interface Idate {
  year: number;
  month: number;
}

export const returnNumOfDaysByMonth = ({ year, month }: Idate) => {
  const validMonth = returnValidNum(month);
  if (!validMonth.error) {
    return new Date(year, month, 0).getDate();
  }
};
