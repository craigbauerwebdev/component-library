import { useEffect } from "react";
import ReactDOM from "react-dom";
function Modal({ closeModal, children, actionBar }) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, []);
  const handleCloseModal = () => {
    closeModal();
  };
  return ReactDOM.createPortal(
    <>
      <div className="modal" onClick={handleCloseModal}></div>
      <div className="innerModal">
        {children}
        {actionBar}
      </div>
    </>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
