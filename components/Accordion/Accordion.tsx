import React, { useState } from 'react';
import { AccordionProps } from './types';

export const AccordionItem: React.FC<{
  title: string; onClick: (id: string)=> void; id: string; }> = ({ title, onClick, id }) => (
  <div onClick={() => onClick(id)}>
      {title}

    </div>
);

const Accordion: React.FC<AccordionProps> = ({
  items,
  onChange,
  title,
}) => {
  const [openedItemsIds, setOpenedItemsIds] = useState<string[] | undefined>();

  return (
    <div>
      <div>{title}</div>
      <div>
        {
          items?.length && items.map(({ component, id, isOpen }) => (
            <AccordionItem
              key={id}
              onClick={() => onChange(id)}
            >
              {isOpen && component}
            </AccordionItem>
          ))
        }
      </div>
    </div>
  );
};

export default Accordion;
