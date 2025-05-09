import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


export default function Navbar(props) {
  return (
      
     <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
     <div className="container-fluid">
       <a className={`navbar-brand  text-${props.mode ==='light'?'dark':'light'}`} href="/ ">{props.title}</a>
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
           <li className="nav-item">
             <Link className={`nav-link  text-${props.mode ==='light'?'dark':'light'}`} aria-current="page" to="/ ">Home</Link>
           </li>
           <li className="nav-item">
             <Link className={`nav-link  text-${props.mode ==='light'?'dark':'light'}`}to="/about">About</Link>
           </li>
           </ul>
          <div className={`form-check form-switch me-5 text-${props.mode ==='light'?'dark':'light'}`}>
               <input className="form-check-input" type="checkbox" role="switch" onClick={props.togglemode} id="flexSwitchCheckDefault"/>
                 <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
          </div>
  
        
       </div>
     </div>
   </nav>
       
  )
}

Navbar.propTypes = 
{  
    title: PropTypes.string.isRequired,
     aboutText:PropTypes.string.isRequired, 
}

Navbar.defaultProps = {
    title : 'set title anuj',
    aboutText: 'set of about',
}

