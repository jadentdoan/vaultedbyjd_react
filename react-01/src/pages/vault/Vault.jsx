import "./Vault.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Collective from "../../components/collective/Collective";
import Card from "../../components/card/Card";
import { API_URL } from "../../components/collective/api";

const Vault = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [retry, setRetry] = useState(0);
  const { hash } = useLocation();

  useEffect(() => {
    const controller = new AbortController();
    async function loadCollections() {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(`${API_URL}/api/collections`, { signal: controller.signal });
        if (!response.ok) throw new Error("Unable to load collections.");
        const data = await response.json();
        if (!Array.isArray(data) || data.some((group) => !group || !Array.isArray(group.cards))) {
          throw new Error("Unexpected collection data.");
        }
        if (!controller.signal.aborted) setCollections(data);
      } catch (error) {
        if (!controller.signal.aborted) setError("Unable to load your collections. Check that the backend is running and try again.");
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }
    loadCollections();
    return () => controller.abort();
  }, [retry]);

  useEffect(() => {
    if (!loading && hash) document.getElementById(hash.slice(1))?.scrollIntoView();
  }, [collections, loading, hash]);

  return (
    <div className="page">
      <section className="vault-banner">
        <h1>THE VAULT</h1>
      </section>
      <div className="container page-content vault-galleries">
        {loading && <p role="status">Loading your collections…</p>}
        {error && <div role="alert"><p>{error}</p><button className="button" onClick={() => setRetry((value) => value + 1)}>Try again</button></div>}
        {!loading && !error && collections.length === 0 && <p>No collections yet.</p>}
        {collections.map((collection) => (
          <section className="gallery-row" id={collection.id} key={collection.id}>
            <h2>{collection.title}</h2>
            <div className="gallery">
              {collection.cards.map((card) => (
                <Card
                  key={card.id}
                  {...card}
                  src={`${API_URL}${card.src}`}
                />
              ))}
            </div>
          </section>
        ))}
        <Collective />
      </div>
    </div>
  );
};

export default Vault;
