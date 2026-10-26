import { Link } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
  return (
    <article className="gallery-card">
      <img
        src={props.src}
        alt={props.title + " — " + props.details}
        loading="lazy"
      />
      <h3>{props.title}</h3>
      <p>
        {props.collection}
        <br />
        {props.sport}
        <br />
        {props.details}
      </p>
      {props.preview && (
        <Link className="text-link" to={props.preview}>
          View card ↗
        </Link>
      )}
    </article>
  );
};

export default Card;
