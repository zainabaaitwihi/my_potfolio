import React from 'react'
import about from './../assets/image3.jpg'
import './ImageSection.scss'
export default function ImageSection() {
  return (
    <div className="imageSection">
       <div className="image">
       <img src={about}/>
       </div>
        <div className="about-info">
            <h4>I'am <span>zainaba ait wihi</span></h4>
            <p>skfhg ierutyi qkgoz  y iryut dsgqd etrou iytre sdkfhdf turetdjk kqlghjd tyyur sljfkl zoeurio sdfdsu</p>
            <div className="about-details">
                    <div className="section-left">
                        <p>full name </p>
                        <p>age </p>
                        <p>adresse </p>
                        <p>languges </p>
                    </div>
                    <div className="section-right">
                        <p>: zainaba ait wihi </p>
                        <p>: 22 ans </p>
                        <p>: Morocco Taroudant </p>
                        <p>: arabe ,francais ,anglias </p> 
                    </div>
                    
            </div>
            <button className="bnt-cv">download cv</button>
        </div>
    </div>
  )
}
