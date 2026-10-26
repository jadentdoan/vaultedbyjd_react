import "./LiveSummary.css";
import { Link } from "react-router-dom";

const LiveSummary = () => {
  return (
    <section className="livestream">
      <div className="container live-inner">
        <div>
          <p className="eyebrow">
            <span></span> In the live room
          </p>
          <h2 id="live-title">Next live show</h2>
        </div>
        <p className="show-time">
          New dates coming soon <span>Find your next favorite card.</span>
        </p>
        <p className="show-benefits">
          Live deals. Giveaways. <br /> A community that gets it.
        </p>
        <Link className="button" to="/live">
          Watch Live <span>⟶</span>
        </Link>
      </div>
    </section>
  );
};

export default LiveSummary;
