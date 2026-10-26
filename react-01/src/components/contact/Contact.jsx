import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-box">
      <h2>
        REACH <br />
        OUT
      </h2>
      <div className="contact-message">
        <p>
          Have cards to sell or questions about grading? Tell JD about your
          collection.
        </p>
        <a className="button" href="mailto:jaden.jtdcards@gmail.com">
          Email JD <span>⟶</span>
        </a>
        <p>
          <a className="text-link" href="mailto:jaden.jtdcards@gmail.com">
            jaden.jtdcards@gmail.com
          </a>
        </p>
        <p>
          Connect on{" "}
          <a className="text-link" href="https://www.whatnot.com/user/jd3cards">
            Whatnot: @jd3cards
          </a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
