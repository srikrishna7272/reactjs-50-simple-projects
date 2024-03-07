import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

export default function ModalTest() {
  const [showModalPopup, setShowModalPopup] = useState(false);
  function handleToggleModalPopup() {
    setShowModalPopup(!showModalPopup);
  }
  function onClose() {
    setShowModalPopup(false);
  }
  console.log(showModalPopup);
  return (
    <div>
      <button onClick={handleToggleModalPopup}>Open Modal PopUp</button>
      {showModalPopup && <Modal header={<h1>Customized Header</h1>} onClose={onClose} body={<h2>Customize body</h2>} />}
    </div>
  );
}
