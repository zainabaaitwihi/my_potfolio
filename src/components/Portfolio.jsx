import React, { useState } from 'react'
import Title from './Title'
import './Portfolios.scss'
import Categories from './Categories'
import portfolios from './allPortfolios'
import MenuItems from './MenuItems'

const allCategories=["All", ...new Set(portfolios.map((item)=>item.category))];

export default function () {
  const[categories,setCategories]=useState(allCategories);
  const[menuItems,setMenuItems]=useState(portfolios);
 
  const filter=(category)=>{
    if(category==="All"){
       setMenuItems(portfolios)
       return;
    }
     const filteredData=portfolios.filter((item)=>{
       return item.category===category;
     })
     setMenuItems(filteredData);
  }
  return (
    <div className="portfolioPage">
          <div className="title">
          <Title title={'Portfolio'} span={'Portfolio'}/>
          </div>
          <div className="portfolio-sect">
              <Categories categories={categories} filter={filter}/>
              <MenuItems menuItems={menuItems}/>
          </div>
    </div>
  )
}
