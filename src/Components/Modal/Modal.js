import ReactDOM from "react-dom";
function Modal({ closeModal, children, actionBar }) {
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
