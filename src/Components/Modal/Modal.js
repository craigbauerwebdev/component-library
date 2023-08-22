//import Link from "../../Navigation/Link/Link";
//import { useEffect, useState } from "react";
function Modal({ closeModal }) {
  const handleCloseModal = () => {
    closeModal();
  };
  return (
    <>
      <div className="modal"></div>
      <div className="innerModal">
        <div onClick={handleCloseModal}>&times;</div>
        <div>inner modal</div>
      </div>
    </>
  );
}

export default Modal;
