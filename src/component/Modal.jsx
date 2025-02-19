import React, { useContext, useEffect, useRef } from "react";
import { ModalContext } from "../context/ModalContext";
const Modal = () => {
  const { setShowModal, addNotes } = useContext(ModalContext);
  const inputRef = useRef(null);
  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        // Close the modal
        setShowModal(false);
      }
    });
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = inputRef.current.value;
    if (text) {
      addNotes(text);
    }
    setShowModal(false);
  };
  return (
    <div
      className="w-screen h-screen flex justify-center items-center align-middle z-10 absolute left-0 top-0  bg-black/20 backdrop-blur-sm "
      autoFocus
    >
      <div className="w-3xl h-3xl fixed p-6 text-white bg-gray-800 ">
        <form
          className="flex flex-col gap-6 text-gray-400"
          onSubmit={handleSubmit}
        >
          <p className="text-2xl font-bold ">ADD YOUR NOTES</p>
          <label className="text-xl font-medium">Title</label>
          <input
            type="text"
            className="w-full bg-white text-black rounded-xl p-4"
            ref={inputRef}
          />
          <button
            type="submit"
            // onClick={() => setShowModal(false)}
            className="bg-gray-400 w-full p-2 text-white rounded-xl text-xl font-bold hover:bg-amber-200 hover:text-gray-900"
          >
            SAVE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
