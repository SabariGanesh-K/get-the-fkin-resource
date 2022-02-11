import React, { useState } from "react";
import { useParams } from "react-router";
import { DATA } from "../data/data";
import Resource from "./resource";




const Resources=() =>{
    let  {deptid} = useParams()
 console.log(deptid)


    const d = DATA[parseInt(deptid,10)].resources
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
