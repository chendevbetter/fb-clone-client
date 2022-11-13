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

const convertTimeStampToHours = (timestamp: number) => {
  return timestamp / 1000 / 3600;
};

const convertTimeStampToDays = (timestamp: number) => {
  return timestamp / 1000 / 3600 / 24;
};

export const howLongHasPassed = (startTime: string) => {
  const now = Date.now();
  const parsedStartTime = Date.parse(startTime);
  const gapInMs = now - parsedStartTime;
  const gapInHours = convertTimeStampToHours(gapInMs);
  if (gapInHours < 24) {
    const roundedGapInHours = Math.floor(gapInHours);
    if (roundedGapInHours === 0) {
      return "Less than one hour";
    }
    return `${roundedGapInHours}h`;
  } else {
    const gapInDays = convertTimeStampToDays(gapInMs);
    const roundedGapInDays = Math.floor(gapInDays);
    return `${roundedGapInDays}d`;
  }
};
