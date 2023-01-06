import React from 'react';
import BaseInput from './BaseInput';
import { BaseInputProps } from './types';

const Number: React.FC<BaseInputProps> = (props) => {
  const onChangeHandler = (value: string) => {
    const { onChange } = props;
    if (onChange) {
      if (/^[0-9]+$/.test(value)) {
        onChange(value);
      }
      if (value === '') {
        onChange('');
      }
    }
  };

  return (
    <BaseInput
      {...props}
      onChange={onChangeHandler}
    />
  );
};

export default React.memo(Number);
