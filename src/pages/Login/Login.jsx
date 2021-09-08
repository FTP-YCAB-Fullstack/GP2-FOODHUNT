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
        <form onSubmit={submitHandler}>
            <div className="min-h-screen flex items-center">
                <div className="container mx-auto max-w-md shadow-md hover:shadow-lg transition duration-300">
                    <div className="py-12 p-10 bg-white rounded-xl">
                    <div className="mb-6">
                        <label className="mr-4 text-gray-700 font-bold inline-block mb-2" >Username</label>
                        <input type="text" className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-yellow-500 rounded" placeholder="Username" onChange={loginHandler} name="username"/>
                    </div>
                    <div className="">
                        <label className="mr-4 text-gray-700 font-bold inline-block mb-2" >Password</label>
                        <input type="password" className="border bg-gray-100 py-2 px-4 w-96 outline-none focus:ring-2 focus:ring-yellow-500 rounded" placeholder="Password" onChange={loginHandler} name="password"/>
                    </div>
                    <button className="w-full mt-6 text-indigo-50 font-bold bg-yellow-500 py-3 rounded-md hover:bg-indigo-500 transition duration-300" type="submit">LOGIN</button>
                    </div>
                </div>
            </div>
            {/* <input onChange={loginHandler} name="username" type="text" placeholder="Username"/>
            <input onChange={loginHandler} name="password" type="password" placeholder="Password"/>
            <button type="submit">Login</button> */}
        </form>
    )
}

export default Login;