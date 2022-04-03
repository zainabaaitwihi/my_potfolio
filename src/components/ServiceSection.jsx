import React from 'react'
import './ServiceSection.scss'
export default function ({design,title,text}) {
  return (
    <div className="ServiceSection">
      <div className="service">
        <div className="service-content">
           <img src={design} width="100%"/>
           <h5 className="service-title"> {title}</h5>
           <p className="service-text"> {text}</p>
     
        </div>
      </div>
    </div>
  )
}
