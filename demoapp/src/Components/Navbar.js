import React,{useState} from 'react'
import { Link } from 'react-router-dom';
export default function Navbar(props) {

  // const [swchBtn,swchBtnSet]=useState('light');
  
  // const switchBtn=()=>{
   
  //   if(swchBtn ==='light')
  //   {
  //     console.log("Dark mode enabled");
  //     swchBtnSet('dark');
  //   }
  //   else{
  //     console.log("light mode enabled");
  //     swchBtnSet('light');
  //   }
  // }
  return (
    <div>
     <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
      <div className="container-fluid">
      <Link className="navbar-brand" to="/">Navbar</Link>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
     </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className='nav-link' to="/">Home</Link>
        </li>
        <li className="nav-item">
         
        <Link className='nav-link' to="/about">About</Link>
         
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
       
      </ul>
      <div className={`form-check form-switch text-${props.mode ==='light'?'dark':'light'}`}>
          <input className="form-check-input" onClick={props.toogleMode} type="checkbox" role="switch" id="flexSwitchCheckChecked" />
          <label className="form-check-label" for="flexSwitchCheckChecked">Enable Dark Mode </label>
      </div>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-primary" type="submit">Search</button>
      </form> */}
    </div>
      </div>
    </nav>
    </div>
  )
}
