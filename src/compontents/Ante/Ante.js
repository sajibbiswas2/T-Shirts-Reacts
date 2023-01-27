import React from 'react';
import Cousin from '../Cousin/Cousin';
import'./Ante.css';
const Ante = ({house}) => {
    return (
        <div>
           <h1>ANte</h1> 
           <p><small>House:{house}</small></p>
           <section className='flex'>
              <Cousin house={house}></Cousin>
              <Cousin house={house}></Cousin>
           </section>
        </div>
    );
};

export default Ante;