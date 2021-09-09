import React from 'react'
import {useDispatch} from 'react-redux';

const OrderCard = props => {

    const dispatch = useDispatch();

    const setQuantity = e => {
        dispatch({type: 'SET_QUANTITY', payload: {
            ...props,
            quantity: e.target.value
        }});
    }

    return(
        <div className="flex w-12/12 h-48 my-4 justify-around bg-gray-300 rounded-lg">
            <div className="info w-8/12 my-5 mx-4 flex  flex-col justify-center">
                <h1 className="text-xl font-bold">{props.strMeal}</h1>
                <h1 className=" text-xl font-bold my-3">Rp. {(props.price * props.quantity).toLocaleString()}</h1>
                <div className="quantity">
                    <span className="font-bold text-xl">Quantity</span>
                    <input onChange={setQuantity} className="text-center ml-2 w-12 h-8" type="number" min="1" value={props.quantity} />
                </div>
            </div>
            <div className="mr-8 images w-32 self-center">
                <img className="rounded-lg w-full h-full" src={props.strMealThumb} alt="" />
            </div>
        </div>
    )
}

export default OrderCard;
