import axios from 'axios';
import React from 'react'
import AdminCard from '../../components/Admin Card/AdminCard'
import {useDispatch} from 'react-redux'
import { getUser, removeUserSession } from '../../routes/Common';

const AdminPage = props => {
    const dispatch = useDispatch();
    const [order, getOrder] = React.useState([]);

    React.useEffect(() => {
        axios.get('https://6131f19fab7b1e001799b262.mockapi.io/orders').then(res => getOrder(res.data));
    }, [])

    //new
    const user = getUser();

    //hancle logout
    const handleLogout = () =>{
        removeUserSession();
        props.history.push('/')
    }

    return (
        <div>
            <div className="px-8 my-6">
                <h1 className="text-2xl font-bold">Order Admin</h1>
                {order.map(el => <AdminCard {...el} />)}
            </div>

            <input type="button" className="inline-block align-middle" onClick={handleLogout} value="Logout" className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" />
            <br />
            <br />
        </div>
    )
}

export default AdminPage;