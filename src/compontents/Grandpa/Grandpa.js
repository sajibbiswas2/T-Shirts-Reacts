import React, { createContext, useState } from 'react';
import Ancle from '../Ancle/Ancle';
import Ante from '../Ante/Ante';
import Father from '../Father/Father';
import './Grandpa.css'

export const RingContext = createContext('Matir-Ring');
export const MoneyContext = createContext(5555);

const Grandpa = () => {
    //const house = 7;
    const [house, setHouse] = useState(1);
    const [many, setMany] = useState(5555);
    //const ring = 'Gold'
    return (
        <RingContext.Provider value={[house, setHouse]}>
            <MoneyContext.Provider
 value={[many,setMany]}>
                <div className='grandpa'>
                    <h3>This is GrandPa</h3>
                    <section className='flex'>
                        <Father house={house}> </Father>
                        <Ancle house={house}></Ancle>
                        <Ante house={house}>  </Ante>
                    </section>
                </div>
            </MoneyContext.Provider>
        </RingContext.Provider>
    );
};

export default Grandpa;