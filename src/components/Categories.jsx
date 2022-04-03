import React from 'react'

export default function Categories({filter,categories}) {
  return (
    <div className="categories">
      {
        categories.map((cat,i)=>{
          return (
          <button type="button" className="bnt-port" onClick={()=>filter(cat)} key={i}>{cat}</button>)
        })
      }
    </div>
  )
}
