import React, { useState } from "react";
import { DATA } from "../data/data";
import Resource from "./resource";

const d = DATA[0].resources


const Resources=() =>{
  
const resourceslist = d.map((item)=>{
console.log(item)

    return(
<div key = {item.title}>
<Resource title = {item.title} link = {item.link} bonus1 = {item.bonus1} bonus2 = {item.bonus2} bonus3 = {item.bonus3} />


</div>
    
    )
})


return(
    <div>{resourceslist}</div>

)

}
export default Resources
