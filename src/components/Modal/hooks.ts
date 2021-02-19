import { useEffect, useRef, useState } from 'react';

import { UseModalContextValueReturnType } from './types';
import { disableScrollOnBody, enableScrollOnBody } from './utils';

export const useModalContextValue = (): UseModalContextValueReturnType => {
  const modalContainerRef = useRef<HTMLDivElement>(null);
  const [modalContextValue, setModalContextValue] = useState<HTMLDivElement>();

  useEffect(() => {
    const modalNode = modalContainerRef.current;

    setModalContextValue(modalNode || undefined);
  }, []);

  return { modalContextValue, modalContainerRef };
};

export const useBlockBodyWhenModalIsOpened = (
  modalNode: HTMLElement | null
): void => {
  useEffect(() => {
    const observerCallback = (mutations: MutationRecord[]): void => {
      mutations.forEach((mutation) => {
        const modalContainerHasChildren =
          mutation.type === 'childList' && !!mutation.addedNodes.length;

        if (modalContainerHasChildren) {
          disableScrollOnBody();
        } else {
          enableScrollOnBody();
        }
      });
    };

    const observer = new MutationObserver(observerCallback);

    if (modalNode) {
      observer.observe(modalNode, { childList: true });
    }

    return (): void => {
      observer.disconnect();
    };
  }, [modalNode]);
};
