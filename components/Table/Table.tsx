import React from 'react';
import Row from './Row';
import { RowProps } from './types';

const data: RowProps[] = Array.from({ length: 10 }, (_, index) => ({
  data: Array.from({ length: 10 }, (_, i) => ({ header: `row ${index + 1} cell ${i + 1}`, key: i.toString() })),
}));

const Table: React.FC = () => (
  <table>
    <tbody>
      {
        data.map((row, index) => (
          <Row
            key={`${String(index)}_2323`}
            data={row.data}
          />
        ))
      }
    </tbody>
  </table>
);

export default Table;
