import React from 'react';
import { ButtonProps } from './types';

const BaseButton: React.FC<ButtonProps> = ({
  onClick,
  icon,
  className,
  title,
}) => (
  <button
    className={`${className} flex`}
    onClick={onClick}
    type="button"
  >
    <span>{title}</span>
    {icon && (
      <img
        alt="buttonIcon"
        src={icon}
      />
    )}
  </button>
);

export default React.memo(BaseButton);
