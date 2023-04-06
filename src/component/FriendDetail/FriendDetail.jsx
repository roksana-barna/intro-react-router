import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend =useLoaderData();
    console.log(friend)
    return (
        <div>
           <h2>Everything about friend Detail is here</h2> 
           <p>{friend.phone}</p>
           <p>{friend.name}</p>
        </div>
    );
};

export default FriendDetail;