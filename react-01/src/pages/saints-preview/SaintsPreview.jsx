import "./SaintsPreview.css";
import PageHeading from "../../components/pageHeading/PageHeading";
import CardPreview from "../../components/cardPreview/CardPreview";
import card from "./images/saints-first.png";

const SaintsPreview = () => {
  return (
    <div className="page">
      <PageHeading title="SAINTS COLLECTION" />
      <CardPreview
        title="Saints Collection"
        src={card}
        alt="Tyler Shough Rookie Patch Auto"
        back="/vault#saints"
      />
    </div>
  );
};

export default SaintsPreview;
