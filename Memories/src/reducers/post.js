import {FETCH_POSTS,CREATE,LIKE,DELETE,UPDATE} from "../constans/actionConstat"
export default (post=[],action)=>{
    switch(action.type){
        case FETCH_POSTS:
            return action.payload;
        case CREATE:
            return post.push(action.payload);
        case DELETE:
            console.log('delete', action.payload);
            return post.filter(post=>post.id!==action.payload);
        case UPDATE:
            console.log('update', post[0]);
            return post.map(post=>post._id===action.payload._id?action.payload:post)
        case LIKE:
            console.log(action.payload)
            return post.map(post=>post._id===action.payload.post_id?{...post,likes:action.payload.data}:post)
        
        default:
            return post;
    }

}