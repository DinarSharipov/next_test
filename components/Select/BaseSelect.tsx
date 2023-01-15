import React, { createRef, useMemo, useState } from 'react';
import { useClickAway } from 'react-use';
import BaseInput from '../Input/BaseInput';
import ArrowDown from '../../assets/ArrowDown.svg';
import { extractStyles } from '../../services/utils';
import { BaseSelectProps } from './types';
import Options from './Options';

const BaseSelect: React.FC<BaseSelectProps> = ({
  disabled,
  label,
  onChange,
  onClear,
  onClick,
  onSelect,
  options,
  placeholder,
  selectedOption,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const ref = useMemo(() => createRef<HTMLDialogElement>(), []);
  const outsideClickRef = useMemo(() => createRef<HTMLDivElement>(), []);
  const canShowOptions = options?.length && !disabled;

  useClickAway(outsideClickRef, () => {
    setShowOptions(false);
    ref.current?.close();
  });

  const openCloseHandler = () => {
    setShowOptions(!showOptions);
    if (ref?.current?.open) {
      ref?.current?.close();
    } else {
      ref?.current?.show();
    }
  };

  const inputClickHandler = () => {
    setShowOptions(true);
    ref.current?.show();
    onClick?.();
  };

  const parentElWidth = outsideClickRef?.current?.parentElement?.clientWidth;

  return (
    <div
      ref={outsideClickRef}
      className={
        extractStyles`
        flex flex-col fixed rounded-md
        ${parentElWidth && `w-[${parentElWidth}px]`}`
      }
    >
      { label && <div className="pb-[2px]">{label}</div> }
      <BaseInput
        className="rounded-l-md"
        onChange={onChange}
        onClick={inputClickHandler}
        placeholder={placeholder}
        postfix={(
          <div
            className={
              extractStyles`
                flex items-center bg-white rounded-r-md
                hover:opacity-90
                transition-all p-2 cursor-pointer
                `
            }
            onClick={openCloseHandler}
          >
            {canShowOptions && (
              <ArrowDown className={
                extractStyles`
                transition-all pointer-events-none
                ${showOptions ? 'rotate-0' : 'rotate-180'}
                `
              }
              />
            )}
          </div>
        )}
        value={selectedOption.label || ''}
      />
      <div className="relative">
        <dialog
          ref={ref}
          className="w-full rounded-md top-[2px] p-0"
        >
          <Options
            onClose={openCloseHandler}
            onSelect={onSelect}
            options={options}
            selectedOption={selectedOption}
          />
        </dialog>
      </div>
    </div>

  );
};

export default BaseSelect;
