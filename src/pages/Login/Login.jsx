import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom'
import axios from 'axios';
import { setUserSession } from '../../routes/Common';


// const Login = () => {
//     const history = useHistory();
//     const dispatch = useDispatch()
//     const [credential, setCredential] = React.useState({});

//     const loginHandler = e => {
//         const {value, name} = e.target;
//         setCredential({
//             ...credential,
//             [name] : value
//         });
//     }

//     const submitHandler = e => {
//         e.preventDefault();

//         if (
//             credential.username === 'admin' &&
//             credential.password === 'admin123'
//         ) {
//             dispatch({type: 'LOGIN'});
//             localStorage.setItem('authenticated', true);
//         } else {
//             alert('Login gagal');
//         }

//         if (localStorage.getItem('authenticated')) {
//             // history.push('/admin');
//             window.location.href = '/admin'
//         }
//     }

//     return (
//         <form onSubmit={submitHandler}>
//             <input onChange={loginHandler} name="username" type="text" placeholder="Username"/>
//             <input onChange={loginHandler} name="password" type="password" placeholder="Password"/>
//             <button type="submit">Login</button>
//         </form>
//     )
// }


function Login(props) {
    const [loading, setLoading] = useState(false);
    const username = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);
  
    // handle button click of login form
    const handleLogin = () => {
      setError(null);
      setLoading(true);
    //   axios.post('http://secure-auth-api.herokuapp.com/users/signin', { username: username.value, password: password.value }).then(response => {
        axios.post('http://localhost:4000/users/signin', { username: username.value, password: password.value }).then(response => {
        setLoading(false);
        setUserSession(response.data.token, response.data.user);
        props.history.push('/admin');
      }).catch(error => {
        setLoading(false);
        if (error.response.status === 401) setError(error.response.data.message);
        else setError("Something went wrong. Please try again later.");
      });
    }

  
    return (
        <div>

        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md mx-auto sm:max-w-xl">
          <div className="m-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              type="email" {...username} placeholder="Userame"
            />
          </div>
          <div className="m-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
              id="password" {...password}
              type="password"
            />
          </div>
          <div className="p-2 w-full">
            {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
            <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" /><br />
                
          </div>
        </form>

        {/* Login<br /><br />
        <div>
          Username<br />
          <input type="text" {...username} autoComplete="new-password" />
        </div>
        <div style={{ marginTop: 10 }}>
          Password<br />
          <input type="password" {...password} autoComplete="new-password" />
        </div>
        {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
        <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br /> */}
      </div>
    );
  }
  
  const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);
  
    const handleChange = e => {
      setValue(e.target.value);
    }
    return {
      value,
      onChange: handleChange
    }
  }

export default Login;