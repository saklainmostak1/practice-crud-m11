import React, {  useState } from 'react';
import Header from '../Header/Header';

const AddUsers = () => {
    const [users, setUsers ] = useState({})
    const handleAddUser = event =>{
        event.preventDefault()
        console.log(users);

    }
    const handleInputBlur = event =>{
        const value = event.target.value
        const field = event.target.name
        const newUser = {...users}
        newUser[field] = value
        setUsers(newUser)
        console.log(newUser);
    }
    return (
        <div>
            <Header></Header>
            <h2>Add users</h2>
            <form onSubmit={handleAddUser}>
                <input onBlur={handleInputBlur} type="text" name='name' placeholder='name' required/>
                <br />
                <input onBlur={handleInputBlur} type="text" name='adress' placeholder='adress' required/>
                <br />
                <input onBlur={handleInputBlur} type="email" name='email' placeholder='email' required/>
                <br />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default AddUsers;