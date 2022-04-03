import React from 'react'

export default function ({icon, text, title}) {
  return (
    <div className="ContactItem">
        <div className="contact">
           <img src={icon} width="70px" height="70px"/>
          <div className="right-items">
           <h6>{title}</h6>
           <p>{text}</p>
            </div> 
        </div>
      
    </div>
  )
}
