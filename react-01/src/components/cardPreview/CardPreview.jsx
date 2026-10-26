import { Link } from "react-router-dom";
import "./CardPreview.css";

const CardPreview = (props) => {
  return (
    <section className="container page-content card-preview">
      <img src={props.src} alt={props.alt} />
      <div>
        <p className="eyebrow">Inside the vault</p>
        <h2>{props.title}</h2>
        <p>A closer look at a featured card in JD’s collection.</p>
        <p>Interested in this card? Reach out for details and availability.</p>
        <Link className="button" to="/services">
          Ask about this card <span>⟶</span>
        </Link>
        <p>
          <Link className="text-link" to={props.back}>
            ← Back to the collection
          </Link>
        </p>
      </div>
    </section>
  );
};

export default CardPreview;
