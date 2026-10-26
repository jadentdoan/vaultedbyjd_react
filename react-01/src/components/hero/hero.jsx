import "./Hero.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import image1 from "./images/card-show.jpg";
import image2 from "./images/psa-grading.jpg";

const Hero = () => {
  const [slide, setSlide] = useState(0);
  return (
    <section className="hero">
      <div id="slides">
        <img
          className={slide === 0 ? "" : "hidden"}
          src={image1}
          alt="Collectors and vendors at a card show"
        />
        <img
          className={slide === 1 ? "" : "hidden"}
          src={image2}
          alt="PSA card grading"
        />
      </div>
      <button
        id="hero-arrow-left"
        onClick={() => setSlide(slide === 0 ? 1 : 0)}
        type="button"
        aria-label="Previous photo"
      >
        &#10094;
      </button>
      <button
        id="hero-arrow-right"
        onClick={() => setSlide(slide === 0 ? 1 : 0)}
        type="button"
        aria-label="Next photo"
      >
        &#10095;
      </button>
      <div className="container hero-inner">
        <p className="eyebrow">For the love of the collection</p>
        <h1 id="hero-title">
          UNLOCK <br /> THE VAULT.
        </h1>
        <p className="hero-description">Turning your passion into gold.</p>
        <Link className="button" to="/services">
          Servicing area <span>⟶</span>
        </Link>
        <span className="hero-caption">
          Extraordinary cards. Shared passion.
        </span>
      </div>
    </section>
  );
};

export default Hero;
