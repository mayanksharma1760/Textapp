import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import { useState } from 'react'

export default function Navbar(props) {
  var mystyle={ color:props.mode==='light'?'black':'white'}
  return (
    <div >
      <div >
      <nav className={`navbar navbar-expand-lg bg-${props.mode} `}>
  <div className="container-fluid" >
    <Link  style={mystyle} className="navbar-brand" to="/">Sahil gautam TextApp</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link  style={mystyle} className="nav-link active" aria-current="page" to="/">{props.h}</Link>
        </li>
        <li className="nav-item">
          <Link style={mystyle} className="nav-link" to="/about">{props.a}</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <div className="container">
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input mx-1" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label style={mystyle} className="form-check-label" for="flexSwitchCheckDefault"> Darkmode</label>
</div>
    </div>
      </form>
    </div>
  </div>
</nav>
</div>
    </div>
  )
}
Navbar.prototype={h:PropTypes.string,
                a:PropTypes.string  }
Navbar.defaultProps={h:"hehe" , a:"aboutall"}