import React, { useEffect, useState } from "react";
import "./Post.css";
import img from "../../../assit/img.jpg";
import { useDispatch } from "react-redux";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import DeleteIcon from "@mui/icons-material/Delete";
import moment from "moment";
import { pink ,grey} from "@mui/material/colors";
import { deletePost,likePost } from "../../../actions/post";


const Post = ({ setPostData, p, setcurrentId }) => {
  const dispatch = useDispatch();
  const [post, setpost] = useState({
    title: p?.title,
    name: p?.name,
    likes: p?.likes,
    tags: p?.tags,
    message: p?.message,
    selectedFile: p?.selectedFile,
    creator: p?.creator,
  });
  const user = JSON.parse(localStorage.getItem("Profile"))?.result?._id;
  const [Like, setLike] = useState(false);
  useEffect(() => {
    setLike(
      p?.likes.filter((like) => like === user).length === 1 ? true : false
    );
  }, [Like]);

  const handleLike = () => {
    dispatch(likePost(user,p?._id))
  };

  const legitimateUser = user===p?.creator?true:false;
  const handleChange = () => {
    setPostData(p);
    setcurrentId(p?._id);
  };
  return (
    <div className="PostContainer" key={p?._id}>
      <div className="img_container">
        <img className="post_img" src={p ? p?.selectedFile : img} />
      </div>
      <h3 className="post_name">{p?.name}</h3>
      {legitimateUser && (
        <MoreHorizIcon
          className="PostEdit"
          onClick={handleChange}
          sx={{ fontSize: 40 }}
        />
      )}
      <div onClick={handleLike}>
        {Like ? (
          <div>
            <ThumbUpIcon className="PostLike" sx={{ fontSize: 40, }} color='primary'  />
            <span>You</span>
          </div>
        ) : (
          <div>
            <ThumbDownIcon className="PostDisLike" sx={{ fontSize: 40, color:grey[200] }}    />
          </div>
        )}
      </div>

      {legitimateUser && (
        <DeleteIcon
          className="PostDelete"
          onClick={() => dispatch(deletePost(p?._id))}
          sx={{ fontSize: 40, color: grey[200]}}
        />
      )}

      <p className="post_text">{moment(p?.createdAt).fromNow()}</p>
      <div className="Post_Details">
        <div>
          <h2 className="Post_Title">{p?.title}</h2>
        </div>
        <div>
          <h6 className="Post_Tags">{p?.tags.map((tag) => `#${tag} `)}</h6>
        </div>
        <div>
          <p className="Post_Message">{p?.message}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
