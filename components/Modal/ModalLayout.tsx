import type { PropsWithChildren } from 'react';
import React, { forwardRef } from 'react';
import { extractStyles } from '../../services/utils';
import { WithClassName } from './types';

type ModalLayoutProps = PropsWithChildren & WithClassName & {
  duration?: number;
};

const ModalLayout = forwardRef<HTMLDivElement, ModalLayoutProps>(
  ({ children, className, duration }, ref) => (
    <div
      ref={ref}
      className={extractStyles`
      m-auto p-4 bg-white rounded-xl opacity-100
      ${className}
    `}
      style={duration ? { transitionDuration: `${duration}ms` } : undefined}
    >
      {children}
    </div>
  ),
);
ModalLayout.displayName = 'ModalLayout';

export default ModalLayout;
