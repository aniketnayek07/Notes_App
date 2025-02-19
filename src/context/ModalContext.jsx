import { createContext, useEffect, useState } from "react";

export const ModalContext = createContext(null);

export const ModalContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [notes, setNotes] = useState([]);
  const addNotes = (title) => {
    if (notes.length === 0) {
      setNotes([...notes, { id: 0, title, content: null }]);
    } else {
      setNotes([
        ...notes,
        { id: notes[notes.length - 1].id + 1, title, content: null },
      ]);
    }
  };
  return (
    <ModalContext.Provider
      value={{ showModal, setShowModal, notes, addNotes, setNotes }}
    >
      {children}
    </ModalContext.Provider>
  );
};
