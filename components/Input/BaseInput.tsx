import React from 'react';
import { extractStyles } from '../../services/utils';
import { BaseInputProps } from './types';

const BaseInput: React.FC<BaseInputProps> = ({
  className,
  id,
  label,
  onBlur,
  onChange,
  onClick,
  onKeyEnter,
  placeholder,
  value,
  _type,
  postfix,
}) => {
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (onKeyEnter && e.key === 'Enter') {
      onKeyEnter();
    }
  };

  const onBlurHandler = (event: React.FocusEvent<HTMLInputElement, Element>) => {
    if (onBlur) {
      onBlur(event.target.value);
    }
  };

  return (
    <div className="flex flex-col">
      { label && <div>{label}</div> }
      <div className={extractStyles`
        ${className}
        "flex items-stretch flex-1"
      `}
      >
        <input
          className="flex-1 outline-none border-none p-2"
          id={id}
          onBlur={onBlurHandler}
          onChange={onChangeHandler}
          onClick={onClick}
          onKeyDown={onKeyDownHandler}
          placeholder={placeholder}
          type={_type || 'text'}
          value={value || ''}
        />
        {postfix}
      </div>
    </div>
  );
};

export default React.memo(BaseInput);
