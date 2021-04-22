import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Homesec from './Homesec';

const Home = () => {
    return(
        <>    
        <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                <div className="row inner-row">
                
                <div className="col-md-6 pt-5 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <h1>Hello and welcome to <br></br><strong>Home page</strong></h1>
                    <h3 className="my-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
                
                <div className="mt-3">
                    <NavLink to="/" className="btn-get-started">Click me</NavLink>
                </div>
                </div>
                <div className="col-md-6 pt-5 order-1 order-lg-2 banner-img">
                <img className="img-fluid" src="https://assets.justinmind.com/wp-content/uploads/2020/04/animation-apps-mobile-desktop.png" alt="banner-image" />

                </div>
                </div>
                </div>
                </div>
                </div>
                </section>
               
       
        </>
    );
}

export default Home;