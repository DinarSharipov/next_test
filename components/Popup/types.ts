import type { PropsWithChildren, Ref } from 'react';
import type { WithClassName } from '../ui';

/** Пропсы popup */
export interface PopupProps extends PropsWithChildren, WithClassName {
  targetRef: HTMLElement;
  sameWidth?: boolean;
  position?: PopupPosition;
}

/** Пропсы обёртки popup */
export interface PopupContainerProps extends PropsWithChildren, WithClassName {
  x: number;
  y: number;
  width: number | undefined;
  contentRef: Ref<HTMLDivElement>;
}

export type PopupPosition = 'top' | 'bottom' | 'left' | 'right'
