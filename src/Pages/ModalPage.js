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
  const actionBar = (
    <Button onClick={closeModal} primary>
      Accept
    </Button>
  );
  const modal = (
    <Modal actionBar={actionBar} closeModal={closeModal}>
      <p>
        Here is some modal text! This text is passed down into the modal as
        children prop.
      </p>
    </Modal>
  );

  return (
    <div className="page">
      <h1>Modal Example</h1>
      <Button primary rounded className="mb-20" onClick={handleModalClick}>
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
