export interface SelectButtonsProps {
  canShowOpenCloseArrow?: boolean;
  isOptionsOpen?: boolean;
  onOpenCloseClick?: ()=> void;
  onClear?: ()=> void;
  loading?: boolean;
}
