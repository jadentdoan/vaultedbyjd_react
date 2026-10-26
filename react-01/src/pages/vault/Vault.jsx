import "./Vault.css";
import Card from "../../components/card/Card";
import card1 from "./images/saints-first.png";
import card2 from "./images/saints-second.png";
import card3 from "./images/saints-third.png";
import card4 from "./images/college-first.png";
import card5 from "./images/college-second.png";
import card6 from "./images/college-third.png";
import card7 from "./images/gold-first.png";
import card8 from "./images/gold-second.png";
import card9 from "./images/gold-third.png";

const Vault = () => {
  return (
    <div className="page">
      <section className="vault-banner">
        <h1>THE VAULT</h1>
      </section>
      <div className="container page-content vault-galleries">
        <section className="gallery-row" id="saints">
          <h2>SAINTS COLLECTION</h2>
          <div className="gallery">
            <Card
              title="Tyler Shough"
              src={card1}
              collection="Saints Collection"
              sport="Football"
              details="Rookie Patch Auto"
              preview="/saints-preview"
            />
            <Card
              title="Drew Brees"
              src={card2}
              collection="Saints Collection"
              sport="Football"
              details="On-Card Autograph"
              preview=""
            />
            <Card
              title="Chris Olave"
              src={card3}
              collection="Saints Collection"
              sport="Football"
              details="Select Cosmic"
              preview=""
            />
          </div>
        </section>
        <section className="gallery-row" id="collegiate">
          <h2>COLLEGIATE COLLECTION</h2>
          <div className="gallery">
            <Card
              title="Ja'Marr Chase"
              src={card4}
              collection="Collegiate Collection"
              sport="Football"
              details="Immaculate Rookie On-Card Autograph"
              preview="/collegiate-preview"
            />
            <Card
              title="LaNorris Sellers"
              src={card5}
              collection="Collegiate Collection"
              sport="Football"
              details="Autograph"
              preview=""
            />
            <Card
              title="LSU Team Trio"
              src={card6}
              collection="Collegiate Collection"
              sport="Football"
              details="National Treasures team materials"
              preview=""
            />
          </div>
        </section>
        <section className="gallery-row" id="gold">
          <h2>OTHER GOLD</h2>
          <div className="gallery">
            <Card
              title="Johnny Juzang"
              src={card7}
              collection="Other Gold"
              sport="Basketball"
              details="Bowman U autograph"
              preview="/gold-preview"
            />
            <Card
              title="Munetaka Murakami"
              src={card8}
              collection="Other Gold"
              sport="Baseball"
              details="Stadium Sluggers"
              preview=""
            />
            <Card
              title="Ilia Topuria"
              src={card9}
              collection="Other Gold"
              sport="UFC"
              details="Optic Rated Rookie"
              preview=""
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Vault;
