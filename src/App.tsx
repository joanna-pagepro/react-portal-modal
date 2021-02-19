import React from "react";
import { ModalProvider } from "./components/Modal";
import ModalWrapper from "./ModalWrapper";

function App() {
  return (
    <ModalProvider>
      <ModalWrapper />
    </ModalProvider>
  );
}

export default App;
