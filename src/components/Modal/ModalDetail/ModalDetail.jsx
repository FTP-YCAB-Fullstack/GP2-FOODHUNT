import React from "react"

const ModalDetail = (props) => {

    return (
        <div className="modalBg w-screen h-screen top-0 fixed flex justify-center items-center">
          <div className="modalCont w-1/4 h-auto bg-gray-200 shadow-lg flex flex-col p-4 gap-y-4 rounded-md">
              <div className="closeBtn flex justify-end">
                <button onClick={() => props.closeModal(false)}> X </button>
              </div>
              <div className="tumb h-2/5">
                  <img src={props.strMealThumb} alt="Image" className="h-full w-3/4"/>
              </div>
              <div className="info flex">
                  <div className="Nama w-1/2">
                    <p className="font-bold">{props.strMeal}</p>
                  </div>
                  <div className="Harga w-1/2 flex justify-end">
                    <p>{props.price}</p>
                  </div>
              </div>
              <div className="ingredients">
                  <div className="title"><p>
                    Bahan</p></div>
                  <div className="info">
                    <ul>
                      <li>• Nasi</li>
                      <li>• Bawang</li>
                      <li>• Telur</li>
                    </ul>
                  </div>
              </div>
              <div className="orderBtn flex justify-end">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Beli
                </button>
              </div>
          </div>
      </div>
    )
}

export default ModalDetail