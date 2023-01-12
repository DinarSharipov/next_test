import React, { createRef, useMemo } from 'react';

const Dialog: React.FC = () => {
  const ref = useMemo(() => createRef<HTMLDialogElement>(), []);

  return (
    <div className="flex flex-col">
      <input placeholder="input..." />
      <dialog ref={ref}>
        content...
      </dialog>
    </div>
  );
};

export default Dialog;
