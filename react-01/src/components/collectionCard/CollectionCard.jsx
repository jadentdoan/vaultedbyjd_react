import { Link } from "react-router-dom";
import "./CollectionCard.css";

const CollectionCard = (props) => {
  return (
    <Link className="collection-card" to={props.to}>
      <img src={props.src} alt={props.title} width="250" height="250" />
    </Link>
  );
};

export default CollectionCard;
