import React from 'react';
import Friend from '../Friend/Friend';

const Cousin = ({house}) => {
    return (
        <div>
            <h2>Cousin</h2>
               <p><small>Houses:{house}</small></p>
               <section>
                <Friend></Friend>
               </section>
        </div>
    );
};

export default Cousin;