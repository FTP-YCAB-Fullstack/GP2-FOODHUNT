import axios from "axios";
import React from "react";

import {useDispatch} from 'react-redux';

const ModalDetail = (props) => {
    const dispatch = useDispatch();
    const [bahan, setBahan] = React.useState({});

    React.useEffect(() => {
      axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${props.idMeal}`)
      .then(res => {
        let {strIngredient1, strIngredient2, strIngredient3} = res.data.meals[0];
        setBahan({
          strIngredient1,
          strIngredient2,
          strIngredient3
        })
      })
    }, []);

    const addItem = () => {
      dispatch({type: 'ADD_ITEM', payload: {
        ...props
      }});
      props.closeModal(false)
    }

    const removeItem = () => {
      dispatch({type: 'REMOVE_ITEM', payload: {
        ...props
      }});
      props.closeModal(false)
    }

    return (
        <div className="modalBg w-screen h-screen top-0 fixed flex justify-center items-center">
          <div className="modalCont w-96 h-auto z-10 bg-gray-200 shadow-lg flex flex-col p-4 gap-y-4 rounded-md">
              <div className="closeBtn flex justify-end">
                <button onClick={() => props.closeModal(false)}> X </button>
              </div>
              <div className="tumb h-2/5">
                  <img src={props.strMealThumb} alt="Image" className="h-full w-3/4 mx-auto rounded-md"/>
              </div>
              <div className="info flex">
                  <div className="Nama w-1/2">
                    <p className="font-bold">{props.strMeal}</p>
                  </div>
                  <div className="Harga w-1/2 flex justify-end">
                    <p>Rp. {props.price.toLocaleString()}</p>
                  </div>
              </div>
              <div className="ingredients">
                  <div className="title"><p>
                    Bahan Utama</p></div>
                  <div className="info">
                    <ul>
                      <li>• {bahan.strIngredient1}</li>
                      <li>• {bahan.strIngredient2}</li>
                      <li>• {bahan.strIngredient3}</li>
                    </ul>
                  </div>
              </div>
              <div className="orderBtn flex justify-end">
                <button
                    onClick={props.carted ? removeItem : addItem} 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    {props.carted ? 'Batalkan' : 'Beli'}
                </button>
              </div>
          </div>
      </div>
    )
}

export default ModalDetail