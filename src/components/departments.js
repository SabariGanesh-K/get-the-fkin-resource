import React, { useEffect } from "react";
import "./departments.css";
import { DATA } from "../data/data";
import { NavLink } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
const Departments = () => {
  const categories = DATA.map((item) => {
    console.log(item);
    return (
      <div key={item.id}>
        <NavLink
          className="nav-link"
          to={`/categories/${item.id}`}
          style={{ textDecoration: "none" }}
        >
          <div className="deptcardcontainer">
            <div className="Deptcard">{item["dept"]}</div>
          </div>
        </NavLink>
      </div>
    );
  });
  console.log("reached");
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="deptspage">
      <div className="wrapper">
        <NavLink className = "nav-link" to = "/home" style = {{textDecoration:'none'}}>
        <button className = "backbutton" > Back </button>
        </NavLink>
      </div>
      <ScrollToTop smooth />
      <div className = "quote2">Kehndi  Hundi Si , Learning CS is now Easy !! </div>
      {categories}
    </div>
  );
};

export default Departments;
