import React from "react";
import {NavLink} from "react-router-dom";


const Navbar=()=>{

  
  return(
    <>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary" >
  <div className="container-fluid">
    <NavLink to="/"><img src="./images/icon.png" alt="" className="logo"/></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <NavLink to="/"><li class="nav-item nav-link" >
        Home
        </li></NavLink>
        <NavLink to="/About"><li className="nav-item nav-link" >
        About
        </li></NavLink>
        <NavLink to="/Menu"><li className="nav-item nav-link" >
        Menu
        </li></NavLink>
        <NavLink to="/Contact"><li className="nav-item nav-link" >
        Contact
        </li></NavLink>
        <NavLink to="/Services"><li className="nav-item nav-link" >
        Services
        </li></NavLink>
       
      </ul>
      <form className="d-flex" >
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  </>
  )

}
export default Navbar;