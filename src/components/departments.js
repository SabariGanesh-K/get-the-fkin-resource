import React from "react";
import "./departments.css";
import { DATA } from "../data/data";

const Departments = () => {
  const categories = DATA.map((item) => {
    console.log(item)
    return (
      <div key={item.id}>
          <div className = "deptcardcontainer">
        <div className="Deptcard">{item["dept"]}</div>
        </div>
      </div>
    );
  });
  console.log("reached");
  return <div>{categories}</div>;
};

export default Departments;
