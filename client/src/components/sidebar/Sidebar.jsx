import React from "react";
import "./sidebar.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [cats, setCats] = useState([]);
  useEffect(() => {
    try {
      const getCats = async () => {
        const res = await axios.get("http://localhost:5000/api/categories/");
        setCats(res.data);
      };
      getCats();
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.pexels.com/photos/2064705/pexels-photo-2064705.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
          className="sidebarImg"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, porro
          deserunt! Porro, distinctio aut. Ullam a, mollitia aspernatur veniam
        </p>
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            {cats.map((cat) => (
              <Link to={`/?cat=${cat.name}`} className="link" key={cat._id}>
                <li key={cat._id} className="sidebarListItem">
                  {cat.name}
                </li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
          <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-facebook-square"></i>
            <i className="sidebarIcon fa-brands fa-twitter-square"></i>
            <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
            <i className="sidebarIcon fa-brands fa-instagram-square"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
