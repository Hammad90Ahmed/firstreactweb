import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import NavBar from './Navbar';
import Home from '../Components/Home';
import About from '../Components/About';
import Service from '../Components/Service';
import Project from '../Components/Project';
import Contact from '../Components/Contact';
import Footer from '../Components/Footer';


const Routing = () => {
    return(
        <>
        <NavBar />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/service" component={Service} />
            <Route exact path="/project" component={Project} />
            <Route exact path="/contact" component={Contact} />
            <Redirect to="/" />
        </Switch>
        <Footer />
        </>
    );
}

export default Routing;