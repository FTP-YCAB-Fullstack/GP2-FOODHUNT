import axios from 'axios';
import React, { useState } from 'react';
import ModalAdmin from '../Modal/ModalAdmin/ModalAdmin';

import './AdminCard.css'

const AdminCard = props => {
    const [openModal,setOpenModal] = useState(false)


    const approve = async (id) => {
        await axios.put(`https://6131f19fab7b1e001799b262.mockapi.io/orders/${id}`, {
            ...props,
            approved: true,
        });
    }


    console.log(props)

    return (
        <>
            <div className="relative flex w-12/12 h-4/5 mb-4 flex-wrap justify-between bg-gray-300 rounded-lg" style={{
                backgroundColor: props.approved ? 'green' : null,
                color: props.approved ? 'white' : null
            }}>
                <div className="info flex flex-col p-6 gap-y-6 overflow-visible">
                    <h1 className="text-xl font-bold">Nama Pembeli: {props.name}</h1>
                    <h1 className="text-xl font-bold">Tanggal Pemesanan: {props.date}</h1>
                    <h1 className="font-bold text-xl">No Meja: {props.table}</h1>
                </div>
                <div className="absolute right-2 bottom-2">
                     <button disabled={props.approved ? true : false} className="bg-white px-4 py-2 rounded-lg"
                    style={{
                        color: props.approved ? 'black' : null
                    }}
                    onClick={() => setOpenModal(true)}
                    >{props.approved ? 'DONE' : 'MORE'}</button>
                </div>
            </div>

            {openModal && <ModalAdmin approve={approve} {...props} closeModal={setOpenModal}/>}
        </>
    )
}

export default AdminCard;