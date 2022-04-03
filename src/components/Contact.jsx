import React from 'react'
import image1 from './../assets/phone.png'
import image2 from './../assets/email.png'
import image3 from './../assets/localisation.png'
import ContactItem from './ContactItem'
import Title from'./Title'
import './Contact.scss'
export default function () {
  return (
    <>
     <div className="contact-title">
     <Title title={'Contact me'} span={'Contact me'}/>
     </div>
    
    <div className="ContactPage">
        <div className="map-sect">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27507.958445800108!2d-8.894419801810006!3d30.478744316060702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sma!4v1648150472426!5m2!1sfr!2sma" width="600" height="450" style={{border:0}}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    <div className="ContactSection">
        <ContactItem icon={image1} text="0628589098" title=" phone"/>
        <ContactItem icon={image2} text="aitwihizainaba@gmail.com" title="e-mail"/>
        <ContactItem icon={image3} text="taroudant Morocco" title=" adresse"/>
    </div>
   </div>
    </>
    
  )
}
