import React from 'react';
import {useSelector} from 'react-redux'
import {Route, Redirect} from 'react-router-dom'
import { getToken } from './Common';

// const PrivateRoute = props => {
//     const auth = localStorage.getItem('authenticated')
//     return (
//       <Route
//         {...rest}
//         render={(props) => getToken() ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
//       />
//     )
//   }


function PrivateRoute({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) => getToken() ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
      />
    )
  }
export default PrivateRoute;