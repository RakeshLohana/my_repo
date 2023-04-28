import React from 'react'
import './Blog.css'

const BlogInfo = ({img,title,Author,link}) => {
  return (
<div>
<div class="card2">
    <div class="card-header2">
      <img src={img} alt="rover" />
    </div>
    <div class="card-body2">
      
      <h4>
       {title}
      </h4>

      <div class="user2">
      
        <div class="user-info2">
          <h5>Author</h5>
          <small>{Author}</small>
        </div>
      </div>
      <div >
<a class="tag2 tag-teal2" href={link} target='__blank' > Read More</a>
</div>
    </div>
  </div>
</div>
  )
}

export default BlogInfo