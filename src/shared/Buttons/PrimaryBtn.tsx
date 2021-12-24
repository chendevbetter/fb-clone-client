import { FC } from 'react';

interface IPrimaryBtnProps {
  text: string;
  type: keyof typeof mapTypeToColor;
  styleClass: string;
  onClick?: () => void;
}

const mapTypeToColor = {
  'primary-blue': '#1877f2',
  'primary-green': '#00a400',
};

const PrimaryBtn: FC<IPrimaryBtnProps> = ({
  text,
  styleClass,
  onClick,
  type = 'primary-blue',
}) => {
  return (
    <>
      <button
        style={{ backgroundColor: mapTypeToColor[type] }}
        className={`primary-btn ${styleClass}`}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
};

export default PrimaryBtn;
