import { React } from "react";
import "./home.css";
import codePic from "./binary-code.png";
import tea from "./bubble-tea.png";
import loop from "./loop.png";
import { NavLink } from "react-router-dom";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import creator from "../media/me.jpg";
import insta from "../media/social/insta.png";
import linkedin from "../media/social/linkedin.png";
import github from "../media/social/github.png";
import mail from "../media/social/mail.png";
import frontend from "../media/frontend.png";
import resource from "../media/resource.png";
import CountUp from "react-countup";
import ScrollToTop from 'react-scroll-to-top'
const Home = () => {
  return (
    <div className="home">
      <ScrollToTop smooth />
      <div className="intro">
        {/* <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>    */}
        <div className="introwords">
          <div>
            EXPLORE </div><div> COMPUTER </div> <div>SCIENCE
            </div>
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
<br/> <br/><br/>

      <ScrollAnimation animateIn="animate__fadeIn" animateOnce={true}>
        <div className="buttonsContainer">
          <NavLink className="nav-link" to="/categories">
            <button className="go">Go Ahead</button>
          </NavLink>
          <a href="#creator" style={{ textDecoration: "none" }}>
            <button className="creatorbutton">
              <span className="text">CREATOR</span>
            </button>
          </a>
          <a href="#opensource" style={{ textDecoration: "none" }}>
            <button className="creatorbutton">
              <span className="text">OPEN SOURCE</span>
            </button>
          </a>
        </div>
      </ScrollAnimation>
      <br/> <br/><br/>
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
      <br />
      <br />
      <div className="stats">
        <div className="statsbox">
          <div className="statsbox_content">
            <div><CountUp  end={20}/>+ Depts</div>
          </div>
        </div>
        <div className="statsbox">
          <div className="statsbox_content">
            <div><CountUp  end={1000}/> + Modules</div>
          </div>
        </div>
        <div className="statsbox">
          <div className="statsbox_content">
            <div><CountUp  end={200}/> + Lectures</div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div id="creator" className="creatortitle">
        MEET THE CREATOR 😈
      </div>

      <div className="creatorcardcontainer">
        <div className="creatorcard">
          <img src={creator} width="300rem" className="creatordp" />
          <div className="creatorProfile">
            <a
              href="https://sabz.netlify.app"
              target="_blank" rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              <div className="creatorName">Sabari Ganesh</div>
            </a>
            <div className="CreatorSocials">
              <a
                href="https://www.instagram.com/sabz_qetuowryip_1357924680" target = "_blank" rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                <img src={insta} className = "socialmedia"/>
              </a>
              <a
                href="https://www.linkedin.com/in/sabariganeshk/"  target = "_blank" rel="noreferrer"
                style={{ textDecoration: "none" }}
              >
                <img src={linkedin} className = "socialmedia"  />
              </a>
              <a
                href="https://github.com/SabariGanesh-K"
                style={{ textDecoration: "none" }}  target = "_blank" rel="noreferrer"
              >
                <img src={github} className = "socialmedia"/>
              </a>
              <a
                href="k.sabarii.ganesh@gmail.com"  target = "_blank"
                style={{ textDecoration: "none" }} rel="noreferrer"
              >
                <img src={mail} className = "socialmedia"/>
              </a>
   
            </div>
          </div>
        </div>
      </div>
      <br/><br/>
      <div id="opensource" className="creatortitle">
        OPEN SOURCE 🚀
      </div>
      <div id="opensource">
        <div className="opensourcecontainer">
        <a
                href="https://github.com/Developer-Y/cs-video-courses"  target = "_blank"
                style={{ textDecoration: "none" }} rel="noreferrer"
              >
          <div className="resource">
            <img src={resource} className="os_categ_pic" />
            <div className="os_categ_title"> RESOURCE </div>
          </div></a>
          <a
                href="https://github.com/SabariGanesh-K/get-the-fkin-resource"  target = "_blank"
                style={{ textDecoration: "none" }} rel="noreferrer"
              >
          <div className="frontend">
            <img src={frontend} className="os_categ_pic" />
            <div className="os_categ_title">FRONTEND</div>
          </div></a>
        </div>
      </div>
      <br/><br/><br/>
    </div>
  );
};

export default Home;
