/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import BaseInput from './BaseInput';
import { BaseInputProps } from './types';

const Template: React.FC<BaseInputProps & { template: string }> = (props) => {
  const onChangeHandler = (value: string) => {
    const { template, onChange } = props;
    if (value.length > template.length) {
      return onChange && onChange(value.slice(0, template.length));
    }

    const resultValue = value.split('').reduce((prev, word, index) => {
      if (template[index] === '*') {
        const result = prev + word;
        return result;
      }
      const result = prev + template[index];
      return result;
    }, '');

    const secondResult = template.split('').reduce((prev, word, index) => {
      if (template[index] !== '*') {
        const res = prev + template[index];
        return res;
      }
      const res = prev + value.at(-1);
      return res;
    }, '');

    return onChange && onChange(secondResult);
  };

  return (
    <BaseInput
      {...props}
      onChange={onChangeHandler}
    />
  );
};

export default React.memo(Template);
