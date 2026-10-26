import "./Collections.css";
import { Link } from "react-router-dom";
import CollectionCard from "../collectionCard/CollectionCard";
import saints from "./images/saints-collection.png";
import college from "./images/collegiate-collection.png";
import gold from "./images/other-gold.png";

const Collections = () => {
  return (
    <section className="vault">
      <div className="container collections-inner">
        <div className="collection-text">
          <p className="eyebrow">Cherish it like gold</p>
          <h2 id="vault-title">
            COLLECT
            <br />
            YOUR PASSION.
          </h2>
          <p>
            Every collection starts
            <br />
            with a connection
          </p>
          <Link className="text-link" to="/vault">
            Explore the Vault <span>↗</span>
          </Link>
        </div>
        <div className="collection-grid" id="collection-cards">
          <CollectionCard
            title="Saints Collection"
            src={saints}
            to="/vault#saints"
          />
          <CollectionCard
            title="Collegiate Collection"
            src={college}
            to="/vault#collegiate"
          />
          <CollectionCard title="Other Gold" src={gold} to="/vault#gold" />
        </div>
      </div>
    </section>
  );
};

export default Collections;
