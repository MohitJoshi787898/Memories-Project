import * as api from "../api/index";
import {FETCH_POSTS,CREATE,DELETE,UPDATE,LIKE} from "../constans/actionConstat"

export const search=() =>async(dispatch)=>{
    try{
        console.log("searching...")
        const {data} = await api.fetchPosts()
        console.log(data) 
        dispatch({
            type: FETCH_POSTS,
            payload: data
        })
    }
    catch(error){
        console.log(error,"search failed ")
    }
}
export const find_by_Search=(search_query)=>async(dispatch)=>{
    try {
        console.log("searching by search...")
        const {data} = await api.find_By_Search(search_query)
        console.log(data)

    } catch (error) {
        console.log(error,"search failed ")
    }
}
export const createPost = (fromData) => async (dispatch) => {
    try {
        const {data} = await api.createPosts(fromData)
        dispatch({
            type: CREATE,
            payload: data
        })

    } catch (error) {
        console.log(error)

    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        const {data} = await api.delete_Post(id)
        dispatch({
            type: DELETE,
            payload: data
        })  
        
    } catch (error) {
        console.log(error)
    }
}
export const updatePost = (PostData,id)=>async (dispatch)=>{
    try {
        const {data} = await api.update_Post(PostData,id)
        dispatch({
            type:UPDATE,
            payload: data
        })


    } catch (error) {
        
    }
}
export const likePost = (user_id,post_id) => async(dispatch)=>{
    try {
        const {data} = await api.like_Post(user_id,post_id)
        dispatch({
            type:LIKE,
            payload: {post_id,data}
        })

    } catch (error) {
        console.log(error,"error in actiom")
    }
}