import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ".//Navbar.css"

export default function Navbar() {
  return (
    <>
    <nav className="navbar">
			<div className="logo">
				<FavoriteIcon />
				<div className="links">
					<a href="/BTS">BTS</a>
					<a href="/Blackpink">BlackPink</a>
					<a href="/Twice">Twice</a>
					<a href="/Aepsa">Aespa</a>
				</div>
			</div>
    </nav>
    </>
  )
}
