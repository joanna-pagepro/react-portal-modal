import React, {
  createContext,
  useContext,
} from "react";
import ReactDOM from "react-dom";
import FocusTrap from "focus-trap-react";

import { ModalBaseProps } from "./types";
import { useBlockBodyWhenModalIsOpened, useModalContextValue } from "./hooks";
import {
  StyledModal,
  StyledModalCloseWrapper,
  StyledModalContent,
} from "./styles";

const ModalContext = createContext<HTMLDivElement | undefined>(undefined);

const ModalProvider: React.FC = ({ children }) => {
  const { modalContextValue, modalContainerRef } = useModalContextValue();

  useBlockBodyWhenModalIsOpened(modalContainerRef.current);

  return (
    <>
      <div ref={modalContainerRef} />
      <ModalContext.Provider value={modalContextValue}>
        {children}
      </ModalContext.Provider>
    </>
  );
};

const Modal: React.FC<ModalBaseProps> = ({ onClose, children }) => {
  const modalNode = useContext(ModalContext);

  return modalNode
    ? ReactDOM.createPortal(
        <StyledModal
          key="modal"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delayChildren: 0.2,
            },
          }}
          exit={{
            opacity: 0,
            transition: {
              afterChildren: 0.2,
            },
          }}
          transition={{ duration: 0.2, type: "tween" }}
        >
          <StyledModalContent
            initial={{ y: "100%" }}
            animate={{
              y: 0,
            }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.2, type: "tween" }}
          >
            <FocusTrap>
              <div>
                <StyledModalCloseWrapper>
                  <button type="button" onClick={onClose}>
                    close
                  </button>
                </StyledModalCloseWrapper>
                {children}
              </div>
            </FocusTrap>
          </StyledModalContent>
        </StyledModal>,
        modalNode
      )
    : null;
};

export { ModalProvider, Modal as default };
