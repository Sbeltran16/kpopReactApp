import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ".//BlackPinkPage.css"
import BlackPinkCards from '../../components/BlackPinkCards/BlackPinkCards'


export default function BlackPinkPage() {
  return (
    <>
    <Navbar />
    <h1 className="bpHeader">BlackPink</h1>
    <img  className='bpImg' alt="" src="https://1.bp.blogspot.com/-emxilf2PCn4/X3cFCR3FDMI/AAAAAAAADXE/K5UEnKC1CscFcDjnD5gP5aspzYIP07xWgCNcBGAsYHQ/w919/blackpink-lovesick-girls-uhdpaper.com-4K-5.2958-wp.thumbnail.jpg"/>
    
    <BlackPinkCards />
    </>
   
  )
}