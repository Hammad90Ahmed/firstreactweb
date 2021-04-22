import React from 'react';
import {NavLink} from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';

const NavBar = () => {
    return(
        <>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                <nav className="navbar navbar-expand-lg navbar-light">
                
                <img src="https://sandboxgo.com/project/fresh_breath/wp-content/uploads/2021/02/fresh-logo.png" alt="logo" />
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav main-ul ml-auto">
      <li className="nav-item ">
       <NavLink to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="nav-item">
       <NavLink to="/service">Service</NavLink> 
      </li>
      <li className="nav-item">
       <NavLink to="/project">Project</NavLink>
      </li>
      <li className="nav-item">
      <NavLink to="/contact">Contact</NavLink>
      </li>
      {/* <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li> */}
      {/* <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li> */}
    </ul>
    {/* <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
</nav>
       
                </div>
            </div>
        </div>      
        </>
    );
}

export default NavBar; 



{/* <div className="main-logo">
<a href="#0">
<img src="https://sandboxgo.com/project/fresh_breath/wp-content/uploads/2021/02/fresh-logo.png" alt="logo" />
</a>
</div>
<div className="nav-menu">
<NavLink to="/">Home</NavLink>
<NavLink to="/about">About</NavLink>
<NavLink to="/service">Service</NavLink>
<NavLink to="/project">Project</NavLink>
<NavLink to="/contact">Contact</NavLink>
</div> */}