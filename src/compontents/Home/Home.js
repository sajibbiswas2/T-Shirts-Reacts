import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import '../Home/Home.css';
import Cart from '../../Cart/Cart';
const Home = () => {
    const tshirts=useLoaderData();
    const [cart,setCart]=useState([])

    const handelAddtoCart=tshirt=>{
        const exists=cart.find(ts=>ts._id===tshirt._id)
        if(exists){
            alert('t-shirt alraeady added')
        }
        else{
            const newCart=[...cart,tshirt]
            setCart(newCart)
        }
       
    }
    const handelRemoveItem=tshirt=>{
        const remaining=cart.filter(ts=>ts._id !==tshirt._id)
        setCart(remaining);
    }
    return (
        <div className='Home-container'>
           <div className="tshirt-container">
           {
                tshirts.map(tshirt =><TShirt
                key={tshirt.id}
                tshirt={tshirt}
                handelAddtoCart={handelAddtoCart}
                ></TShirt>)
            }
           </div>
           <div className="cart-containet">
              <Cart cart={cart}
              handelRemoveItem={handelRemoveItem}
              ></Cart>
           </div>
        </div>
    );
};

export default Home;