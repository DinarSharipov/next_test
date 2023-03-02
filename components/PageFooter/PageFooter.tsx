import React from 'react';

const PageFooter: React.FC = () => (
  <div className="flex items-center h-[60px] fixed right-0 left-0 bottom-0 bg-red-500 p-4 gap-2">
    {Array.from({ length: 6 }, (_, i) => (
      <a
        key={i}
        href={i.toString()}
      >
        {`${i}link`}
      </a>
    ))}
  </div>
);

export default PageFooter;
