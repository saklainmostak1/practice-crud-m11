import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    const users = useLoaderData()
    console.log(users);
    const [displayUsers, setDisplayUsers] = useState(users)
    const handleDelete = user =>{
        const agree = window.confirm(`Are You Sure To Delete: ${user.name} `)
        if(agree){
            fetch(`http://localhost:5000/users/${user._id}`, {
                method: 'DELETE',
            })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if(data.deletedCount > 0){
                    alert('Delete SucessFully')
                    const remaining = displayUsers.filter(usr => usr._id !== user._id)
                    setDisplayUsers(remaining)
                }
            })
            .catch((error) => {
                console.error(error);
            });

        }
        
    }
    return (
        <div>
            <Header></Header>
            <h2>Home</h2>
            {
                displayUsers.map(user => <p
                key={user._id}
                >{user.name} {user.adress} {user.email}
               <Link to={`/update/${user._id}`}>
               <button>
                    update
                </button>
               </Link>
                <button onClick={ () => handleDelete (user)}>X</button>
                </p> )
            }

        </div>
    );
};

export default Home;