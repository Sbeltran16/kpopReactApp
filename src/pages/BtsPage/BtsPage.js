import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ".//BtsPage.css"
import BtsCards from '../../components/BtsCards/btsCards'


export default function BtsPage() {
  return (
    <>
    <Navbar />
    <h1 className="btsHeader">BTS</h1>
    <img className='btsImg' alt="" src="https://www.allkpop.com/upload/2022/04/content/201224/1650471867-untitled-1.jpg"/>
    
    <BtsCards />
    </>
   
  )
}
