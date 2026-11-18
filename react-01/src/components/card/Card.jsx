import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ title, src, collection, players, sport, company, set, details, serialization, preview }) => {
  return (
    <article className="gallery-card">
      <img src={src} alt={title + " — " + details} loading="lazy" />
      <h3>{title}</h3>
      {players?.length > 1 && <p>{players.join(", ")}</p>}
      <p>
        {collection && <>{collection}<br /></>}
        {sport}
        <br />
        {(company || set) && <>{[company, set].filter(Boolean).join(" · ")}<br /></>}
        {details}
        {serialization && (
          <>
            <br />
            Numbered {serialization}
          </>
        )}
      </p>
      {preview && (
        <Link className="text-link" to={preview}>
          View card ↗
        </Link>
      )}
    </article>
  );
};

export default Card;
