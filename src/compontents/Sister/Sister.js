import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = ({ house }) => {
    const [many, setMany] = useContext(MoneyContext);
    return (
        <div>
            <h3>Sister</h3>
            <p><small>House:{house}</small></p>
            <p><small>many:{many}</small></p>
            <button onClick={() => setMany(many + 1000)}>add 1000</button>
        </div>
    );
};

export default Sister;