import axios from 'axios';
import React from 'react'
import AdminCard from '../../components/Admin Card/AdminCard'
import {useDispatch} from 'react-redux'

const AdminPage = props => {
    const dispatch = useDispatch();
    const [order, getOrder] = React.useState([]);
    const [reRender, setReRender] = React.useState(false);

    const orderReverse = [...order].reverse();

    React.useEffect(() => {
        axios.get('https://6131f19fab7b1e001799b262.mockapi.io/orders').then(res => getOrder(res.data));
    }, [])

    React.useEffect(() => {
        axios.get('https://6131f19fab7b1e001799b262.mockapi.io/orders').then(res => getOrder(res.data));
    }, [reRender])

    return (
        <div className="px-8 my-6 gap-y-2 ">
            <h1 className="text-2xl font-bold text-yellow-400 mb-8">Order Admin</h1>
            {orderReverse.map(el => <AdminCard setReRender={setReRender} {...el} />)}
        </div>
    )
}

export default AdminPage;