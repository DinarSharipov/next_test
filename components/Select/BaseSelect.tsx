import React, { createRef, useState } from 'react';
import BaseInput from '../Input/BaseInput';
import SelectButtons from './SelectButtons';

const ref = createRef<HTMLDialogElement>();
const BaseSelect: React.FC = () => {
  const [showOptions, setShowOptions] = useState(false);

  const openCloseHandler = () => {
    if (ref.current?.open) {
      ref?.current?.close();
    } else {
      ref?.current?.show();
    }
    setShowOptions(!showOptions);
  };

  return (
    <div className="peer w-[700px]">
      <BaseInput
        postfix={(
          <SelectButtons
            isOptionsOpen={showOptions}
            onOpenCloseClick={openCloseHandler}
            canShowOpenCloseArrow
          />
        )}
      />
    </div>
  );
};

export default BaseSelect;
