import React, { useContext } from 'react';
import { RingContext } from './../Grandpa/Grandpa';

const Specile = ()=> {
    const [house,setHouse]=useContext(RingContext)
    return (
        <div>
            <h2>specile</h2>
            <p>gift:{house}</p>
            <button onClick={()=>setHouse(house+1)}>Increase</button>
        </div>
    );
};

export default Specile;