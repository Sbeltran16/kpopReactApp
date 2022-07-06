import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ".//BtsPage.css"
import BtsCards from '../../components/BtsCards/btsCards'


export default function BtsPage() {
  return (
    <>
    <Navbar />
    <h1 className="btsHeader">BTS</h1>
    <img  className='btsImg' alt="" src="https://images.hindustantimes.com/img/2022/05/27/1600x900/bts-proof-album_1653669893020_1653669933780.jfif"/>
    
    <BtsCards />
    </>
   
  )
}
