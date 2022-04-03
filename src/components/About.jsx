import React from 'react'
import './About.scss'
import Title from './Title'
import ImageSection from './ImageSection'
import SkillsSection from'./SkillsSection'
import ServiceSection from'./ServiceSection'
import design from './../assets/design.png'
import devp from './../assets/devp.png'
import intelligence from './../assets/intelligence.png'
export default function () {
  return (
    <div className="About">
      <Title title={'About me'} span={'About me'}/>
      <ImageSection/>
      <Title title={'My skills'} span={'My skills'}/>
      <div className="my-container">
      <SkillsSection progress={'80%'} widthh={'80%'}title={'html'}/>
      <SkillsSection progress={'60%'} widthh={'60%'}title={'css'}/>
      <SkillsSection progress={'70%'} widthh={'70%'}title={'Bootstrap'}/>
      <SkillsSection progress={'40%'} widthh={'40%'}title={'javascript'}/>
      <SkillsSection progress={'50%'} widthh={'50%'}title={'React js'}/>
      <SkillsSection progress={'50%'} widthh={'50%'}title={'php'}/>
      <SkillsSection progress={'70%'} widthh={'70%'}title={'laravel'}/>
      <SkillsSection progress={'60%'} widthh={'60%'}title={'MySQL'}/>
      </div>
      <Title title={'Services'} span={'Services'}/>
      <div className="service-container">
        <ServiceSection design={design} title={'web design'} text={'kdfgqsd oiyzr wjgdjfg skdhfsd uztu kslfjds eziyu wcn,x zioyt tuee slhfkd'}/>
        <ServiceSection design={devp} title={'web developpement'} text={'kdfgqsd oiyzr wjgdjfg skdhfsd uztu kslfjds eziyu wcn,x zioyt tuee slhfkd'}/>
        <ServiceSection design={intelligence} title={'artificial intelligence'} text={'kdfgqsd oiyzr wjgdjfg skdhfsd uztu kslfjds eziyu wcn,x zioyt tuee slhfkd'}/>
      </div>
      
    </div>
  )
}
