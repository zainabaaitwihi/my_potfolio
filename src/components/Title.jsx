import React from 'react'
import './Title.scss'
export default function Title({title,span}) {
  return (
    <div className="title">
        <h1>
            {title}
            <span>{span}</span>
        </h1>
        
    </div>
  )
}
