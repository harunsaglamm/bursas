import React from 'react'
import { Link, NavLink } from 'react-router-dom'



function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" >
  <div  className="container">
    <a  className="navbar-brand" href="#" > YEŞİL BURSA </a>
    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavaLTmARKUP" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span  className="navbar-toggler-icon"></span>
    </button>
    <div  className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <ul  className="navbar-nav">
         <NavLink className="nav-link" to="/">Fotoğraflar</NavLink>
         <NavLink className="nav-link" to="/mosque">Camii ve Türbeler</NavLink>
         <NavLink className="nav-link" to="/wifi">WİFİ Noktaları</NavLink>
      </ul>
      
    </div>
  </div>
</nav>
  )
}

export default Navbar