import React from 'react'
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom'

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
        } else {
            alert('Login gagal');
            return 
        }

        history.push('/admin')
    }

    return (
        <div>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md mx-auto sm:max-w-xl" onSubmit={submitHandler}>
            <div className="m-4">
                <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
                >
                Username
                </label>
                <input
                className="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
                type="text" onChange={loginHandler} placeholder="Userame" name="username"
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
                />
            </div>
            <div className="p-2 w-full">
                <button type="submit" className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button>
            </div>
            </form>
        </div>
    )
}

export default Login;