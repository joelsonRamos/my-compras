import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
  return (
<div>
  {/* Navbar */}
  <nav className="main-header navbar navbar-expand navbar-white navbar-light">
    {/* Left navbar links */}
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link to="/" className="nav-link" data-widget="pushmenu"  role="button"><i className="fas fa-bars" /></Link>
      </li>

    </ul>
    {/* Right navbar links */}
    <ul className="navbar-nav ml-auto">

    </ul>
  </nav>
  {/* /.navbar */}
</div>

  )
}





