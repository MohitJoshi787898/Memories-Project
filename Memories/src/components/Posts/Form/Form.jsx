import React, { useState, useEffect } from 'react';
import "./form.css"
import FileBase64 from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost, updatePost } from "../../../actions/post"

const Form = ({setPostData, PostData, currentId,setCurrentId}) => {

  // const [PostData, setPostData] = useState({ title: "", name: "", tags: "", message: "", selectedFile: "", creator: "" })

  const user = JSON.parse(localStorage.getItem('Profile'))?.result
  const dispatch = useDispatch()
  const clear=()=>{
    setPostData({ title: "", name: "", tags: "", message: "", selectedFile: "", creator: "" })
    setCurrentId(null)
    
  }
  useEffect(()=>{
    console.log(currentId)
  },[currentId])
  const handleSubmit = async () => {
    await setPostData({
      ...PostData, name: user.name
      , creator: user._id
    })
    // console.log(user)
    // console.log(PostData)
    dispatch(createPost(PostData)) 
  }
  const handleUpdate = ()=>{
    // console.log(PostData,"handleUpdate")
    dispatch(updatePost(PostData,currentId))
  }
  


  return (
    <div className='From'>
      {!user ? (
        <div className='title'><h3>To create a memory please login</h3></div>) : (
        <div className="Form_container">
          <div className='title'>
            <h1>{`${currentId!==null ? "Edit" : "Create"} A Post`}</h1>
          </div>

          <div className='input_Container'>
            <input type="text" placeholder='Post Titel' onChange={(e) => setPostData({ ...PostData, title: e.target.value })} name='title' className='input' value={PostData.title} />
            <input type="text" placeholder='Tags (Comma Sapreted)' onChange={(e) => setPostData({ ...PostData, tags: e.target.value.split(",") })} name='tags' className='input' value={PostData.tags} />
            <input type="text" placeholder='Message' name="message" className='input' value={PostData.message} onChange={(e) => setPostData({ ...PostData, message: e.target.value })} />
            <FileBase64 multiple={false} onDone={({ base64 }) => setPostData({ ...PostData, selectedFile: base64 })} />
            <button type='button' className='input submit' onClick={currentId!==null ? handleUpdate : handleSubmit}>{currentId ? "EDIT" : "CREATE"}</button>
            
            <button type='button' className='input clear'onClick={clear} >CLEAR </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Form
