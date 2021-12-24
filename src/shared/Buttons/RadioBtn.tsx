import { FC, ChangeEvent } from 'react';

interface IRadioBtnProps {
  label: string;
  styleClass?: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const RadioBtn: FC<IRadioBtnProps> = ({
  label,
  styleClass,
  name,
  value,
  onChange,
}) => {
  return (
    <div className={`radio-btn__container ${styleClass}`}>
      <p className='radio-btn__label'>{label}</p>
      <input
        name={name}
        value={value}
        type='radio'
        onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)
        }
      />
    </div>
  );
};

export default RadioBtn;
