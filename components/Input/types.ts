import { ReactNode } from 'react';

export interface BaseInputProps {
  id?: string;
  value?: string;
  className?: string;
  placeholder?: string;
  label?: ReactNode;
  onChange?: (value: string)=> void;
  onBlur?: (value?: string)=> void;
  onKeyEnter?: ()=> void;
}
