import { MutableRefObject } from 'react';

export interface ModalBaseProps {
  onClose: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export interface UseModalContextValueReturnType {
  modalContextValue: HTMLDivElement | undefined;
  modalContainerRef: MutableRefObject<HTMLDivElement | null>;
}
