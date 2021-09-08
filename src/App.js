// import './App.css';
import axios from 'axios';
// import React from 'react';

import {getApi} from './redux/action'
import {useDispatch, useSelector} from 'react-redux'


import AdminPage from './pages/Admin Pages/AdminPage';
import MainPage from './pages/MainPages/MainPage';
import OrderPage from './pages/OrderPages/OrderPage';
import Login from './pages/Login/Login'

import {BrowserRouter as Router, Switch, Route, BrowserRouter} from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import Navbar from './components/Navbar/NavBar'

import React, {useState, useEffect} from 'react';
// import { getToken, removeUserSession, setUserSession } from './Utils/Common';
// import axios from 'axios';
// import PrivateRoute from './Utils/PrivateRoute';
// import { BrowserRouter, Switch } from 'react-router-dom';
import { getToken, removeUserSession, setUserSession } from './routes/Common'; 


function App() {

  const state = useSelector(state => state.data);
  const dispatch = useDispatch();  
  // Memasukkan barang ke state
  React.useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list').then(res => {
      let data = res.data;
      let meals = data.meals;
      meals.forEach(el => dispatch(getApi(el.strCategory)))
    });
  }, [])

  //login with JWT
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const token = getToken();
    if(!token){
      return;
    }

    // axios.get(`http://secure-auth-api.herokuapp.com/verifyToken?token=${token}`).then(response => {
      axios.get(`http://localhost:4000/verifyToken?token=${token}`).then(response => {
      setUserSession(response.data.token, response.data.user);
      setAuthLoading(false);
    }).catch(error => {
      removeUserSession();
      setAuthLoading(false);
    });
  }, []);

  if (authLoading && getToken()) {
    return <div className="content">Checking Authentication</div>
  }

  return (
    <BrowserRouter>
    
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/' component={MainPage}/>
          <Route exact path='/order' component={OrderPage}/>
          <PrivateRoute exact path='/admin' component={AdminPage}/>
        </Switch>
      </Router>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
