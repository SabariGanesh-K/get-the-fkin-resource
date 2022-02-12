import React, { useEffect } from "react";
import { useParams } from "react-router";
import { DATA } from "../data/data";
import Resource from "./resource";
import ScrollToTop from "react-scroll-to-top";
import { NavLink } from "react-router-dom";
const Resources = () => {
  let { deptid } = useParams();
  //  console.log(deptid)

  const d = DATA[parseInt(deptid, 10)].resources;
  const resourceslist = d.map((item) => {
    // console.log(item)

    return (
      <div key={item.title}>
        <Resource
          title={item.title}
          link={item.link}
          bonus1={item.bonus1}
          bonus2={item.bonus2}
          bonus3={item.bonus3}
        />
      </div>
    );
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      {" "}
      <div class="wrapper">
        <NavLink
          className="nav-link"
          to="/categories"
          style={{ textDecoration: "none" }}
        >
          <button className="backbutton"> Back </button>
        </NavLink>
      </div>{" "}
      <ScrollToTop smooth />
      {resourceslist}
    </div>
  );
};
export default Resources;
