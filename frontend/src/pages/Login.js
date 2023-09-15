import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your login logic here
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
            <div className="bg-gray-100 shadow-lg rounded-md mb-10 p-8 h-2/3 w-2/6">
                <h2 className="text-4xl font-semibold mb-10">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        {/* <label htmlFor="username" className="block text-gray-700 font-medium mb-2">
                            Username
                        </label> */}
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={handleUsernameChange}
                            className="w-full px-4 py-2 border text-lg rounded-md focus:outline-none focus:border-primary"
                            placeholder="Enter your username"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        {/* <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                            Password
                        </label> */}
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={handlePasswordChange}
                            className="w-full px-4 py-2 border rounded-md text-lg mb-10 focus:outline-none focus:border-primary"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="w-full bg-primary text-white rounded-md px-4 py-2 text-2xl hover:bg-opacity-80">
                            Log In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
