import React, { createRef, useMemo } from 'react';
import { useClickAway } from 'react-use';

const Dialog: React.FC = () => {
  const ref = useMemo(() => createRef<HTMLDialogElement>(), []);
  const outsideClickRef = useMemo(() => createRef<HTMLDivElement>(), []);

  useClickAway(outsideClickRef, () => {
    ref.current?.close();
  });

  return (
    <div
      ref={outsideClickRef}
      className="flex flex-col fixed"
    >
      <input
        className="w-[300px] outline-none"
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
