import React, {
  createRef,
  forwardRef,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Option from './Option';
import type { OptionsProps } from '../types';

/** Опции для селекта */
const Options = forwardRef<HTMLDivElement, OptionsProps>(({
  id,
  options,
  onSelect,
  onClose,
  selectedOption,
  showNoResultText = true,
  noResultText = 'Ничего не найдено',
}, ref) => {
  /** Индекс элемента на который наведен выбор */
  const [hoveredIndex, setHoveredIndex] = useState<number | undefined>(undefined);

  /** Реф контейнера опций */
  const optionsContainerRef = useMemo(() => createRef<HTMLDivElement>(), []);

  /** Возможность отображения текста об отсутствии результатов */
  const canShowNoResultText = showNoResultText && !options?.length;

  /** Обработчика нажатия KeyDown */
  const keydownHandler = (e: KeyboardEvent) => {
    if (options?.length) {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          if (hoveredIndex === options.length) {
            setHoveredIndex(1);
            return;
          }
          setHoveredIndex(hoveredIndex ? hoveredIndex + 1 : 1);
          return;
        case 'ArrowUp':
          e.preventDefault();
          if (hoveredIndex === 1 || hoveredIndex === undefined) {
            setHoveredIndex(options.length);
            return;
          }
          setHoveredIndex(hoveredIndex - 1);
          return;
        case 'Enter':
          if (onSelect && options?.length && hoveredIndex) {
            onSelect(options[hoveredIndex - 1]);
          }
          return;
        case 'Escape':
        case 'Tab':
          if (onClose) {
            onClose();
          }
          break;
        default:
          break;
      }
    }
  };

  /** Хэндлер удержания выбранного блока в области видимости контейнера опций */
  const scrollToOptionHandler = () => {
    if (hoveredIndex) {
      optionsContainerRef.current?.children?.[hoveredIndex - 1]
        ?.scrollIntoView({ block: 'nearest', inline: 'center' });
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', keydownHandler);
    scrollToOptionHandler();
    return () => {
      window.removeEventListener('keydown', keydownHandler);
    };
  }, [hoveredIndex, options]);

  /** Для сброса индекса выбранного элемента при изменении количества опций */
  useEffect(() => {
    setHoveredIndex(undefined);
  }, [options?.length]);

  return (
    <div
      ref={ref}
      className="w-full"
    >
      <div
        ref={optionsContainerRef}
        className="shadow-md w-full max-h-options p-[3px] overflow-auto mt-[2px] bg-option scrollbar rounded-lg border-[3px] border-white"
        id={id}
      >
        {options?.map((item, index) => (
          <Option
            key={item.value}
            isHovered={(index + 1) === hoveredIndex}
            isSelected={selectedOption?.value === item.value}
            label={item.label}
            onClick={() => onSelect && onSelect(item)}
            onMouseMove={() => setHoveredIndex(index + 1)}
            value={item.value}
          />
        ))}
        {canShowNoResultText && (<div className="w-full p-[10px] text-slate-400 pl-[15px] bg-option">{noResultText}</div>)}
      </div>
    </div>
  );
});

Options.displayName = 'Options';

export default Options;
