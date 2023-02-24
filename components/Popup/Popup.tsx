import React, {
  useRef,
  useLayoutEffect,
  useState,
  forwardRef,
} from 'react';
import { createPortal } from 'react-dom';
import PopupContainer from './PopupContainer';
import type { PopupProps } from './types';

const Popup = forwardRef<HTMLDivElement, PopupProps>(({
  children, targetRef, className, sameWidth, position = 'bottom',
}, ref) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [tooltipRect, setTooltipRect] = useState<DOMRect | undefined>();
  // eslint-disable-next-line react/prop-types
  const parentBoundingRect = targetRef.getBoundingClientRect();

  useLayoutEffect(() => {
    setTooltipRect(contentRef.current?.getBoundingClientRect());
  }, [targetRef, children]);

  let tooltipX = 0;
  let tooltipY = 0;
  if (targetRef !== null && tooltipRect) {
    switch (position) {
      case 'top':
        tooltipX = parentBoundingRect.left + (parentBoundingRect.width - tooltipRect.width) / 2;
        tooltipY = parentBoundingRect.top - tooltipRect.height;
        if (tooltipY < 0) {
          tooltipY = parentBoundingRect.bottom;
          if (tooltipY + tooltipRect.height > document.body.clientHeight) {
            tooltipY = 0;
          }
        }
        break;
      case 'left':
        tooltipX = parentBoundingRect.left - tooltipRect.width;
        tooltipY = parentBoundingRect.top + (parentBoundingRect.height - tooltipRect.height) / 2;
        if (tooltipX < 0) {
          tooltipX = parentBoundingRect.right;
          if (tooltipX + tooltipRect.width > document.body.clientWidth) {
            tooltipX = 0;
          }
        }
        break;
      case 'right':
        tooltipX = parentBoundingRect.right;
        tooltipY = parentBoundingRect.top + (parentBoundingRect.height - tooltipRect.height) / 2;
        if (tooltipX + tooltipRect.width > document.body.clientWidth) {
          tooltipX = parentBoundingRect.left - tooltipRect.width;
          if (tooltipX < 0) {
            tooltipX = document.body.clientWidth - tooltipRect.width;
          }
        }
        break;
      default:
        tooltipX = parentBoundingRect.left + (parentBoundingRect.width - tooltipRect.width) / 2;
        tooltipY = parentBoundingRect.bottom;
        if (tooltipY + tooltipRect.height > document.body.clientHeight) {
          tooltipY = parentBoundingRect.top - tooltipRect.height;
          if (tooltipY < 0) {
            tooltipY = document.body.clientHeight - tooltipRect.height;
          }
        }
        break;
    }
  }

  return createPortal(
    <PopupContainer
      ref={ref}
      className={className}
      contentRef={contentRef}
      width={sameWidth ? parentBoundingRect.width : undefined}
      x={tooltipX}
      y={tooltipY}
    >
      {children}
    </PopupContainer>,
    document.body,
  );
});

Popup.displayName = 'Popup';

export default Popup;
