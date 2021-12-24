import  { FC } from 'react';

interface ITooltipModalProps {
  content: { boldedTxt?: string; contentTxt?: string; linkTxt?: string };
  id: string;
  ref?: any;
}

export const TooltipModal: FC<ITooltipModalProps> = ({ content, ref, id }) => {
  return (
    <>
      <div
        ref={ref}
        id={id}
        className='tooltip-modal__container u__appear-opacity__short'
      >
        <p className='tooltip-modal__bolded'>{content.boldedTxt}</p>
        <p className='tooltip-modal__content'>{content.contentTxt}</p>
        <a className='tooltip-modal__link' href='javascript'>
          {content.linkTxt}
        </a>
      </div>
    </>
  );
};

export default TooltipModal;
