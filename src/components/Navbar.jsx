import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <nav className="navbar">
        <Link to="/" className="logo"><h1>FOODIE</h1></Link>
        <ul className="menu">
            <li><Link className="menu-link" to="/">Inicio</Link></li>
            <li><Link className="menu-link" to="/productos">Platillos</Link></li>
            <li><Link className="menu-link" to="/productos/ensaladas">Ensaladas</Link></li>
            <li><Link className="menu-link" to="/productos/mexicano">Platillos Mexicanos</Link></li>
            <li><Link className="menu-link" to="/productos/saludable">Platillos Saludables</Link></li>
            <li><Link className="menu-link" to="/productos/bebidas">Bebidas</Link></li>
            <li><Link className="menu-link" to="/nosotros">Nosotros</Link></li>
            <li><Link className="menu-link" to="/contacto">Contacto</Link></li>
            <li><CartWidget /></li>
        </ul>
    </nav>
  )
}

export default Navbar