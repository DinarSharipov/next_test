import { parseStyles } from '@services/utils';
import React from 'react';
import type { OptionProps } from '../types';

/** Опция селекта */
const Option: React.FC<OptionProps> = ({
  label,
  value,
  isHovered,
  isSelected,
  onClick,
  onMouseMove,
}) => (
  <div
    key={value}
    className={parseStyles`
      w-full p-[10px] pl-[15px] break-words
      cursor-pointer transition-none text-left rounded-md
      ${isHovered || isSelected ? 'bg-option-arrow-hover' : 'bg-option'} 
    `}
    onMouseDown={(e) => {
      e.stopPropagation();
      onClick();
    }}
    onMouseMove={onMouseMove}
    title={label}
  >
    <span>{label}</span>
  </div>
);

export default Option;
