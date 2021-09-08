import React from 'react';
import {useSelector} from 'react-redux'
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = props => {
    const auth =  useSelector(state => state.auth)
    return (
        auth ? <Route {...props} /> : <Redirect to='/' />
    )
}

export default PrivateRoute;