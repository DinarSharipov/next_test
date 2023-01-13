import React, { createRef, useEffect, useState } from 'react';
import { extractStyles } from '../../services/utils';
import { OptionsProps, SelectOption } from './types';

const Options: React.FC<OptionsProps> = ({
  options,
  onSelect,
  selectedOption,
  onClose,
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | undefined>();
  const optionsRef = createRef<HTMLDivElement>();
  const onSelectHandler = (option: SelectOption) => {
    if (onSelect) {
      onSelect(option);
    }
    onClose();
  };

  const keydownHandler = (event: KeyboardEvent) => {
    const { key } = event;

    switch (key) {
      case 'ArrowDown':
        if (hoveredIndex === options.length - 1) {
          setHoveredIndex(0);
          return;
        }
        setHoveredIndex(hoveredIndex + 1);
        break;
      case 'ArrowUp':
        if (hoveredIndex === 0) {
          setHoveredIndex(options.length - 1);
          return;
        }
        setHoveredIndex(hoveredIndex + 1);
        break;
      case 'Enter':
        onSelect?.(options[hoveredIndex]);
        break;
      case 'Escape':
      case 'Tab':
        onClose();
        break;
      default:
        break;
    }
  };

  const srollIntoViewHandler = () => {
    const { current: element } = optionsRef;
    if (element) {

      // currentOption?.scrollIntoView({ block: 'nearest' });
    }
  };

  useEffect(() => {
    srollIntoViewHandler();
    window.addEventListener('keydown', keydownHandler);
    return () => window.removeEventListener('keydown', keydownHandler);
  }, []);

  return (
    <div
      ref={optionsRef}
      className="
      flex flex-col items-start bg-zinc-400 rounded-md overflow-y-auto h-[300px]
      border-2 border-zinc-400
      "
    >
      {
        options?.length
          ? options.map((option, index) => (
            <div
              key={option.value}
              className={
                extractStyles`
                  py-2 px-4 cursor-pointer w-full rounded-md
                  ${hoveredIndex === index && 'bg-zinc-500'}
                `
              }
              onClick={() => onSelectHandler(option)}
              onMouseLeave={() => setHoveredIndex(index)}
            >
              {option.label}
            </div>
          ))
          : <div>No Results...</div>
      }
    </div>
  );
};

export default Options;
