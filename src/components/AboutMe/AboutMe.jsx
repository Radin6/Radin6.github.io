import './AboutMe.css';
import {
  Python,
  Solidity,
  React,
  JS,
  CSS,
  HTML,
  Chakra,
  Next,
} from '../Badges/Badges.jsx';

export default function AboutMe() {
  return (
    <section className="about-me" id="aboutMe">
      <hr />
      <div className="about-me-content">
        <h2>About Me</h2>
        <p className="Iam">
          Hi, I am Nicolás, unlike most people, I am not looking for a job, I am
          looking for professional growth. My main motivation is to keep growing
          and learning continuously in my career.
        </p>
        <img width={'200px'} src="/BC2.png" alt="" />
        <p>
          I am interested and passionate about{' '}
          <strong>Blockchain Technology</strong> so I am excited to work with
          projects in this sector.
        </p>

        <h2>Languages</h2>
        <div className="badges-lang">
          <Solidity />
          <Python />
          <JS />
        </div>

        <h2>Technologies</h2>
        <div className="badges-tec">
          <HTML />
          <CSS />
          <React />
          <Next />
          <Chakra />
        </div>
      </div>
    </section>
  );
}
