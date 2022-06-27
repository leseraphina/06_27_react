import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'

function Nav(){
  return (
    <header>
      <div>
        <h1>
          <Link to="/">Home</Link>
        </h1>
        <ul className="nav">
          <li>
            <Link to="/list01">Sample01</Link>
            </li>
          <li>
            <Link to="/list02">Sample02</Link>
            </li>
          <li>
            <Link to="/list03">Sample03</Link>
            </li>
        </ul>

      </div>
    </header>
  )
}

export default Nav