import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';
import'./Ancle.css';
const Ancle = ({house}) => {
    const [many,setMany]=useContext(MoneyContext);
    return (
        <div>
            <h2>Ancle</h2>
            <p><small>House:{house}</small></p>
            <p><small>Taka:{many}</small></p>
            <button>...{setMany}</button>
        </div>
    );
};

export default Ancle;