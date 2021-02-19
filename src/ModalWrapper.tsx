import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Modal from "./components/Modal";
import imageCat from "./assets/images/cat.jpg";

const ModalWrapper = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <button type="button" onClick={() => setIsModalOpen(true)}>
        click here to open the modal
      </button>
      <AnimatePresence>
        {isModalOpen && (
          <Modal onClose={() => setIsModalOpen(false)}>
            <img src={imageCat} alt="Kitty" />
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ModalWrapper;
