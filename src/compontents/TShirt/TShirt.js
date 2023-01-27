import React from 'react';
import'./TShirt.css'
const TShirt = ({tshirt,handelAddtoCart}) => {
     const {picture,name,price}=tshirt;
    return (

      <div className='tshirt-s'>
           <img src={picture} alt="" /> 
          <p>{name}</p>
           <p><small>price:{price}</small></p>
           <button onClick={()=>handelAddtoCart(tshirt)}>by naw</button>

      </div>

    );
};

export default TShirt;