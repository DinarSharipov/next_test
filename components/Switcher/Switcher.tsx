import { extractStyles } from '@/services/utils';
import React, { useState } from 'react';

const Switcher: React.FC = () => {
  const [active, setActive] = useState(false);

  return (
    <div
      className=" w-[60px] h-[25px] rounded-full overflow-hidden"
      onClick={() => setActive(!active)}
    >
      <div className={
        extractStyles`switcher
          ${active ? 'border-l-[60px]' : 'border-r-[60px]'}
        `
      }
      >
        <div className="w-[50px] h-full rounded-full bg-gray-100 shadow-inner" />
      </div>
    </div>
  );
};

export default Switcher;
