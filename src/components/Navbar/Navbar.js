import React from 'react'
import { Link } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ".//Navbar.css"

export default function Navbar() {
  return (
    <>
    <nav className="navbar">
			<div className="logo">
				<FavoriteIcon />
				<div className="links">
					<Link to="/">Home</Link>
					<Link to="/BTS"> BTS </Link>
					<Link to="/BlackPink"> BlackPink</Link>
					<Link to="Twice"> Twice</Link>
					<Link to="Aespa"> Aespa</Link>
					<Link to="StrayKids"> Stray Kids</Link>
				</div>
			</div>
    </nav>
    </>
  )
}
