import React, { useContext } from 'react';
import { RingContext } from './../Grandpa/Grandpa';

const Friend = () => {
    const [house,setHouse] =useContext(RingContext)
    return (
        <div>
            <h2>Friend</h2>
            <p><small>ring:{house}</small></p>
            <button onClick={()=>setHouse(house-1)}>decrase</button>
        </div>
    );
};

export default Friend;