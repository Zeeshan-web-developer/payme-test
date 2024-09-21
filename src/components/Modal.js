import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import "./Modal.css"; // Import your CSS file

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
    maxWidth: "90%", // Make it responsive
    width: "500px", // Base width
  },
};

Modal.setAppElement("#root");

function App({ children, modalIsOpen, setIsOpen }) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button className="close__button" onClick={closeModal}>
          &times; {/* Close button */}
        </button>
        <div className="modal__content">{children}</div>
      </Modal>
    </div>
  );
}

export default App;
