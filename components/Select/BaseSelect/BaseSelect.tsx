import React, {
  createRef,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';
import { useEffectOnce, useOnClickOutside } from 'usehooks-ts';
import { ArrowUpDown, Close } from '@assets';
import { parseStyles } from '@services/utils';
import Popup from '../../../Popup/Popup';
import Spinner from '../../Spinner/Spinner';
import BaseInput from '../../Input/BaseInput/BaseInput';
import type { SelectOption, SelectProps } from '../types';
import Options from './Options';
import Label from '../../Label/Label';

/** Компонент Селект */
const BaseSelect = forwardRef<HTMLInputElement, SelectProps>(({
  label,
  placeholder,
  options,
  selectedOption,
  onClick,
  error,
  height,
  onSelect,
  onChange,
  onBlur,
  loading,
  clearable,
  disabled = false,
  showArrowButton = true,
  backgroundColor,
  invalid,
}, ref) => {
  /** Состояние опций */
  const [showOptions, setShowOptions] = useState(false);
  /** Значение поля ввода */
  const [localValue, setLocalValue] = useState<string | undefined>(selectedOption?.label);
  /** Реф для отслеживания ширины селекта */
  const containerRef = useMemo(() => createRef<HTMLDivElement>(), []);
  /** Реф для инпута */
  const inputRef = useMemo(() => createRef<HTMLInputElement>(), []);
  /** Реф для outsideClick */
  const popupRef = useMemo(() => createRef<HTMLDivElement>(), []);
  /** Реф для кнопок */
  const arrowBtnRef = useMemo(() => createRef<HTMLDivElement>(), []);
  /** Закрыть опции при скроле */
  const closeWhenScroll = useCallback(() => setShowOptions(false), []);

  useEffect(() => {
    window.addEventListener('wheel', closeWhenScroll);
    return () => window.removeEventListener('wheel', closeWhenScroll);
  }, [closeWhenScroll]);

  useEffect(() => {
    setLocalValue(selectedOption?.label || '');
  }, [selectedOption]);

  const filteredWithSelected = useMemo(
    () => {
      if (!selectedOption || options?.map((e) => e.value).includes(selectedOption.value)) {
        return options;
      }
      return [...options ?? [], selectedOption];
    },
    [options, selectedOption],
  );

  /** Хук для клика вне компонента */
  useOnClickOutside(popupRef, (e) => {
    setLocalValue(selectedOption?.label);
    const targetElement = e.target as HTMLElement;

    if (targetElement === document.activeElement || targetElement === arrowBtnRef?.current) {
      return;
    }
    setShowOptions(false);
  });

  /** Возможность отображения иконки открытия/закрытия */
  const showArrow = showArrowButton && !disabled && options;

  /** Возможность отображения очистки селекта */
  const canClear = clearable && selectedOption && !disabled;

  /** Возможность отображения списка опций */
  const canShowOptions = options && showOptions && !disabled && containerRef.current;

  /** Изменение значения в input */
  const onChangeHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: newValue } = event.target;
    setLocalValue(newValue);
    onChange?.(newValue);
    setShowOptions(true);
  }, [onChange]);

  /** Выбор опции */
  const onSelectHandler = useCallback((option?: SelectOption) => {
    onSelect?.(option);
    setShowOptions(false);
  }, [onSelect]);

  /** Обработчик blur input */
  const onBlurHandler = useCallback(() => {
    onBlur?.();
    setLocalValue(selectedOption?.label);
  }, [onBlur, selectedOption]);

  /** Открытие селекта по клику на инпут */
  const openOptionsHandler = useCallback(() => {
    if (!disabled && options) {
      setShowOptions(true);
    }
  }, [options, disabled]);

  /** Хэндлер для тогла открыть/закрыть селект */
  const openCloseOptionsHandler = useCallback(() => {
    if (!showOptions) {
      inputRef.current?.focus();
    } else {
      inputRef.current?.blur();
    }
    setShowOptions(!showOptions);
  }, [inputRef, showOptions]);

  /** Обработчика нажатия KeyDown */
  const keydownHandler = useCallback((e: KeyboardEvent) => {
    if (inputRef.current && inputRef.current === document.activeElement) {
      if (options?.length) {
        if (['ArrowDown', 'ArrowUp'].includes(e.key)) {
          setShowOptions(true);
        }
      }
    }
  }, [inputRef, options?.length]);

  useEffectOnce(() => {
    window.addEventListener('keydown', keydownHandler);
    return () => window.removeEventListener('keydown', keydownHandler);
  });

  /** Перенаправление рефа */
  useImperativeHandle(
    ref,
    () => inputRef.current!,
  );

  return (
    <div>
      {label && <Label>{label}</Label>}
      <div>
        <div
          ref={containerRef}
          className={parseStyles`
            flex cursor-pointer
            w-full rounded-lg border-1
            ${disabled ? 'bg-i-bg' : 'bg-white'}
            ${invalid || !!error ? 'border-error' : 'border-gray-200 focus-within:border-gray-600'}
            ${!!onClick && disabled && '[&>div>input]:cursor-pointer'}
          `}
          onClick={disabled ? onClick : undefined}
          style={{
            backgroundColor,
          }}
          title={selectedOption?.label}
        >
          <BaseInput
            ref={inputRef}
            backgroundColor={backgroundColor}
            className={parseStyles`
              flex-1 w-full
              ${(invalid || !!error) && 'text-error'}
              ${!onChange && 'caret-transparent'}
              ${disabled ? 'text-slate-400' : 'cursor-pointer'}
              ${!!onClick && disabled && 'hover:text-blue-600 underline'}
            `}
            disabled={disabled}
            height={height}
            onBlur={onBlurHandler}
            onChange={onChangeHandler}
            onClick={openOptionsHandler}
            placeholder={placeholder}
            readOnly={!onChange}
            value={localValue}
          />
          {loading && (<div className="pr-3 min-h-fit flex items-center"><Spinner /></div>)}
          {showArrow && (
            <div
              ref={arrowBtnRef}
              className="cursor-pointer hover:opacity-60 w-[25px] min-h-fit flex items-center"
              onClick={openCloseOptionsHandler}
              title={showOptions ? 'Закрыть' : 'Открыть'}
            >
              <ArrowUpDown
                className={parseStyles`
                  transition-all duration-[400ms] pointer-events-none
                  ${showOptions ? 'rotate-0' : 'rotate-180'}
                `}
              />
            </div>
          )}
          {canClear && (
            <div
              className="cursor-pointer hover:opacity-60 w-[25px] min-h-fit flex items-center"
              onClick={() => onSelectHandler(undefined)}
              title="Очистить"
            >
              <Close />
            </div>
          )}
        </div>
        {canShowOptions && (
          <Popup
            ref={popupRef}
            targetRef={containerRef.current}
            sameWidth
          >
            <Options
              onClose={() => setShowOptions(false)}
              onSelect={onSelectHandler}
              options={filteredWithSelected}
              selectedOption={selectedOption}
            />
          </Popup>
        )}
      </div>
      <div
        className={parseStyles`
          text-left
          ${error && 'text-error break-words text-xs text-left'}
        `}
      >
        {error}
      </div>
    </div>
  );
});

BaseSelect.displayName = 'BaseSelect';

export default React.memo(BaseSelect);
