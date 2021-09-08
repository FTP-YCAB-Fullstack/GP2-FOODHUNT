import React from "react";
import { Link, Router } from "react-router-dom";

const Navbar = () => {
    const logout = async () => {
        localStorage.removeItem('authenticated');
        window.location.reload();
    }

    return(
        <nav className="flex">
            <div className="flex gap-x-6 ml-4 p-2 text-yellow-500 font-semibold" >
                    <Link to="/">Home</Link>
                    <Link to="/order">Order</Link>
            </div>
            <div className="flex gap-x-6 mr-4 p-2 w-full justify-end text-yellow-500 font-semibold">
                {localStorage.getItem('authenticated') ? <p onClick={logout} style={{cursor: 'pointer'}}>Logout</p> : <Link to="/login">Login</Link>}
                {localStorage.getItem('authenticated') ? <Link to='/admin'>Admin</Link> : null}
            </div>
        </nav>

    )
}

export default Navbar;