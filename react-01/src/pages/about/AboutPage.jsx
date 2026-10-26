import "./AboutPage.css";
import { Link } from "react-router-dom";
import PageHeading from "../../components/pageHeading/PageHeading";

const AboutPage = () => {
  return (
    <div className="page">
      <PageHeading title="LEARN MORE" />
      <div className="container page-content narrow">
        <section className="about-story">
          <h2>
            WHAT
            <br />
            SETS US
            <br />
            APART
          </h2>
          <div className="cream-box">
            <p>
              At Vaulted, we pride ourselves on creating a tight-knit, bonded
              community. Joined by one simple connection: the love of the hobby.
            </p>
            <p>
              We understand the value of every connection and every card that
              has been with us through the journey. Every day, we strive to
              provide our patrons a remarkable customer experience.
            </p>
            <p>
              Currently serving the Columbia and Myrtle Beach area. We are here
              to assist you at every turn!
            </p>
            <p>Join our community and experience the thrill!</p>
          </div>
        </section>
        <section className="cream-box invite-box">
          <h2>Join JD on Whatnot</h2>
          <p>Connect with the community and find your next favorite card.</p>
          <a
            className="text-link"
            href="https://www.whatnot.com/invite/jd3cards"
          >
            Sign up with JD’s invite link ↗
          </a>
        </section>
        <section className="service-area">
          <div>
            <h2>OUR COMMUNITY</h2>
            <p>
              Serving collectors in Columbia and Myrtle Beach, South Carolina.
            </p>
            <p>
              Have cards to sell or questions about grading? Reach out and let's
              connect.
            </p>
            <Link className="button" to="/services">
              Contact JD <span>⟶</span>
            </Link>
          </div>
          <a
            className="button"
            href="https://maps.google.com/maps?q=Columbia%2C%20South%20Carolina"
          >
            Explore Columbia on Google Maps ↗
          </a>
        </section>
        <section className="cream-box contact-details">
          <h2>CONTACT ME</h2>
          <a href="mailto:jaden.jtdcards@gmail.com">jaden.jtdcards@gmail.com</a>
          <div className="social-links">
            <a href="https://www.whatnot.com/user/jd3cards">
              Whatnot: @jd3cards
            </a>
            <a href="https://www.tiktok.com/@jd3cards">TikTok: @jd3cards</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
