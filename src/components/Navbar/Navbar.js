import React from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, DropdownItem, DropdownMenu, MenuItem } from 'semantic-ui-react'
import ".//Navbar.css"

export default function Navbar() {
  return (
    <>
    <nav className="navbar">
			<div className="logo">
				<Link to="/">KPopped</Link>
				<div className="links">
					<Dropdown text="Boy Groups" pointing className="dropdown">
						<DropdownMenu>
						<DropdownItem><Link to="/BTS">BTS</Link></DropdownItem>
						<DropdownItem><Link to="/StrayKids">Stray Kids</Link></DropdownItem>
						</DropdownMenu>
					</Dropdown>
					<Dropdown text="Girl Groups" pointing className="dropdown">
						<DropdownMenu>
						<DropdownItem><Link to="/BlackPink">BlackPink</Link></DropdownItem>
						<DropdownItem><Link to="/Twice">Twice</Link></DropdownItem>
						<DropdownItem><Link to="/Aespa">Aespa</Link></DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</div>
			</div>
    </nav>
    </>
  )
}
