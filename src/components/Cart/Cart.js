import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Cart.css';

const Cart = (props) => {

    const {cart, people} = props;
    
    const totalReducer = (previous, person) => previous + person.salary;
    const total = cart.reduce(totalReducer, 0);

    // console.log(people.devName);

    return (
        <div className="cart-container">
            <h5>Hired Summary</h5>
            <hr />
            <h3>Hired Person: {props.cart.length}</h3>
            <h3>Total Cost: ${total}</h3>
            <br />
            <h4 className="devo">Hired Developers 
            <hr />
                {
                   people.map((per) =>
                     <div  className="developer-cart d-flex align-items-center mb-2">
                         <div>
                             <img className="rounded-circle" src={per.devImg} alt="" width="52"
                              height="52"/>
                         </div>
                         <div>
                             {per.devName}
                         </div>
                         <FontAwesomeIcon icon={faCaretRight} />
                     </div>
                   )
                }

            </h4>
        </div>
    );
};

export default Cart;