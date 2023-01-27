import React from 'react';
import Specile from '../Specile/Specile';

const Myself = ({house}) => {
    return (
        <div>
            <h3>Myself</h3>
            <p><small>House:{house}</small></p>
            <section>
                <Specile ></Specile>
            </section>
        </div>
    );
};

export default Myself;