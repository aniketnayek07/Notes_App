import { createContext, useState } from "react";
export const SelectedContext = createContext(null);

export const SelectedContextProvider = ({ children }) => {
  const [notesSelected, setNotesSelected] = useState(0);

  return (
    <SelectedContext.Provider value={{notesSelected, setNotesSelected}}>
      {children}
    </SelectedContext.Provider>
  );
};
