import { useState, useEffect, ChangeEvent } from 'react';
import { returnMonthsList } from '../static/data/staticDatesData';

interface dropdownProps {
  year: string | number;
  month: string | number;
  name: string;
  setData: (e: ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
}

const DynamicDaysDropdown = ({ year, month, name, setData }: dropdownProps) => {
  const [daysInChosenMonthState, setDaysInChosenMonthState] = useState(0);

  useEffect(() => {
    const monthsList = returnMonthsList();
    const monthIdx = monthsList.findIndex((item) => item === month);
    const daysInChosenMonth = new Date(
      Number.parseInt(`${year}`),
      monthIdx + 1,
      0
    ).getDate();
    setDaysInChosenMonthState(daysInChosenMonth);
  }, [month, year]);

  const showData = () => {
    const createDaysArr: number[] = [];

    for (let i = 1; i < daysInChosenMonthState + 1; i++) {
      createDaysArr.push(i);
    }
    return createDaysArr.map((day: number) => {
      return (
        <option className='dropdown__items--item' key={day} value={day}>
          {day}
        </option>
      );
    });
  };

  return (
    <div className='dropdown__container'>
      <select
        className='dropdown__btn'
        name={name}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => setData(e)}
      >
        {daysInChosenMonthState && showData()}
      </select>
    </div>
  );
};

export default DynamicDaysDropdown;
