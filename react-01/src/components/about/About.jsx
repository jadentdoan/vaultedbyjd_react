import "./About.css";
import { Link } from "react-router-dom";
import Feature from "../feature/Feature";
import image1 from "./images/jd-booth.png";

const About = () => {
  return (
    <section className="about container">
      <img
        className="booth-photo"
        src={image1}
        alt="JD’s card collection and work area"
      />
      <div className="about-text">
        <p className="eyebrow">In the booth</p>
        <h2 id="about-title">MEET JD.</h2>
        <p>
          Get to know the person
          <br />
          behind all the chaos.
        </p>
        <Link className="button" to="/about">
          More about JD <span>+</span>
        </Link>
      </div>
      <div className="about-box">
        <Feature
          icon="✧"
          title="THE CHASE"
          description="Find your next grail"
        />
        <Feature
          icon="◇"
          title="THE COLLECTION"
          description="Build your trophy case"
        />
        <Feature
          icon="↗"
          title="LIVE ON WHATNOT"
          description="Heat all night long"
        />
        <Feature
          icon="♧"
          title="THE COMMUNITY"
          description="Aligned by the same passion"
        />
      </div>
    </section>
  );
};

export default About;
