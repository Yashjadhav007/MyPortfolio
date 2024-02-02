import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
 
  return (
    <>
      {/* <nav classNameName="navbar navbar-expand-lg bg-dark">
        <a classNameName="logoNav navbar-brand text-light ms-4" href="#">
          YashJadhav
        </a>
        <button
          classNameName="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span classNameName="navbar-toggler-icon"></span>
        </button>
        <div classNameName="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div classNameName="navbar-nav ">
          <Link to={"/"} >Home</Link>
            <a classNameName="homeNav nav-item nav-link active text-light " href="#">
              Home <span classNameName="sr-only">(current)</span>
            </a>
            <a classNameName="AboutNav nav-item nav-link text-light" href="#">
             About
            </a>
            
            <a classNameName="proNav nav-item nav-link text-light" href="#">
              Porfolio
            </a>
            <a classNameName="ContNav nav-item nav-link text-light" href="#">
              Contact
            </a>
           
          </div>
        </div>
      </nav> */}

      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand ms-4 ps-4" href="#" id="LogoName">
          YashJadhav
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link ms-4 ps-4" href="#">
                {" "}
                <Link to={"/"}>Home</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ms-2" href="#">
                {" "}
                <Link to={"/about"}>About</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ms-2" href="#">
                {" "}
                <Link to={"/mywork"}>Mywork</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ms-2"  href="#">
                <Link to={"/contact"}>Contact</Link>
              </a>
            </li>
          
          </ul>
        </div>
      </nav>

      
    </>
  );
};

export default Header;
