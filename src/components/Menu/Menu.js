import React from 'react'
import {Link } from 'react-router-dom'

function Menu() {
  const cortexto ={color : '#a7acb4'}
  return (
    <div>
          {/* Main Sidebar Container */}
<aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}

  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">

      <div className="info">
        <span className="d-block" style={cortexto}>Compra Casa</span>
      </div>
    </div>
    {/* SidebarSearch Form */}

    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">


        <li className="nav-item">
          <Link to="/" className="nav-link">
            <i className="nav-icon fas fa-shopping-cart"></i>
            <p>
              Compras
            </p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/itens" className="nav-link">
            <i className="nav-icon fas fa-list" />
            <p>
              Itens Compra
            </p>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/mensal" className="nav-link">
            <i className="nav-icon far fa-calendar-alt" />
            <p>
              Compras Mês
            </p>
          </Link>
        </li>
 
  
 
      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>
</div>

  )
}

export default Menu
