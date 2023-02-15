import type { PropsWithChildren } from 'react';

export interface WithClassName {
  /** Дополнительные классы элемента */
  className?: string;
}

/** Пропсы модального окна */
export interface ModalProps extends PropsWithChildren, WithClassName {
  onClose?: () => void;
}
