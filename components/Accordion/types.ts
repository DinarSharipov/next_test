import { ReactNode } from 'react';

export interface AccordionProps {
  items: { component: ReactNode; isOpen: boolean; id: string }[];
  onChange?: (id: string)=> void;
  title: string;
}
