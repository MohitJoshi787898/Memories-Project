import axios from "axios";

const API=axios.create({baseURL:"http://localhost:5000"})
// Adding intersepetors to the req headers
API.interceptors.request.use((req)=>{
    // console.log(JSON.parse(localStorage.getItem('Profile')),"intersepter")
    if(localStorage.getItem('Profile')){
        req.headers.authorization=`Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req
})

export const fetchPosts=()=>API.get('/posts')
export const find_By_Search=(search_query)=>API.get(`/posts/search?search=${search_query.title}&tags=${search_query.tags}`)
export const createPosts=(newPost)=>API.post('/posts',newPost);
export const update_Post=(updatePost,id)=>API.patch(`/posts/${id}`,updatePost);
export const delete_Post=(id)=>API.delete(`/posts/${id}`);
export const like_Post=(user_id,id)=>API.patch(`/posts/${id}/like`,{user_id:user_id} );


// signUp
export const getSignIn=(userAuth)=>API.post(`/user/signInUser`,userAuth);


export const getSignUp=(userAuth)=>API.post(`/user/signUpUser`,userAuth);

