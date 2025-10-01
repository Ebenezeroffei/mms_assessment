'use client';

import { MdClose } from "react-icons/md";
import { useAppContext } from "./ContextProvider";

const ModalProvider = () => {
  const { modalTitle, modalContent, showModal, setShowModal } = useAppContext();

  const closeModal = () => {
    setShowModal(_ => false);
  }

  if (showModal)
    return (
      <section
        className={`bg-black/80 transition-all duration-150 flex p-8 justify-center items-center fixed top-0 left-0 w-screen h-screen z-20`}
      >
        <div className="p-4 bg-white rounded max-w-[400px] flex-1">
          <section className="flex justify-between items-center pb-4">
            <p
              className="font-semibold text-primary"
            >
              {modalTitle}
            </p>
            <div
              className="bg-red-50 rounded p-1 cursor-pointer transition-colors duration-150 hover:bg-red-100 group"
              onClick={closeModal}
            >
              <MdClose
                className="text-red-500 transition-colors duration-150 group-hover:text-red-600"
              />
            </div>
          </section>
          <section className="overflow-y-auto max-h-[calc(100vh_-_150px)]">
            {modalContent}
          </section>
        </div>


      </section>
    )

  return (
    <></>
  )
}

export default ModalProvider;