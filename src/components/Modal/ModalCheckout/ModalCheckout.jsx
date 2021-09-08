import axios from 'axios';
import React from 'react'
import swal from 'sweetalert';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

import './ModalCheckout.css'

const ModalCheckout = (props) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [form, setForm] = React.useState({});

    const formHandler = e => {
        let {value, name} = e.target;

        setForm({
            ...form,
            [name]: value
        });
        console.log(form);
    }

    const submitHandler = async e => {
        e.preventDefault();
        await axios.post('https://6131f19fab7b1e001799b262.mockapi.io/orders', {
            ...form,
            order: [...props.order],
            approved: false
        });
        swal({
            title: "Pesanan Diterima!",
            text: "Silahkan Tunggu, pesanan akan diantar ke meja anda",
            icon: "success",
            });
        
        dispatch({type: 'RESET_STATE'});
        props.closeModal(false)
        
    }

    return (
        <div className="modalBg w-screen h-screen top-0 fixed flex justify-center items-center">
            <div className="modalcheck h-2/3 items-center flex flex-col p-4 gap-y-4 ">
                <form onSubmit={submitHandler} className="w-4/5 m-4 p-4 bg-white rounded shadow-xl gap-y-2 h-full flex flex-col gap-y-2">
                    <div className="header flex">
                        <p className="text-gray-800 font-medium w-1/2">Informasi Pembelian</p>
                        <p className="text-right font-semibold text-2xl cursor-pointer w-1/2" onClick={() => props.closeModal(false)}> X </p>
                    </div>  

                    <div className="mt-2 flex flex-col gap-y-2">
                        <label className="block text-sm text-gray-00">Nama Lengkap</label>
                        <input autoComplete="off" required name="name" onChange={formHandler} className="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded " />
                    </div>

                    <div className="mt-2 flex flex-col gap-y-2">
                        <label className="block text-sm">No Meja</label>
                        <select name="table" className="w-full px-2 py-1 text-gray-700 bg-gray-200 rounded" placeholder="no meja" required onChange={formHandler}>
                            <option value=""></option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>

                    <div className="btn self-end mt-8">
                        <input type="submit" value="Pesan" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"/>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ModalCheckout
