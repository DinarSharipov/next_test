import React from 'react';
import Row from './Row';
import { Column, RowProps } from './types';

const columns = [
  {
    header: '3234',
    key: 'name',
  },
  {
    header: '3234',
    key: 'surname',
  },
  {
    header: '3234',
    key: 'patronimyc',
  },
  {
    header: '3234',
    key: 'city',
  },
];

const data: Column[] = Array.from({ length: 10 }, (_, index) => ({
  data: Array.from({ length: 10 }, (_, i) => ({ header: `row ${index + 1} cell ${i + 1}`, key: i.toString() })),
}));

const Table: React.FC = () => (
  <table>
    <tbody>
      {
        data.map((row, index) => (
          <Row
            key={`${String(index)}_2323`}
            columns={columns}
            data={row}
          />
        ))
      }
    </tbody>
  </table>
);

export default Table;
