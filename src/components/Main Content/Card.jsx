import React from "react";
import { useState } from "react";
import ModalDetail from "../Modal/ModalDetail/ModalDetail";

const Cardcontent = (props) => {
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
        <div className="foodCard cursor-pointer w-72 bg-gray-100 shadow-lg rounded-md flex flex-col transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" onClick={() => setOpenModal(true)}>
          <div className="foto p-4 h-3/4">
            <img src={props.strMealThumb} alt="Menu" className="w-full rounded-md h-full"/>
          </div>
          <div className="Title p-4 h-1/4 flex flex-col">
            <p className="font-bold">{props.strMeal}</p>
          </div>
        </div>

        {openModal && <ModalDetail {...props} closeModal={setOpenModal}/>}
    </>

  );
}

export default Cardcontent;