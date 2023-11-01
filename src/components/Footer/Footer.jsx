import Icons from '../../assets/Icons';
import './Footer.css';

export default function Footer() {
  return (
    <div className="footer">
      <h3>Contact Me</h3>
      <section className="footer-content">
        <a
          href="mailto:nicoramos647@hotmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <Icons icon="email" />
        </a>
        <a
          href="https://www.linkedin.com/in/nicolasadelramos/"
          target="_blank"
          rel="noreferrer"
        >
          <Icons icon="linkedin" />
        </a>
        <a href="https://github.com/Radin6" target="_blank" rel="noreferrer">
          <Icons icon="github" />
        </a>
      </section>
    </div>
  );
}
