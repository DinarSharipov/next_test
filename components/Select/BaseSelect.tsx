import React, { createRef, useMemo, useState } from 'react';
import { useClickAway } from 'react-use';
import BaseInput from '../Input/BaseInput';
import ArrowDown from '../../assets/ArrowDown.svg';
import { extractStyles } from '../../services/utils';
import { BaseSelectProps } from './types';

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
  };

  return (
    <div
      ref={outsideClickRef}
      className="flex flex-col fixed rounded-md"
    >
      <BaseInput
        className="rounded-l-md"
        onClick={inputClickHandler}
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
      />
      <div className="relative">
        <dialog
          ref={ref}
          className={
            extractStyles`
              absolute w-full left-0 top-[2px] bg-green-400 transition-all duration-200
              origin-top rounded-md
              ${showOptions ? 'opacity-100' : 'opacity-0'}
              ${showOptions ? 'scale-y-100' : 'scale-y-0'}
            `
          }
        >
          content...
        </dialog>
      </div>
    </div>
  );
};

export default BaseSelect;
