import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import EachPerson from '../EachPerson/EachPerson';
import Header from '../Header/Header';
import './Developers.css';

const Developers = () => {
   
    const[persons, setPersons] = useState([]);
    const[cart, setCart] = useState([]);
    const[dev, setDev] = useState([]);


    useEffect(()=>{
       fetch('./developers.json')
       .then(res => res.json())
       .then(data => setPersons(data))
    },[]);

    const handleAddToCart = (developer) => {
        // console.log(developer);
        const newCart = [...cart, developer];
        setCart(newCart);
    }
    
    
    const handleDeveloper = (devName, devImg) =>{
        const newDev = [...dev, {devName, devImg}];
        // console.log(newDev);
        setDev(newDev);
    }

    return (
        <div>
            
            <Header></Header>

            <div className="developer-container d-flex">
                <div className="person-container">
                   <article className="container">
                           <div className="row row-cols-1 row-cols-md-3 g-3">
                               {
                                   persons.map(person => <EachPerson
                                    key = {person.key}
                                    person = {person}
                                    handleAddToCart = {handleAddToCart}
                                    handleDeveloper = {handleDeveloper}
                                   ></EachPerson>)
                                }
                            </div>
                    </article>   
               </div>
               <div className="person-cart">
                  <Cart cart={cart} people={dev}></Cart>
               </div>
            </div>
            
        </div>
    );
};

export default Developers;