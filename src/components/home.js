import { React } from "react";
import "./home.css";
import codePic from "./binary-code.png";
import tea from "./bubble-tea.png";
import loop from "./loop.png";
import { NavLink } from "react-router-dom";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import creator from "../media/me.jpg"
import insta from "../media/social/insta.png"
import linkedin from "../media/social/linkedin.png"
import github from "../media/social/github.png"
import mail from "../media/social/mail.png"
import frontend from "../media/frontend.png"
import resource from "../media/resource.png"
const Home = () => {
  return (
    <div className="home">
      <div className="intro">
        
        {/* <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>    */}
        <div className="introwords">
          <span >EXPLORE <br/> COMPUTER <br/> SCIENCE</span>
        </div>
        {/* </ScrollAnimation> */}

        <div className="hacktealoop">
          <ScrollAnimation animateIn="animate__flipInY" animateOnce={true}>
            <div className="hack">
              HACKK
              <img src={codePic} />{" "}
            </div>

            <div className="tea">
              TEA
              <img src={tea} />
            </div>

            <div className="loop">
              LOOP
              <img src={loop} />
            </div>
          </ScrollAnimation>
        </div>
      </div>
      <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
        <div className="buttonsContainer">
          <NavLink className="nav-link" to="/">
            <button className="go">Go Ahead</button>
          </NavLink>
          <a href="#" style={{ textDecoration: "none" }}>
            <button className="creatorbutton">
              <span className="text">CREATOR</span>
            </button>
          </a>
          <a href="#" style={{ textDecoration: "none" }}>
            <button className="creatorbutton">
              <span className="text">OPEN SOURCE</span>
            </button>
          </a>
        </div>
      </ScrollAnimation>

      <div className="introsubtitle">
  
        No more Fkin excuses , get ur resource and START ROCKING !!
      </div>
      <br />
      <br />
      <div className="quote">
        <div>
          Whether you want to uncover the secrets of universe or you want{" "}
        </div>
        <br />
        <div>to pursue a career in 21st century , basic computer</div>
        <br />
        <div> science knowledge is essential to learn.</div>
        <br />
        -Stephen Hawking
      </div>
      <br/><br/>
      <div className="stats">
        <div className="statsbox">
          <div className="statsbox_content">
              <div>{20} + Depts</div>
          </div>
        </div>
        <div className="statsbox">
          <div className="statsbox_content">
              <div>{1000} + Modules</div>
          </div>
        </div>
        <div className="statsbox">
          <div className="statsbox_content">
              <div>{200} + Lectures</div>
          </div>
        </div>
      </div>
    <br/><br/>
      <div className = "creatortitle">MEET THE CREATOR 😈</div>

    <div className = "creatorcardcontainer">
<div className = "creatorcard">
    <img src = {creator} width = "300rem" className = "creatordp"/>
    <div className = "creatorProfile">



    <div className = "creatorName">
      Sabari Ganesh
    </div>
    <div className = "CreatorSocials">
    <img src = {insta}/>
    <img src = {linkedin}/>
    <img src = {github}/>
    <img src = {mail}/>
    </div>
    </div>
</div>

    </div>
    <div className = "creatortitle">OPEN SOURCE 🚀</div>
    <div id = "opensource">
      <div className = "opensourcecontainer">
      <div className = "resource">
      <img src = {resource} className = "os_categ_pic" />
      <div className = "os_categ_title"> RESOURCE </div>
      </div>
      <div className = "frontend">
      <img src = {frontend} className = "os_categ_pic"/>
      <div className = "os_categ_title">FRONTEND</div>
      </div>
 
      </div>
    </div>


    </div>
  );
};

export default Home;
