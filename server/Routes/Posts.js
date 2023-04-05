import express from 'express';
import  {getPosts,createPost,deletePost,updatePost,likePost,getPostsBySearch}  from '../Controlers/post.js';
import auth from '../middleware/auth.js';
 
const router=express.Router();

router.get('/',getPosts);
router.get('/search' ,getPostsBySearch);
router.patch('/:id/like',likePost);
router.post('/',auth,createPost);
router.delete('/:id',auth,deletePost)
router.patch('/:id',auth,updatePost);
export default router;