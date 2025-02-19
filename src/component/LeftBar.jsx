import React, { useContext, useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import Modal from "./Modal";
import { ModalContext } from "../context/ModalContext";
import { SelectedContext } from "../context/SelectedNoteContext";

const LeftBar = () => {
  const { notes, showModal, setShowModal, setNotes } = useContext(ModalContext);
  const { notesSelected, setNotesSelected } = useContext(SelectedContext);
  const [width, setWidth] = useState(window.innerWidth);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setWidth(window.innerWidth);
    console.log(window.innerWidth);
    console.log(width);
  }, []);
  const deleteTitle = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <>
      {width < 768 ? (
        <>
          <GiHamburgerMenu
            className="absolute top-4 left-4 text-4xl"
            onClick={() => setIsOpen(!isOpen)}
          />

          <div className="absolute z-10 w-[60%] h-full bg-gray-900">
            <div className="flex flex-row justify-between  text-3xl">
              <p>NOTES</p>
              <IoMdClose />
            </div>
          </div>
        </>
      ) : (
        <div className="md:w-[20%] h-full md:p-4 bg-gray-900 ">
          <div className="flex flex-row justify-between items-center">
            <h1 className="md:text-lg font-bold">NOTES</h1>
            <IoMdAdd
              className="cursor-pointer text-2xl hover:text-blue-500"
              onClick={() => setShowModal(true)}
            />
          </div>
          <ul className="mt-4">
            {notes.map((note, index) => (
              <li
                key={index}
                className=" p-2 my-2 rounded text-white flex flex-row justify-between align-middle items-center cursor-pointer hover:bg-gray-200/10 transition-all duration-300 bg-none"
                onClick={() => {
                  setNotesSelected(note);
                  for (let i = 0; i < note.length; i++) {
                    if (notesSelected.id === notes[i].id) {
                      notes.pop(i);
                      notes.splice(i, 0, notesSelected);
                      setNotes(notes);
                      setNotesSelected(notes[i]);
                    }
                  }
                }}
              >
                <p>{note.title} </p>
                <MdDelete
                  className="cursor-pointer hover:text-red-600 "
                  onClick={() => deleteTitle(index)}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
      {showModal && <Modal />}
    </>
  );
};

export default LeftBar;
