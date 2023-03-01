import React from 'react';

const PageFooter: React.FC = () => (
  <div className="flex items-center h-[60px]">
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
