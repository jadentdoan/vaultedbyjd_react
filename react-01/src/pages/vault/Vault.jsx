import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Card from "../../components/card/Card";
import "./Vault.css";

const API_ORIGIN = "https://vaultedbyjd-backend.onrender.com";

const collections = [
  { name: "Saints Collection", anchor: "saints" },
  { name: "Collegiate Collection", anchor: "collegiate" },
  { name: "Other Gold", anchor: "gold" },
];

const previews = {
  "tyler-shough-rookie-patch-auto": "/saints-preview",
  "jamarr-chase-rookie-auto": "/collegiate-preview",
  "johnny-juzang-chrome-prospect-auto": "/gold-preview",
};

const Vault = () => {
  const [cards, setCards] = useState(null);
  const [error, setError] = useState(false);
  const { hash } = useLocation();

  useEffect(() => {
    const controller = new AbortController();

    const loadCards = async () => {
      try {
        const response = await axios.get(`${API_ORIGIN}/api/vault`, {
          signal: controller.signal,
        });

        if (!Array.isArray(response.data)) {
          throw new Error("The vault API did not return a card list.");
        }

        if (!controller.signal.aborted) setCards(response.data);
      } catch {
        if (!controller.signal.aborted) setError(true);
      }
    };

    loadCards();
    return () => controller.abort();
  }, []);

  useEffect(() => {
    // Loading the cards can move a collection below the original scroll position.
    if (cards && hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    }
  }, [cards, hash]);

  const galleries = new Map(collections.map(({ name }) => [name, []]));

  for (const card of cards ?? []) {
    if (!galleries.has(card.collection)) galleries.set(card.collection, []);
    galleries.get(card.collection).push(card);
  }

  return (
    <div className="page">
      <section className="vault-banner">
        <h1>THE VAULT</h1>
      </section>
      <div className="container page-content vault-galleries">
        {error && <p role="alert">Couldn’t load the vault cards. Refresh to try again.</p>}
        {!error && cards === null && <p role="status">Loading vault cards…</p>}
        {cards?.length === 0 && <p role="status">There are no cards in the vault yet.</p>}

        {Array.from(galleries, ([name, collectionCards]) => (
          <section
            key={name}
            className="gallery-row"
            id={collections.find((collection) => collection.name === name)?.anchor}
          >
            <h2>{name.toUpperCase()}</h2>
            <div className="gallery">
              {collectionCards.map((card) => (
                <Card
                  key={card.id}
                  title={card.title}
                  src={new URL(card.imageUrl, API_ORIGIN).href}
                  players={card.players}
                  sport={card.sport}
                  company={card.company}
                  set={card.set}
                  details={card.details}
                  serialization={card.serialization}
                  preview={previews[card.id]}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Vault;
