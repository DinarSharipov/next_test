import React from 'react';
import { extractStyles } from '../../services/utils';
import { LabelProps } from './types';

const Label: React.FC<LabelProps> = ({
  label,
  classNames,
}) => (
  <div className={
    extractStyles`
    ${classNames}
  `
  }
  >
    {label}
  </div>
);

export default Label;
