import React from 'react';
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = props => {
    const authStorage = localStorage.getItem('authenticated')
    return (
        authStorage ? <Route {...props} /> : <Redirect to='/' />
    )
}

export default PrivateRoute;