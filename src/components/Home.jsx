import React from 'react'
import './Home.scss'
import {FaLinkedinIn,FaFacebook} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import { Link } from 'react-router-dom'
export default function() {
  return (
    <div className="home">
        <header className="hero">
            <h1 className="hero-text">
                 hi, I am <span>zainaba ait wihi</span> 
            </h1>
            <p className="text">
                zainaba ait wihi devlopper colum tefgt dhgdyqs jdghsjf fkjgh djhsfg utyr slkdjhfj iezrutyu ezpou wcc sdqsf qsdqsd sqddsf sffzere rtry uiyi xbvn fjghfjkdgh jfgdf urtyr dfhdjk jklqfhf pozudj pziwf utye skhfjuer ietydfjh
            </p>
            <div className="icons">
            <FaLinkedinIn className="icon li"/>
            <FaFacebook className="icon fb"/> 
            <BsGithub className="icon gt"/>
            </div>
        </header>
        
    </div>
  )
}
