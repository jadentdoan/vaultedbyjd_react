import "./CollegiatePreview.css";
import PageHeading from "../../components/pageHeading/PageHeading";
import CardPreview from "../../components/cardPreview/CardPreview";
import card from "./images/college-first.png";

const CollegiatePreview = () => {
  return (
    <div className="page">
      <PageHeading title="COLLEGIATE COLLECTION" />
      <CardPreview
        title="Collegiate Collection"
        src={card}
        alt="Ja’Marr Chase Immaculate Rookie On-Card Autograph"
        back="/vault#collegiate"
      />
    </div>
  );
};

export default CollegiatePreview;
