import { FC, ChangeEvent } from 'react';

interface IDropdownProps {
  data: { key: string | number; iteratedKey: number }[];
  currentDate?: string | number;
  name: string;
  setData: (e: ChangeEvent<HTMLSelectElement>) => void;
  styleClass?: string;
}

const DropDown: FC<IDropdownProps> = ({
  data,
  currentDate,
  name,
  setData,
  styleClass,
}) => {
  const showData = () => {
    return data.map((item) => {
      return (
        <option
          className='dropdown__option'
          key={item.iteratedKey}
          value={item.key}
        >
          {item.key}
        </option>
      );
    });
  };
  return (
    <div className={`dropdown__container ${styleClass}`}>
      <select
        className='dropdown__btn'
        name={name}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => setData(e)}
        defaultValue={currentDate}
      >
        {showData()}
      </select>
    </div>
  );
};

export default DropDown;
