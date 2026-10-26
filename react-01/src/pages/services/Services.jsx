import "./Services.css";
import { Link } from "react-router-dom";
import PageHeading from "../../components/pageHeading/PageHeading";
import Contact from "../../components/contact/Contact";

const Services = () => {
  return (
    <div className="page">
      <PageHeading title="SERVICING AREA" />
      <div className="container page-content narrow">
        <p className="page-intro">
          We are buying ALL sports cards and
          <br />
          other TCG cards at 70–80%.
        </p>
        <Contact />
        <div className="grading-link">
          <p>
            We also offer grading services! Please refer to the Grading area for
            pricing and details.
          </p>
          <Link className="button" to="/grading">
            Grading area <span>⟶</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
