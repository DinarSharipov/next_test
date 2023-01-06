import { ReactNode } from 'react';

export interface ButtonProps {
  onClick?: ()=> void;
  icon?: string;
  className?: string;
  title: ReactNode;
}

export interface LinkButtonProps extends ButtonProps {
  href?: string;
}
