import React from 'react';
import { RowProps } from './types';

const Row: React.FC<RowProps> = ({
  data,
  columns,
}) => (
  <tr>
    {columns?.map((item) => (
      <td
        key={item[data.key]}
        className="border-black border-[1px]"
      >
        {item[data.header]}
      </td>
    ))}
  </tr>
);

export default Row;
