import React from "react";
import "./resource.css"


const Resource = (props) => {
    const title = props.title
    const link = props.link
    const  bonus1 = props.bonus1
    const bonus2 = props.bonus2
    const bonus3 = props.bonus3
  
    function buttons(){
        if (typeof( bonus1) === "undefined") {
          return (
            <div className = "buttonscontainer">
              <a href={ link}>
                <button className= "resourcebutton">Resource</button>
              </a>
      
            </div>
          );
        }
        else if (typeof( bonus2 )=== "undefined"){
            return(
              <div className = "buttonscontainer">
              <a href={ link}>
                <button className= "resourcebutton">Resource</button>
              </a>
              <a href={ bonus1}>
                <button className= "resourcebutton">Bonus 1</button>
              </a>
      
            </div>
            )
        }
        else if (typeof( bonus3) === "undefined")  {
            return(
              <div className = "buttonscontainer">
              <a href={ link}>
                <button className= "resourcebutton">Resource</button>
              </a>
              <a href={ bonus1}>
                <button className= "resourcebutton">Bonus 1</button>
              </a>
              <a href={ bonus2}>
                <button className= "resourcebutton">Bonus 2</button>
              </a>
      
            </div>
            )
        }
        else {
          return(
              <div className = "buttonscontainer">
            <a href={ link}>
              <button className= "resourcebutton">Resource</button>
            </a>
            <a href={ bonus1}>
              <button className= "resourcebutton">Bonus 1</button>
            </a>
            <a href={ bonus2}>
              <button className= "resourcebutton">Bonus 2</button>
            </a>
            <a href={ bonus3}>
              <button className= "resourcebutton">Bonus 3</button>
            </a>
      
          </div>
          )
      }
      };

      console.log("finction reached")
    return(
     
        <div className="resourcecontainer">
        <div className="resourcecount"> &gt;&gt;&gt; </div>
        <div className="resourcecontent">
          <div className="resourcetitle">
              {title}
          </div>
          <div className="resourcebuttons">
          {buttons()}
          </div>
        
        </div>
      </div>
    )

};

export default Resource;
