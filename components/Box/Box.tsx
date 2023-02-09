import React from 'react';

const Box: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => (
  <div className="flex flex-column">
    {children}
  </div>
);

export default Box;
