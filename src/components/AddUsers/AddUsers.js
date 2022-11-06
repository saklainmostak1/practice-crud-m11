import React, { useState } from 'react';
import Header from '../Header/Header';

const AddUsers = () => {
    const [users, setUsers] = useState({})
    const handleAddUser = event => {
        event.preventDefault()
        console.log(users);
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(users),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if(data.acknowledged){
                    alert('user added')
                    event.target.reset('')
                }
            })
            .catch((error) => {
                console.error(error);
            });

    }
    const handleInputBlur = event => {
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
            <h2>Add users</h2>
            <form onSubmit={handleAddUser}>
                <input onChange={handleInputBlur} type="text" name='name' placeholder='name' required />
                <br />
                <input onChange={handleInputBlur} type="text" name='adress' placeholder='adress' required />
                <br />
                <input onChange={handleInputBlur} type="email" name='email' placeholder='email' required />
                <br />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default AddUsers;