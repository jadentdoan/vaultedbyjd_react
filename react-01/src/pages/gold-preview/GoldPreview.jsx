import "./GoldPreview.css";
import PageHeading from "../../components/pageHeading/PageHeading";
import CardPreview from "../../components/cardPreview/CardPreview";
import card from "./images/gold-first.png";

const GoldPreview = () => {
  return (
    <div className="page">
      <PageHeading title="OTHER GOLD" />
      <CardPreview
        title="Other Gold"
        src={card}
        alt="Johnny Juzang Bowman U autograph"
        back="/vault#gold"
      />
    </div>
  );
};

export default GoldPreview;
