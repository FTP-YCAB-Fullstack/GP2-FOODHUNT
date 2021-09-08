import React from 'react'
import { useState } from 'react'
import ModalCheckout from '../../components/Modal/ModalCheckout/ModalCheckout'
import OrderCard from '../../components/Order Card/OrderCard'

import {useSelector} from 'react-redux';

const OrderPage = props => {
    const order = useSelector(state => state.order)

    let total = order.map(el => el.price * el.quantity).reduce((acc, val) => acc + val, 0);

    const [openModal,setOpenModal] = useState(false)

    return (
        <>
            <div className="p-8">
                <h1 className="text-3xl mb-6">Daftar Order</h1>
                {order.map((el, i) => <OrderCard key={i} {...el} />)}
                <h1 className="text-3xl mb-6 font-bold">Total - Rp. {total.toLocaleString()}</h1>
                <div className="flex justify-end">
                    <button className="p-4 rounded-lg bg-gray-300 font-bold"
                    onClick={() => setOpenModal(true)} 
                    >Checkout</button>
                </div>
            </div>
            {openModal && <ModalCheckout order={order} closeModal={setOpenModal}/>}
        </>
    )
}

export default OrderPage;