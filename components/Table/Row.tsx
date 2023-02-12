import React from 'react';
import { RowProps } from './types';

const Row: React.FC<RowProps> = ({
  data,
}) => (
  <tr>
    {data?.map((item) => (
      <td
        key={item.id}
        className="border-black border-[1px]"
      >
        {item.header}
      </td>
    ))}
  </tr>
);

export default Row;
