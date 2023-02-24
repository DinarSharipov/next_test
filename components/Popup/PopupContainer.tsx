import React, { forwardRef } from 'react';
import type { PopupContainerProps } from './types';

const PopupContainer = forwardRef<HTMLDivElement, PopupContainerProps>(({
  children, x, y, contentRef, className, width,
}, ref) => (
  <div
    ref={ref}
    onWheel={(e) => e.stopPropagation()}
    style={{
      position: 'fixed',
      left: 0,
      top: 0,
      transform: `translate3d(${x}px, ${y}px, 0)`,
      width,
      zIndex: 1000,
    }}
  >
    <div
      ref={contentRef}
      className={className}
    >
      {children}
    </div>
  </div>
));

PopupContainer.displayName = 'PopupContainer';

export default PopupContainer;
