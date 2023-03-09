import React from 'react';
import { extractStyles } from '../../services/utils';
import { BoxProps } from './types';

const Box: React.FC<BoxProps> = ({
  children,
  className,
  header,
}) => (
  <div className={
    extractStyles`
    flex flex-col shadow-sm rounded-sm px-2 py4
    ${className}
    `
  }
  >
    {header && <div className="border-b-1 border-gray-400">{header}</div>}
    {children}
  </div>
);

export default Box;
