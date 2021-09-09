import React from 'react'
import { Route, Redirect } from 'react-router-dom';

const PublicRoutes = (props) => {
    const auth = localStorage.getItem('authenticated');

    return (
        !auth ? <Route {...props} /> : <Redirect to='/admin' />
    )
}

export default PublicRoutes;