// import './App.css';
import axios from 'axios';
import React from 'react';

import {getApi} from './redux/action'
import {useDispatch, useSelector} from 'react-redux'


import AdminPage from './pages/Admin Pages/AdminPage';
import MainPage from './pages/MainPages/MainPage';
import OrderPage from './pages/OrderPages/OrderPage';
import Login from './pages/Login/Login'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import PrivateRoute from './routes/PrivateRoute';
import Navbar from './components/Navbar/NavBar'

function App() {
  const auth = useSelector(state => state.auth);
  const state = useSelector(state => state.data);
  const dispatch = useDispatch();  
  // Memasukkan barang ke state
  React.useEffect(() => {
    axios.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list').then(res => {
      let data = res.data;
      let meals = data.meals;
      meals.forEach(el => dispatch(getApi(el.strCategory)))
    });
  }, []);

  React.useEffect(() => {
    if (localStorage.getItem('authenticated')) {
      dispatch({type: 'LOGIN'});
    }
  }, [])

  return (
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
  );
}

export default App;
