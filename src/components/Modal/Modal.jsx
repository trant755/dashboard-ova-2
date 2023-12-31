import PropTypes from "prop-types";
import { useEffect } from "react";
import { createPortal } from "react-dom";

import * as SC from "./Modal.styled";

const modalRoot = document.querySelector("#modal-cabinet");

function updateScrollLock() {
  if (modalRoot.childElementCount > 0) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
}

export const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    updateScrollLock();

    return () => {
      window.removeEventListener("keydown", handleKeyDown);

      updateScrollLock();
    };
  }, [onClose]);

  const onBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <SC.ModalBackdrop onClick={onBackdropClick}>{children}</SC.ModalBackdrop>,
    modalRoot
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};
