import React, {
  forwardRef,
  useCallback,
  useContext,
  useImperativeHandle,
  useState,
} from 'react';
import { ConfirmModalContext } from 'src/contexts/ConfirmModalContext';
import Modal from '../Modal/Modal';
import { Button } from '../ui';
import type { ConfirmModalProps, ConfirmRefProps } from './types';

/** Модалка подтверждения */
const ConfirmModal = forwardRef<ConfirmRefProps, ConfirmModalProps >(({
  className,
  questionTitle,
}, ref) => {
  const [show, setShow] = useState(false);
  const [resolveCB, setResolveCB] = useState<((value: boolean | PromiseLike<boolean>) => void) | null>(null);

  const confirmModalContext = useContext(ConfirmModalContext);

  const confirm = useCallback(() => {
    setShow(true);
    return new Promise<boolean>((resolve) => {
      setResolveCB(() => resolve);
    });
  }, []);

  useImperativeHandle<ConfirmRefProps, ConfirmRefProps>(ref, () => ({ confirm }), []);

  /** Обработчик отмены */
  const rejectHandler = useCallback(() => {
    setShow(false);
    resolveCB?.(false);
  }, [resolveCB]);

  return !show ? null : (
    <Modal
      className={className}
      onClose={rejectHandler}
    >
      <div className="flex flex-col p-2 gap-4 min-w-[300px] max-w-[600px]">
        {questionTitle && <div className="font-bold text-lg">{questionTitle}</div>}
        <div className="flex gap-4 justify-between">
          <Button.Primary
            className="flex-1"
            label="Да"
            onClick={() => {
              setShow(false);
              resolveCB?.(true);
              confirmModalContext?.updateConfirmQuestion?.();
            }}
          />
          <Button.Primary
            className="flex-1"
            label="Нет"
            onClick={rejectHandler}
          />
        </div>
      </div>
    </Modal>
  );
});

ConfirmModal.displayName = 'ConfirmModal';

export default React.memo(ConfirmModal);
