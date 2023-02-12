export type Column = {
  key: string;
  header: string;
  [key: string]: string | number;
};

export interface RowProps {
  data: Column;
  columns?: Column[];
}
