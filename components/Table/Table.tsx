/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { extractStyles } from '../../services/utils';

const resource = [
  {
    label: 'Сотрудник',
    projects: [
      {
        label: 'Проект 1',
        activePeriods: [
          { start: '01.02.2022', finish: '01.05.2022' },
          { start: '01.03.2022', finish: '01.04.2022' },
        ],
      },
      {
        label: 'Проект 2',
        activePeriods: [
          {
            start: '03.05.2022',
            finish: '03.06.2022',
          },
          {
            start: '03.08.2022',
            finish: '03.09.2022',
          },
        ],
      },
    ],
    comment: 'какой-то коммент',
  },
];

const findArraysLength = (obj: Object) => {
  let count = 0;

  const parseArray = (object: Object) => {
    if (Array.isArray(object)) {
      count += object.length;
      for (let i = 0; i <= object.length; i++) {
        const currentObject = object[i];
        if (currentObject) {
          const findedArrayKey = Object.keys(currentObject)
            .find((key) => Array.isArray(currentObject[key]));
          const array = currentObject[findedArrayKey];
          if (array) {
            parseArray(array);
          }
        }
      }
    }
  };
  parseArray(obj);
  return count;
};

console.log(findArraysLength(resource));

// const generateTable = (data: Object[]) => {
//   if (data.length) {
//     (data[0]);
//   }
// };

const Td: React.FC<{
  rowSpan?: number;
  colSpan?: number;
  children: React.ReactNode;
  className?: string;
}> = ({
  children,
  className,
  rowSpan,
  colSpan,
}) => (
  <td
    className={
      extractStyles`
        border-[1px] border-black text-center
        ${className}
      `
    }
    colSpan={colSpan}
    rowSpan={rowSpan}
  >
    {children}
  </td>
);

const TableComponent: React.FC = () => (
  <div
    className=""
  >
    <table className="m-2 w-full">
      <thead>
        <tr>
          <Td
            className="bg-red-400"
            colSpan={2}
          >
            Колонка Группа
          </Td>
          <Td className="bg-red-400">Колонка 2</Td>
          <Td className="bg-red-400">Колонка 3</Td>
          <Td className="bg-red-400">Колонка 4</Td>
        </tr>
        <tr>
          <Td className="bg-red-400">Потребность</Td>
          <Td className="bg-red-400">Проект</Td>
          <Td className="bg-red-400">Занят с...</Td>
          <Td className="bg-red-400">По ...</Td>
          <Td className="bg-red-400">Коммент</Td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Td rowSpan={4}>1</Td>
          <Td rowSpan={2}>1</Td>
          <Td>1</Td>
          <Td>1</Td>
          <Td rowSpan={4}>1</Td>
        </tr>
        <tr>
          <Td>2</Td>
          <Td>2</Td>
        </tr>
        <tr>
          <Td rowSpan={2}>3</Td>
          <Td>3</Td>
          <Td>3</Td>
        </tr>
        <tr>
          <Td>4</Td>
          <Td>4</Td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default TableComponent;
