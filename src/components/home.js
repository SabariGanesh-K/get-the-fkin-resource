import { React } from "react";
import "./home.css";
import codePic from "./binary-code.png";
import tea from "./bubble-tea.png";
import loop from "./loop.png";
import { NavLink } from "react-router-dom";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
const Home = () => {
  return (
    <div className="home">
      <div className="intro">
        <br />
        <br />
        {/* <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>    */}
        <div className="introwords">
          <span className>EXPLORE COMPUTER SCIENCE</span>
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
            <button className="creator">
              <span className="text">CREATOR</span>
            </button>
          </a>
          <a href="#" style={{ textDecoration: "none" }}>
            <button className="creator">
              <span className="text">OPEN SOURCE</span>
            </button>
          </a>
        </div>
      </ScrollAnimation>

      <div className="introsubtitle">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
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
              <div>{20} +</div>  
            <div> Departments</div>
          </div>
        </div>
        <div className="statsbox">
          <div className="statsbox_content">
              <div>{1000} +</div>  
            <div> Modules</div>
          </div>
        </div>
        <div className="statsbox">
          <div className="statsbox_content">
              <div>{200} +</div>  
            <div> Lectures</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
