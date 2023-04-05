import React ,{useEffect,useState} from 'react'
import {useDispatch} from "react-redux"
import {find_by_Search, search} from '../../../actions/post'
import {useNavigate} from 'react-router-dom'
import "./search.css"

const Search = () => {
  const [searchQuery,setSearchQuery]=useState({title:"",tags:""});
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const handleClick= () =>{
    dispatch(find_by_Search(searchQuery));
    navigate.push(`/posts/search?searchQuery=${search.search || "none"}&tags=${searchQuery.tags || "none"}}`)
   
    
  }
  return (
    <div className='Search'>
      <input name='title' className='input'onChange={(e)=>setSearchQuery({...searchQuery,title:e.target.value})} placeholder='Search By Title' />
      <input name='Tags' className='input'onChange={(e)=>setSearchQuery({...searchQuery,tags:e.target.value})} placeholder='Search By Tags' />
      <button className='searchBtn input' onClick={handleClick}>Search</button>

    </div>
  )
}

export default Search
