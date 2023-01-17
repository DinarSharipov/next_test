import React, { useState } from 'react';
import { AccordionProps } from './types';

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
            <div
              key={id}
              onClick={() => onChange(id)}
            >
              {isOpen && component}
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Accordion;
