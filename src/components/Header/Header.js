import { faHSquare, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css';

const Header = () => {

    const SerachIcon = <FontAwesomeIcon icon={faSearch} />

    return (
        <div>

            {/* navbar  */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand ms-5 me-auto d-flex align-items-center" href=" #">
                    <FontAwesomeIcon icon={faHSquare} />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav p-3 mb-3 mb-lg-0 d-flex">
                        <li className="nav-item me-4">
                            <a className="nav-link active" aria-current="page" href="/home">Home</a>
                        </li>
                        <li className="nav-item me-4">
                            <a className="nav-link" href="/Developers">Developers</a>
                        </li>
                        <li className="nav-item me-4">
                            <a className="nav-link" href="/about">About</a>
                        </li>
                        <li className="nav-item me-4">
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* heading tagline  */}
            <div className="Header-container">
                 <h1 className="title-tag text-center  fw-bold pt-5">HiRECT</h1>
             
                 <blockquote className="text-center">Find Your Desired Developer In "HiRECT"</blockquote>

               
                 <div className="search-field d-flex justify-content-center text-center">
                   <div className="search-box input-group mb-5 w-50">
                     <input type="text" className="form-control search-field"
                       placeholder="Search your developer category"/>
                     <button className="btn search-button" type="button">Search {SerachIcon}
                     </button>
                   </div>
                 </div>

                 

                 <article className="important-info mb-3 text-center pt-3">
                        <h3>Your Total Budget $5000</h3>
                        <small className="ms-5">You can only hire 3 developers in one month</small>
                 </article>
            </div>     
        </div>
    );
};

export default Header;