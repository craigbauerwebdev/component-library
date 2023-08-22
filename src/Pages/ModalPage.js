import { useState } from "react";
import Button from "../Components/UI/Buttons/Button";
import Modal from "../Components/Modal/Modal";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);
  const handleModalClick = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="page">
      <h1>Modal Example</h1>
      <Button primary rounded className="mb-20" onClick={handleModalClick}>
        Open Modal
      </Button>
      {showModal && <Modal showModal={showModal} closeModal={closeModal} />}
    </div>
  );
}

export default ModalPage;
