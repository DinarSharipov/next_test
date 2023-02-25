/** Пропсы модалки подтверждения */
export interface ConfirmModalProps {
  /** Вопрос */
  questionTitle?: string;
  /** Стили */
  className?: string;
}

export interface ConfirmRefProps {
  confirm: () => Promise<boolean>;
}
