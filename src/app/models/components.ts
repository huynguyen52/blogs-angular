export interface MenuItem {
  label: string;
  value: string;
  disabled?: boolean;
  click?: () => void;
}

export interface DropdownOption {
  label: string;
  value: string;
  disabled?: boolean;
  click?: () => void;
}
