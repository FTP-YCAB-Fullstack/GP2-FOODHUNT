import React from 'react'

const ListOrder = (props) => {
    return (
        <div className="order p-2">
            <div className="namaMakanan flex">
                <p className="w-1/2">Nama Makanan</p>
                <p className="w-1/2 text-right">{props.strMeal}</p>
            </div>
            <div className="jumlahMakanan flex">
                <p className="w-1/2">Jumlah Porsi</p>
                <p className="w-1/2 text-right">{props.quantity}</p>
            </div>
            <div className="hargaMakanan flex">
                <p className="w-1/2">Harga Makanan</p>
                <p className="w-1/2 text-right">Rp. {props.price.toLocaleString()}</p>
            </div>
            <div className="totalHarga flex">
                <p className="w-1/2">Total</p>
                <p className="w-1/2 text-right">Rp.{(props.price * props.quantity).toLocaleString()}</p>
            </div>
        </div>
    )
}

export default ListOrder
