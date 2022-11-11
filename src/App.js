import "./CSS/App.css";
import "./CSS/Animation.css";
import Profile from "./Images/Profile.jpeg";
import React from "./Images/React.webp";
import JavaScript from "./Images/JavaScript.png";
import Node from "./Images/Node.png";
import Python from "./Images/Python.png";
import Redux from "./Images/Redux.png";
import PgAdmin from "./Images/PgAdmin.png";
import GitHub from "./Images/GitHub.png";
import PlayImg from "./Images/PlayImg.png";

import NoteVideo from "./Images/NoteVideo.mp4";
import CarVideo from "./Images/CarVideo.mp4";
import WeatherVideo from "./Images/WeatherVideo.mp4";
import SearchVideo from "./Images/SearchVideo.mp4";

function App() {
  return (
    <div className="App">
      <div class="area">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <nav>
        <div>
          <a href="#about">About</a>
        </div>
        <div>
          <a href="#skills">Skills</a>
        </div>
        <div>
          <a href="#project">Projects</a>
        </div>
        <div>
          <a href="https://github.com/JWeilert">
            <img src={GitHub} alt="GitHub" />
          </a>
        </div>
      </nav>
      <div id="firstBox">
        <div id="intro" className="firstBoxContent">
          <h1>
            Hello, I'm <span>Matt Weilert</span>
          </h1>
          <p>
            Currently an <span>aspiring</span> software developer who's excited
            for his future.
          </p>
        </div>
        <div id="profile" className="firstBoxContent">
          <img src={Profile} alt="Profile" />
        </div>
      </div>
      <hr id="about" />
      <div id="aboutMe">
        <h2>
          About <span>Me</span>
        </h2>
        <p>
          I found a passion for programming in the first year that I attended
          ESU for engineering. During that year, I took a class which led me to
          a degree switch to Computer Science. In November of 2021, I married my
          high school sweetheart who was attending classes in Manhattan, Kansas.
          I decided to take the KSU Software Development Bootcamp to get into
          the field of my dreams faster. I finished the Bootcamp in November of
          2022 with a multitude of development skills.
        </p>
      </div>
      <hr id="skills" />
      <div>
        <h2>Skills</h2>
        <div id="skillSet">
          <div className="skill">
            <img src={React} alt="React Logo" />
            <p>React</p>
          </div>
          <div className="skill">
            <img src={JavaScript} alt="JavaScript Logo" />
            <p>JavaScript</p>
          </div>
          <div className="skill">
            <img src={Node} alt="Node.JS Logo" />
            <p>Node.js</p>
          </div>
          <div className="skill">
            <img src={PgAdmin} alt="PgAdmin Logo" />
            <p>PgAdmin</p>
          </div>
          <div className="skill">
            <img src={Redux} alt="Redux Logo" />
            <p>Redux</p>
          </div>
          <div className="skill">
            <img src={Python} alt="Python Logo" />
            <p>Python</p>
          </div>
        </div>
        <p className="disc">
          Although I am currently more comfortable with front-end development, I
          am <span>Striving</span> to better my backend skills on my own time
          for future career use.
        </p>
      </div>
      <hr id="project" />
      <div id="projectContainer">
        <h2>Projects</h2>
        <p>
          <p>
            <span>Hover</span> or <span>Click</span> to play an example.
          </p>
        </p>
        <div className="projects">
          <h2>SoftNotes</h2>
          <video
            style={{
              backgroundImage: `url(${PlayImg})`,
              backgroundPosition: "center",
              backgroundSize: "30%",
              backgroundRepeat: "no-repeat",
            }}
            onMouseOver={(event) => event.target.play()}
            onMouseOut={(event) => event.target.pause()}
            onClick={(event) => event.target.play()}
            src={NoteVideo}
            type="video/mp4"
            loop
            playsInline
            preload="auto"
          />
          <p>
            This was a group-of-three project and my final project for my KSU
            Bootcamp. We created a <span>CRUD</span> note-taking application
            that had a fully working signup and authentication page. This
            application had backend connectivity to <span>MongoDB</span>. I
            handled everything frontend and frontend functionality using React
            hooks, Js, and <span>1,300+ </span> lines of CSS.
          </p>
          <p>
            <a href="https://github.com/cladden77/milestone-3-project">
              GitHub Link
            </a>
          </p>
        </div>
        <div className="projects">
          <h2>Body Shop Appointment Maker</h2>
          <video
            style={{
              backgroundImage: `url(${PlayImg})`,
              backgroundPosition: "center",
              backgroundSize: "30%",
              backgroundRepeat: "no-repeat",
            }}
            onMouseOver={(event) => event.target.play()}
            onMouseOut={(event) => event.target.pause()}
            onClick={(event) => event.target.play()}
            src={CarVideo}
            type="video/mp4"
            playsInline
            loop
            preload="auto"
          />
          <p>
            This was a group-of-three project. We created an appointment-making
            application for a body shop. This aplication has an interactive
            calender and backend connectivity to <span>PgAdmin</span>. I focused
            on the creation and style of the calendar along with helping to send
            data to the database.
          </p>
          <p>
            <a href="http://milestone-2-project.vercel.app/">Vercel Link</a>
          </p>
          <p>
            <a href="https://github.com/cladden77/milestone-2-project">
              GitHub Link
            </a>
          </p>
        </div>
        <div className="projects">
          <h2>Weather App</h2>
          <video
            style={{
              backgroundImage: `url(${PlayImg})`,
              backgroundPosition: "center",
              backgroundSize: "30%",
              backgroundRepeat: "no-repeat",
            }}
            onMouseOver={(event) => event.target.play()}
            onClick={(event) => event.target.play()}
            onMouseOut={(event) => event.target.pause()}
            src={WeatherVideo}
            type="video/mp4"
            loop
            preload="auto"
            playsInline
          />
          <p>
            Although not complete, this is a solo project I am creating to
            display the current and future weather of a searched ZIP code using
            two <span>API's</span>.
          </p>
          <p>
            <a href="https://weatherapp-jweilert.vercel.app">Vercel Link</a>
          </p>
          <p>
            <a href="https://github.com/JWeilert/WeatherReactApp">
              GitHub Link
            </a>
          </p>
        </div>
        <div className="projects">
          <h2>Dictionary</h2>
          <video
            style={{
              backgroundImage: `url(${PlayImg})`,
              backgroundPosition: "center",
              backgroundSize: "30%",
              backgroundRepeat: "no-repeat",
            }}
            onMouseOver={(event) => event.target.play()}
            onClick={(event) => event.target.play()}
            onMouseOut={(event) => event.target.pause()}
            src={SearchVideo}
            type="video/mp4"
            loop
            playsInline
            preload="auto"
          />

          <p>
            This was my first solo project where I created a Dictionary that
            searches and displays definitions as you type.
          </p>
          <p>
            <a href="https://word-search-a75p.vercel.app">Vercel Link</a>
          </p>
          <p>
            <a href="https://github.com/JWeilert/WordSearch">GitHub Link</a>
          </p>
        </div>
      </div>
      <div id="footer">
        Contact me at <span>MattWeilert@gmail.com</span>
      </div>
    </div>
  );
}

export default App;
