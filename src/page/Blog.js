import React,{useEffect, useState} from 'react'
import { client } from '../contentful/client'
import BlogCard from './BlogCard'

const Blog = () => {
    const [articles,SetArticles]=useState([])
    const [loading,SetLoading]=useState(true)
    useEffect(()=>{
        client.getEntries().then((res)=>{
             SetArticles(res.items)
             SetLoading(false)  
        }).catch((err)=>{
            console.log(err)
        })
      

    },[])    
  return (

    <div style={{marginTop:'100px'}} >

<div className='text-center text-primary '>

<h1> Blogs </h1>

</div>


<div className='container'>
 
{loading?( <div  style={{marginTop:"150px"}} class="spinner-border text-primary text-center"></div>
):( <div className="row mx-5 ">




{articles.map((ele)=>{
  return( <div className="col-sm-8 col-lg-4 mb-3">

  <BlogCard   img={ele.fields.image.fields.file.url} title={ele.fields.title} Author={ele.fields.author} link={ele.fields.link} />
  </div>)
})}
   
    
  </div>)}
 
</div>      
      </div>
  )
}

export default Blog