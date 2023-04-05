import React,{useState,useEffect} from 'react'
import "./posts.css"
import Search from './Search/Search';
import Form from './Form/Form';
import Post from './Post/Post';

const Posts = (post) => {
  
    const [counter,setCounter] =useState(null)
    // 
    // console.log(counter,"counter")
  useEffect(()=>{
    if(post)setCounter(post.post)

    // console.log(counter,"counting posts")
  },[post])
  const [PostData, setPostData] = useState({ title: "", name: "", tags: "", message: "", selectedFile: "", creator: "" })
  const [currentId,setCurrentId]=useState(null)
  // counter?.map((h,i)=>console.log(h._id,i,"map is running"))
  // return <div>hii</div>

  
  
  return (
    counter===null?<div>Loading</div>:
    <div className='Container'>
      <div className='Posts'>
       {counter?.length==0?(<div className='PostContainer'  ><div className='noPost'><h1 >No Post Found</h1></div> </div>):(counter?.map((p) =><Post setPostData={setPostData}  p={p} key={p?._id} setcurrentId={setCurrentId} />)) }
       
      </div>
      <div className='from'>
        <Search />
        <Form setPostData={setPostData} PostData={PostData} currentId={currentId} setCurrentId={setCurrentId} />
      </div>
    </div>
  )
}

export default Posts
