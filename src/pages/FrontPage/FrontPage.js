import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ImgCarousel from "../../components/ImgCarousel/ImgSlider";
import { SliderData } from "../../components/ImgCarousel/SliderData";
import ".//FrontPage.css"

export default function FrontPage() {
  return (
    <>
    <Navbar />
    <h1 className='fptitle'>
        Welcome to the KPopped!
    </h1>
    <ImgCarousel slides={SliderData} />
    </>
    )
}
