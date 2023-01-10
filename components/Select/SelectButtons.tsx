import React from 'react';
import ArrowDown from '../../assets/ArrowDown.svg';
import { extractStyles } from '../../services/utils';
import { SelectButtonsProps } from './types';

const SelectButtons: React.FC<SelectButtonsProps> = ({
  canShowOpenCloseArrow,
  isOptionsOpen,
  loading,
  onClear,
  onOpenCloseClick,
}) => (
  <div className="flex items-center min-h-fit bg-white">
    {loading && <div>...</div>}
    {canShowOpenCloseArrow && (
      <div
        className="min-h-full flex items-center w-[25px] cursor-pointer"
        onClick={onOpenCloseClick}
      >
        <ArrowDown className={extractStyles`
        transition-all duration-[400ms] 
        ${isOptionsOpen ? 'rotate-0' : 'rotate-180'}
      `}
        />
      </div>
    )}
    {
      onClear && (
        <div>X</div>
      )
    }
  </div>
);

export default React.memo(SelectButtons);
