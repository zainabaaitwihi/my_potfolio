import React from 'react'
export default function ({menuItems}){
    
    return (  
    <div className="portfolios">
        
          {
              menuItems.map((item)=>{
              return <div className="menuItems" key={item.id}>
               <div className="data-img">
                   <img src={item.image}/>
                   <ul className="hover-item">
                      <li>
                          <a href={item.link1}>{item.icon1}</a>
                          <a href={item.link2}>{item.icon2}</a>
                      </li>
                      
                   </ul>
               </div>
               <h5>{item.title}</h5>
            </div>
            } )
          
        }

         </div>
    )
  
}
