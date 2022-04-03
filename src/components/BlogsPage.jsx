import React from 'react'
import allblogs from'./allBlogs'
import Title from'./Title'
import './BlogsPage.scss'
export default function BlogsPage() {
  return (
    <>
    <div className="blogs-title">
      <Title title={'Recent Blogs'} span={'Recent Blogs'}/>
    </div>
    <div className="blogs">
       {allblogs.map((blog)=>{
         return <div className="blog" key={blog.id}>
                   <div className="blog-cont">
                     <img src={blog.image}/>
                     <a href={blog.link} className="blog-link">
                         {blog.title}
                     </a>
                   </div>
         </div>
        })
        }
    </div>
    </>
  )
}
