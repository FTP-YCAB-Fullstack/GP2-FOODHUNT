import React from "react";
import { Link, Router, useHistory } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';

const Navbar = () => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)
    const history = useHistory();
    const logout = async () => {
        localStorage.removeItem('authenticated');
        dispatch({type: 'LOGOUT'});
        history.push('/')
    }

    return(
        <nav className="flex">
            <div className="flex gap-x-6 ml-4 p-2 text-yellow-500 font-semibold" >
                    {auth ?  null : <Link to="/">Home</Link>} 
                    {auth ? null : <Link to="/order">Order</Link>}
            </div>
            <div className="flex gap-x-6 mr-4 p-2 w-full justify-end text-yellow-500 font-semibold">
                {auth ? <p onClick={logout} style={{cursor: 'pointer'}}>Logout</p> : <Link to="/login">Login</Link>}
                {auth ? <Link to='/admin'>Admin</Link> : null}
            </div>
        </nav>

    )
}

export default Navbar;