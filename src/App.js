import "./App.css";
import Profile from "./Images/Profile.jpeg";
import React from "./Images/React.webp";
import JavaScript from "./Images/JavaScript.png";
import Node from "./Images/Node.png";
import Python from "./Images/Python.png";
import Redux from "./Images/Redux.png";
import PgAdmin from "./Images/PgAdmin.png";
import Appointments from "./Images/Appointment.png";
import WeatherApp from "./Images/WeatherApp.png";
import Dictionary from "./Images/Dictionary.png";
import GitHub from "./Images/GitHub.png";

function App() {
  return (
    <div className="App">
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
            <img src={GitHub} />
          </a>
        </div>
      </nav>
      <div id="firstBox">
        <div id="intro" className="firstBoxContent">
          <h1>
            Hello, I'm <span>Matt Weilert</span>
          </h1>
          <p>
            Currently an <span>aspiring</span> software developer who's exited
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
          ESU for engineering. During that year I took a class that led me to a
          degree switch to Computer Science. In November of 2022, I married my
          high school sweetheart who was attending classes in Manhattan, Kansas.
          I decided to take the KSU software development Bootcamp to get into
          the field of my dreams faster. I finished the Bootcamp in November of
          2023 where I learned a multitude of development skills.
        </p>
      </div>
      <hr id="skills" />
      <div>
        <h2>Skills</h2>
        <div id="skillSet">
          <div className="skill">
            <img src={React} />
            <p>React</p>
          </div>
          <div className="skill">
            <img src={JavaScript} />
            <p>JavaScript</p>
          </div>
          <div className="skill">
            <img src={Node} />
            <p>Node.js</p>
          </div>
          <div className="skill">
            <img src={PgAdmin} />
            <p>PgAdmin</p>
          </div>
          <div className="skill">
            <img src={Redux} />
            <p>Redux</p>
          </div>
          <div className="skill">
            <img src={Python} />
            <p>Python</p>
          </div>
        </div>
        <p>
          Although I am currently more comfortable with frontend development, I
          am <span>Striving</span> to better my backend skills on my own time
          for future career use.
        </p>
      </div>
      <hr id="project" />
      <div id="projectContainer">
        <h2>Projects</h2>
        <div className="projects">
          <h2>Car Shop Appointment Maker</h2>
          <img src={Appointments} />
          <p>
            This was a group of 3 project. We created an appointment making
            application for a car shop. This aplication has an interactive
            calender and backend connectivity to <span>PgAdmin</span>. I focused
            on the creation and style of the calendar along with sending data to
            the database.
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
          <img src={WeatherApp} />
          <p>
            Although not complete, this is a solo project I am creating to
            display the current and future weather of a searched Zip code using
            two API's.
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
          <img src={Dictionary} />
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
      <div id="footer">Contact me at MattWeilert@gmail.com</div>
    </div>
  );
}

export default App;
