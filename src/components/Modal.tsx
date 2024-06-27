"use client";

interface ModalProps {
    body: JSX.Element;
    text: string;
    modalCustomTheme?: any;
    buttonCustomTheme?: any;
    modalOpen?: boolean;
};

import { Button, Modal } from "flowbite-react";
import React, { useState } from "react";

export const ModalCustom: React.FC<ModalProps> = ({text, body, buttonCustomTheme, modalCustomTheme, modalOpen}) => {
  const [openModal, setOpenModal] = useState(modalOpen ?? false);

  return (
    <>
      <Button onClick={() => setOpenModal(true)} theme={buttonCustomTheme} className="flex items-center justify-center">{text}</Button>
      <Modal show={openModal} size="md" theme={modalCustomTheme} onClose={() => setOpenModal(false)} popup>
        <Modal.Header />
        <Modal.Body>
            {body}
        </Modal.Body>
      </Modal>
    </>
  );
}
