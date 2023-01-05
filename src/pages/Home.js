import React from 'react'
import Announcement from '../Components/Announcement'
import Categories from '../Components/Categories'
import Categories1 from '../Components/Categories1'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import Newsletter from '../Components/Newsletter'
import Products from '../Components/Products'

import Slider from '../Components/Slider'


function Home() {
  return (
    <div>

               <Announcement/>
               <Navbar/>
               <Slider/>
               
               <h1 style={{display:'flex',justifyContent:'center',alignItems:'center'}}>Categories</h1>
              
               
               <Categories/>
               <Categories1/>
               <h1 style={{display:'flex',justifyContent:'center',alignItems:'center'}}>Products</h1>
               <Products/>
               <Newsletter/>
               <Footer/>
              
    </div>
    
  )
}

export default Home