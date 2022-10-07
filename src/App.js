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

function App() {
  return (
    <div className="App">
      <nav>This is the nav bar</nav>
      <div id="firstBox">
        <div id="intro" className="firstBoxContent">
          <h1>
            Hello, I'm <span>Matt Weilert</span>
          </h1>
          <p>
            Currently an <span>aspyring</span> software developer who's exited
            for his future
          </p>
        </div>
        <div id="profile" className="firstBoxContent">
          <img src={Profile} alt="Profile" />
        </div>
      </div>
      <hr />
      <div id="aboutMe">
        <h2>About me</h2>
        <p>
          I found a passion for coding in my highschool career that I never
          presued too much due do my school having no classes related to this
          subject. I graduated highschool in 2020 and attended ESU for
          engineering. During my first year i took a class that reegnighted this
          passion and led to me in degree switch to computer science. In
          November of 2022 I married my highschool sweetheart who was attendeing
          classes in Manhattan, i decided to take the KSU software development
          bootcamp to complete quickly to get into the field of my dreams
          faster. I finished the bootcamp in November of 2023 where i learned a
          multitude of development skills.
        </p>
      </div>
      <hr />
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
          am <span>striving</span> to better my backend skills on my own time
          for future career use.
        </p>
      </div>
      <hr />
      <div id="projectContainer">
        <h2>Projects</h2>
        <div className="projects">
          <h2>Car Shop Appointment Creator</h2>
          <img src={Appointments} />
          <p>
            This was a group of 3 project. We created an appointment creator for
            a car shop with an interactive calender and backend connectivity to
            PgAdmin. I focused on the creation and style of the calendar along
            with sending data to the database.
          </p>
          <p>
            <a href="https://www.google.com/">Vercel Link</a>
          </p>
          <p>
            <a href="https://www.google.com/">GitHub Link</a>
          </p>
        </div>
        <div className="projects">
          <h2>Weather App</h2>
          <img src={WeatherApp} />
          <p>
            Although not complete, this is a solo project I created to display
            the current and future weather of a Zip code using two API's.
          </p>
          <p>
            <a href="https://www.google.com/">Vercel Link</a>
          </p>
          <p>
            <a href="https://www.google.com/">GitHub Link</a>
          </p>
        </div>
        <div className="projects">
          <h2>Dictionary</h2>
          <img src={Dictionary} />
          <p>
            This project was my first solo project creating a Dictionary that
            searches words as you type.
          </p>
          <p>
            <a href="https://www.google.com/">Vercel Link</a>
          </p>
          <p>
            <a href="https://www.google.com/">GitHub Link</a>
          </p>
        </div>
      </div>
      <div id="footer">Contact me at MattWeilert@gmail.com</div>
    </div>
  );
}

export default App;
