import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import logo from '../assets/logo.png';
import axios from "axios";

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate(); 

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            username: username,
            password: password,
        };

        axios
            .post("http://localhost:5000/api/v1/login", userData)
            .then((res) => {
                if (res.data.success) {
                    navigate('/dashboard'); 
                } else {
                    setErrorMessage('Wrong username or password');
                }
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <div className='h-screen bg-gradient-to-r from-cyan-500 to-blue-500'>
            <div className="w-full ">
                <Link to="/"> 
                    <img src={logo} alt="logo.png" className="w-fit h-14 md:w-fit md:h-14 ml-4 pt-4" />
                </Link>
            </div>
            <div className="flex flex-col items-center m-4 mt-24 justify-center">
                <div className="bg-gray-100 shadow-lg rounded-md p-8 w-full m-4 max-w-md">
                    <h2 className="text-2xl md:text-4xl font-semibold mb-6 md:mb-10 text-center">Login</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} className="w-full px-4 py-2 border text-lg hover:border-primary rounded-md focus:outline-none focus:border-primary" placeholder="Enter your username" required />
                        </div>
                        <div className="mb-4">
                            <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} className="w-full px-4 py-2 border rounded-md text-lg mb-6 hover:border-primary focus:outline-none focus:border-primary" placeholder="Enter your password" required />
                        </div>
                        <div className="text-center">
                            <button type="submit" className="w-full bg-primary text-white rounded-md px-4 py-2 text-lg md:text-xl hover:bg-opacity-80">
                                Log In
                            </button>
                            {errorMessage && (
                                <p className="text-red-500 mt-2">{errorMessage}</p>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
