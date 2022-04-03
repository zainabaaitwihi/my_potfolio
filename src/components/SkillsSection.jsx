import React from 'react'
import './SkillsSection.scss'
export default function SkillsSection({progress,title,widthh}) {
  return (
    <div className="SkillsSection">
        <div className="skills-container">
             <h5>{title}</h5>
            <div className="skills-bar">
                <p className="skills-text">{progress}</p>
                <div className="skills-progress" >
                <div className="ineer-progress" style={{width:widthh}} ></div>
                </div>
            </div>
        </div>
    </div>
  )
}
