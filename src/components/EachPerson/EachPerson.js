import {
    faFacebook, faGithub, faTwitter
} from '@fortawesome/free-brands-svg-icons';
import {
    faHSquare
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './EachPerson.css';

const EachPerson = (props) => {

    const {name, email, img, devName, salary, Age} = props.person;

    const hireIcon = <FontAwesomeIcon icon={faHSquare} />

    return (
        <div>
 
            {/* full card of developer */}
            <div className="col">
                <div className="person-card card d-flex flex-column align-items-center h-100 p-5 border-1 shadow">
                    <img className="rounded-circle mb-4" src={img} alt="" width="140"
                        height="140" />
                    <h4 className="name">{name}</h4>
                    <h5>{email}</h5>
                    <p className="mb-3 text-center">{devName}</p>
                    <p className="mb-4">Hire Cost: $<span>{salary}</span></p>
                    <p className="text-dark">Age: <span>{Age}</span></p>

                    {/* buttons  */}
                    <div className="d-flex">
                         <button onClick={
                             () => {
                                 props.handleAddToCart(props.person);
                                 props.handleDeveloper(props.person.name, props.person.img);
                             }
                             } type="button" className="btn button-cart me-2">{hireIcon} Hire Now!!</button>
                         <button type="button" className="btn button-cart">Details</button>
                    </div>
                   
                    {/* all icons  */}
                    <div className="d-flex mt-3 all-icon">
                        <a href="/facebook"> <FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="/twitter"> <FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="/github"> <FontAwesomeIcon icon={faGithub} /></a>
                    </div>
                </div>
             </div>
        </div>
    );
};

export default EachPerson;