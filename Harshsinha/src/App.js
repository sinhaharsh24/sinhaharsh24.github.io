import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <h1>👋 Hi, I'm Harsh Sinha</h1>
        <p>Engineering Student</p>
      </header>

      <div class="container">
        <section class="section" id="contact">
          <h2>Contact Me</h2>
          <p>
            Email:{" "}
            <a href="mailto:harshsinhawork24@gmail.com">
              harshsinhawork24@gmail.com
            </a>
          </p>
          <p>
            LinkedIn: <a href="#">Profile</a> GitHub:{" "}
            <a href="#">GitHub Profile</a>
          </p>
        </section>

        <section class="section" id="about">
          <h2>About Me</h2>
          <p>
            Passionate engineering student with a strong foundation in software
            development, problem-solving, and emerging technologies. Gained
            hands-on experience in AI and Reinforcement Learning during an
            internship at DRDO. Skilled in full-stack development (MERN) and
            automation, with a keen interest in building impactful projects.
            Thrive in team environments, leading projects, and exploring
            innovative solutions. Always eager to learn and grow.
          </p>
        </section>
      </div>

      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <li>
            <h3>Aircraft Navigation System</h3>
            <span id="aircraft_images">
            <img src="./img/aircraft navigation ss.jpg" alt="ss of the project" />
            <img src="./img/aircraft navigation ss2.jpg" alt="ss of the project" />
            </span>
            
            <p>
              <strong>Technologies:</strong> Python, OpenAI Gym, Reinforcement
              Learning, JSBSim, Tensorboard, TensorFlow, Machine Learning,
              Artificial Intelligence
            </p>
            <p>
              Developed an aircraft navigation system using reinforcement
              learning models (PPO and SAC) in a Python Gym environment with
              JSBSim, optimized for pursuit and goal positioning.
            </p>
          </li>

          <li>
            <h3>SkillScore Webapp</h3>
            <p>
              <strong>Technologies:</strong> MERN (MongoDB, Express.JS,
              React.JS, Node.JS), Authorization
            </p>
            <p>
              Designed and developed SkillScore, a MERN stack-based platform for
              freshers to practice interview questions and track scores.
              Implemented secure login, topic-wise tests, and real-time camera
              monitoring during assessments.
            </p>
          </li>

          <li>
            <h3>URL Shortener</h3>
            <div class="url_shortner">
            <img src="./img/screen_shot.jpg" alt="ss of the project" />
            </div>
            <p>
              <strong>Technologies:</strong> MERN (MongoDB, Express.JS,
              React.JS, Node.JS)
            </p>
            <p>
              Designed and implemented a MERN stack project which helps in
              creating shorter URL links.
            </p>
          </li>

          <li>
            <h3>Horse Bot: Generative AI Discord Bot</h3>
            <p>
              <strong>Technologies:</strong> Python, API Calls, Generative AI,
              LLM
            </p>
            <p>
              Designed a Discord chatbot with multimedia and interactive
              capabilities using Gemini LLM to engage users playfully.
            </p>
            <p>
              Deployed on Replit for continuous cross-platform availability.
            </p>
          </li>

          <li>
            <h3>Image Text Extraction Tool</h3>
            <p>
              <strong>Technologies:</strong> Python, Google Colab, OCR,
              Tesseract
            </p>
            <p>
              Developed a tool to extract text from images and convert it into
              text files using Optical Character Recognition (OCR) in Python.
            </p>
            <p>
              Implemented the project in Google Colab using Tesseract OCR for
              high accuracy in text recognition.
            </p>
            <p>
              Useful for digitizing printed materials and converting them into
              editable text formats.
            </p>
          </li>
        </ul>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>C/C++</li>
          <li>Java</li>
          <li>Python</li>
          <li>Reinforcement Learning</li>
          <li>Git/GitHub</li>
          <li>Artificial Intelligence</li>
          <li>Data Structures and Algorithm in JAVA</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
          <li>SQL</li>
        </ul>
      </section>

      <footer>
        <p></p>
      </footer>
    </div>
  );
}

export default App;
