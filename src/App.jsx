import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <header>
        <div className="title">
          <h1 className="title-myName">Hi, I'Nicolás</h1>
          <h2 className="title-dev">Full-Stack Developer</h2>
        </div>
        <picture>
          <img className="profile-pic" src="/profile-pic.png"></img>
        </picture>
      </header>
      <main>
        <section className="about-me">
          <h2>About Me</h2>
          <p>
            Hi, I'm Nicolás, unlike most people, I'm not looking for a job, I'm
            looking for professional growth. My main motivation is to keep
            growing and learning continuously in my career. I am interested and
            passionate about blockchain technology so I am excited to work with
            projects in this sector.
          </p>
          <h2>Languages</h2>
          <div className="badges lang">
            <img src="https://img.shields.io/badge/-Solidity-363636?logo=solidity" />
            <img src="https://img.shields.io/badge/-Python-3776AB?logo=python&logoColor=white" />
            <img src="https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=white" />
          </div>
          <h2>Technologies</h2>
          <div className="badges tec">
            <img src="https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white" />
            <img src="https://img.shields.io/badge/-CSS3-1572B6?logo=css3" />
            <img src="https://img.shields.io/badge/-NextJS-000000?logo=nextdotjs" />
            <img src="https://img.shields.io/badge/-ReactJS-61DAFB?logo=react&logoColor=black" />
            <img src="https://img.shields.io/badge/-ChakraUI-319795?logo=chakraui&logoColor=white" />
          </div>
        </section>
        <section className="projects">
          <h2>Projects</h2>
        </section>
      </main>
    </>
  );
}

export default App;
