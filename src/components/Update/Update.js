import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';

const Update = () => {
    const storedUser = useLoaderData()
    console.log(storedUser)
    const [users, setUsers] = useState(storedUser)
    const handleUpdateUser = event => {
        event.preventDefault()
        console.log(users)
   }
    const handleInputChange = event => {
        const value = event.target.value
        const field = event.target.name
        const newUser = { ...users }
        newUser[field] = value
        setUsers(newUser)
        console.log(newUser);
    }
    return (
        <div>
            <Header></Header>
            <h2>Update User: {storedUser.name} </h2>
            <form onSubmit={handleUpdateUser}>
                <input defaultValue={storedUser.name}  onChange={handleInputChange} type="text" name='name' placeholder='name' required />
                <br />
                <input defaultValue={storedUser.adress} onChange={handleInputChange} type="text" name='adress' placeholder='adress' required />
                <br />
                <input defaultValue={storedUser.email} onChange={handleInputChange} type="email" name='email' placeholder='email' required />
                <br />
                <button type="submit">Update User</button>
            </form>

        </div>
    );
};

export default Update;