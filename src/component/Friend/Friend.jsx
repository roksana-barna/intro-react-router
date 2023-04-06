import React from 'react';
import './Friend.css';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    console.log(friend);
    const {email,name,id,phone}=friend;
    return (
        <div className='friend'>
            <h3>{name}</h3>
            {/* <p>{id}</p> */}
            <p>{phone}</p>
            <p>{email}</p>
            <p><Link to= {`/friend/${id}`}>Show me in Details</Link></p>
            
        </div>
    );
};

export default Friend;