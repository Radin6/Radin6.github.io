import './Projects.css';

export default function Project(props) {
  return (
    <div className="project">
      <div className="project-text">
        <a href={props.href} target={props.target}>
          <h3>{props.title}</h3>
        </a>
        <p>{props.text}</p>
      </div>
      <picture className="project-pic">
        <img src={props.imgurl} alt={props.alt} />
      </picture>
    </div>
  );
}
