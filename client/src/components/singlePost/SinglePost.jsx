import React from "react";
import { useLocation } from "react-router";
import "./singlePost.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[2];
  const [post, setPost] = useState({});

  useEffect(() => {
    try {
      const getPost = async () => {
        const res = await axios.get("http://localhost:5000/api/posts/" + path);

        setPost(res.data);
      };
      getPost();
    } catch (err) {
      console.log(err);
    }
  }, [path]);
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/2623679/pexels-photo-2623679.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostAuthor">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="singlePostDesc">{post.desc}</p>
      </div>
    </div>
  );
}
