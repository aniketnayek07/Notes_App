import React, { useState, useContext } from "react";
import { SelectedContext } from "../context/SelectedNoteContext";
import { MdEdit } from "react-icons/md";
import { ModalContext } from "../context/ModalContext";

const RightSide = () => {
  const { notesSelected, setNotesSelected } = useContext(SelectedContext);
  const { notes } = useContext(ModalContext);
  const [isEditing, setIsEditing] = useState(false);

  if (notes.length < 1 || !notesSelected) {
    return (
      <div className="w-full h-full text-4xl flex items-center justify-center text-white">
        NO NOTE SELECTED
      </div>
    );
  }

  return (
    <div className="w-full h-full rounded-4xl p-4">
      <div className="flex flex-row justify-center align-middle items-center gap-6">
        {isEditing ? (
          <input
            type="text"
            value={notesSelected.title}
            onChange={(e) =>
              setNotesSelected({ ...notesSelected, title: e.target.value })
            }
            onBlur={() => setIsEditing(false)}
            onKeyDown={(e) => e.key === "Enter" && setIsEditing(false)}
            className="focus:outline-none text-2xl text-white font-bold bg-transparent border-b border-gray-500"
            autoFocus
          />
        ) : (
          <h2 className="text-2xl text-white font-bold">
            {notesSelected.title}
          </h2>
        )}
        <MdEdit
          className="hover:text-blue-700 text-2xl text-center cursor-pointer ml-2"
          onClick={() => setIsEditing(true)}
        />
      </div>
      <textarea
        className="w-full h-[90%] text-white p-4 rounded-4xl focus:outline-none resize-none bg-transparent"
        value={notesSelected.content}
        onChange={(e) =>
          setNotesSelected({ ...notesSelected, content: e.target.value })
        }
      />
    </div>
  );
};

export default RightSide;
