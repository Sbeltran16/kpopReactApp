import React from 'react'
import { Link } from 'react-router-dom'
import ".//Navbar.css"

export default function Navbar() {
  return (
    <>
    <nav className="navbar">
			<div className="logo">
				<Link to="/">KPopped</Link>
				<div className="links">
					<Link to="/BTS"> BTS </Link>
					<Link to="/BlackPink"> BlackPink</Link>
					<Link to="/Twice"> Twice</Link>
					<Link to="/Aespa"> Aespa</Link>
					<Link to="/StrayKids"> Stray Kids</Link>
				</div>
			</div>
    </nav>
    </>
  )
}
