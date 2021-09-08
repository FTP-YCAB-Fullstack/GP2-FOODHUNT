import React from 'react';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import ModalOrderCard from './OrderCard';



const ModalOrder = (props) => {
    const order = useSelector(state => state.order);
    const history = useHistory()

    const toOrder = () => {
        history.push("/order")
    }

    return (
        <div className="modalBg w-screen h-screen top-0 fixed flex justify-center items-center">
            <div className="modalCont w-96 h-4/5 bg-gray-200 shadow-lg flex flex-col rounded-lg">
                <div className="closeBtn flex justify-end p-4">
                    <button onClick={() => props.closeModal(false)} > X </button>
                </div>

                <div className="title p-2">
                    <h3 className="text-center text-2xl">Daftar Keranjang</h3>
                </div>

                <div className="lists flex flex-col bg-gray-300 m-2 h-4/5 overflow-auto rounded-md">
                    {order.map(el => <ModalOrderCard {...el} />)}
                    
                </div>

                <div className="orderBtn flex justify-end p-4">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={toOrder}>
                    Order
                </button>
                </div>
            </div>
        </div>
    )
}

export default ModalOrder
