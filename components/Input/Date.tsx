import React from 'react';
import BaseInput from './BaseInput';
import { BaseInputProps } from './types';
import Calendar from '../../assets/Calendar.svg';

const Date: React.FC<BaseInputProps> = (props) => (
  <BaseInput
    {...props}
    postfix={(
      <div className="datepicker bg-white h-full flex items-center pr-2">
        <Calendar
          className="w-[20px] h-[20px]"
          viewBox="0 25 107 60"
        />
      </div>
    )}
  />
);

export default React.memo(Date);
