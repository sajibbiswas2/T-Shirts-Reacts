import React from 'react';
import './Cart.css'

const Cart = ({ cart, handelRemoveItem }) => {

  let message;
  if (cart.length === 0) {
    message = <p>please buy at least one item</p>
  }
  else if (cart.length == 1) {
    message = <div>
      <h3> amr jono shopping koro </h3>
      <p>tomr jono shopping koro</p>

    </div>
  }
  else {
    message = <p>thanks for bynaw</p>
  }

  return (
    <div>
      <h3 className={cart.length === 2 ? `orange` : 'purple'}>this is cart container</h3>
      <h5 className={`bold ${cart.length == 2 ? 'blue':'yellow'}`}>order quantity:{cart.length}</h5>
      {
        cart.map(tshirt => <p
          key={tshirt._id}
        >
          {tshirt.name}
          <button onClick={() => handelRemoveItem(tshirt)}>x</button>

        </p>)
      }
      {
        message
      }
      {cart.length === 3 ? <p>Tin jon ke gift diba?</p> : <p>kino kino</p>}

      <p>and oparato</p>
      {cart.length === 2 && <h2>Double items</h2>}
    </div>
  );
};

export default Cart;
/*
conditional Rendering
1.use element in a variable  and  then use if-else to set value;
2.ternary opration condition?true :false
3.&& operator (if condetionis false ,i want a display something)

*/