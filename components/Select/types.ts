export interface SelectButtonsProps {
  canShowOpenCloseArrow?: boolean;
  isOptionsOpen?: boolean;
  onOpenCloseClick?: ()=> void;
  onClear?: ()=> void;
  loading?: boolean;
}

export type SelectOption = { label: string; value: string };

export interface BaseSelectProps {
  placeholder?: string;
  label?: string;
  options?: SelectOption[];
  selectedOption?: SelectOption;
  onClick?: ()=> void;
  onSelect?: (option: SelectOption)=> void;
  onClear?: ()=> void;
  onChange?: (value?: string)=>void;
  disabled?: boolean;
}
