import React from 'react'
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom'
import swal from 'sweetalert';

const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch()
    const [credential, setCredential] = React.useState({});

    const loginHandler = e => {
        const {value, name} = e.target;
        setCredential({
            ...credential,
            [name] : value
        });
    }

    const submitHandler = e => {
        e.preventDefault();

        if (
            credential.username === 'admin' &&
            credential.password === 'admin123'
        ) {
            dispatch({type: 'LOGIN'});
            localStorage.setItem('authenticated', true);
            history.push('/admin')
        } else {
            swal({
                title: "Login Invalid",
                text: "Masukan username dan password yang benar",
                icon: "error",
                });
        }

        
    }

    return (
        <div className="flex items-center h-screen">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-3/4 mx-auto sm:max-w-xl" onSubmit={submitHandler}>
            <div className="m-4">
                <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
                >
                Username
                </label>
                <input
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                type="text" onChange={loginHandler} placeholder="Username" name="username"
                required
                autoComplete="off"
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
                name="password" onChange={loginHandler}
                type="password"
                required
                autoComplete="off"
                placeholder="Password"
                />
            </div>
            <div className="py-2 px-4 w-full ">
                <button type="submit" className="flex justify-center mx-auto text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded-lg text-lg w-full">Login</button>
            </div>
            </form>
        </div>
    )
}

export default Login;