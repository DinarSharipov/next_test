import { ReactNode } from 'react';

export interface BaseInputProps {
  id?: string;
  value?: string;
  className?: string;
  placeholder?: string;
  label?: ReactNode;
  postfix?: ReactNode;
  onChange?: (value: string)=> void;
  onBlur?: (value?: string)=> void;
  onKeyEnter?: ()=> void;
  _type?: 'text' | 'date';
}
