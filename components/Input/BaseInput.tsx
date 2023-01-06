import React from 'react';
import { BaseInputProps } from './types';

const BaseInput: React.FC<BaseInputProps> = ({
  className,
  id,
  label,
  onBlur,
  onChange,
  onKeyEnter,
  placeholder,
  value,
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
      <input
        className={`${className} flex-1`}
        id={id}
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
        placeholder={placeholder}
        type="text"
        value={value || ''}
      />
    </div>
  );
};

export default React.memo(BaseInput);
