import "./Grading.css";
import PageHeading from "../../components/pageHeading/PageHeading";
import Contact from "../../components/contact/Contact";

const Grading = () => {
  return (
    <div className="page">
      <PageHeading title="GRADING AREA" />
      <div className="container page-content narrow">
        <p className="page-intro">
          We offer a $24.99 service charge on top of the PSA submission level
          cost.
          <br />
          Example: $24.99 + $60 (PSA Standard) = $84.99.
        </p>
        <p className="cream-box">
          As part of the $24.99 service charge, we include a full card cleaning
          and handle the submission process for you. We will keep you informed
          during each step!
        </p>
        <Contact />
      </div>
    </div>
  );
};

export default Grading;
