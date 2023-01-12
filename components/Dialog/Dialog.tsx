import React, { createRef, useMemo } from 'react';

const Dialog: React.FC = () => {
  const ref = useMemo(() => createRef<HTMLDialogElement>(), []);

  return (
    <div className="flex flex-col fixed">
      <input
        onClick={() => ref.current?.show()}
        placeholder="input..."
      />
      <div>
        <dialog
          ref={ref}
          className="absolute w-full left-0 top bg-green-400"
        >
          content...
        </dialog>
      </div>
    </div>
  );
};

export default Dialog;
