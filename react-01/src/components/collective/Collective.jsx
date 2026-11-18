import { useEffect, useState } from "react";
import Card from "../card/Card";
import AddDialog from "./AddDialog";
import EditDialog from "./EditDialog";
import DeleteDialog from "./DeleteDialog";
import { API_URL, requestCards } from "./api";
import "./Collective.css";

export default function Collective() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [retry, setRetry] = useState(0);
  const [dialog, setDialog] = useState(null);
  const [notice, setNotice] = useState("");
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true); setError("");
    requestCards("", { signal: controller.signal })
      .then((data) => { if (!Array.isArray(data)) throw new Error("Unexpected card list."); setCards(data); })
      .catch((error) => { if (!controller.signal.aborted) setError(error.message); })
      .finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => controller.abort();
  }, [retry]);
  const close = () => setDialog(null);
  function saved(card) {
    setCards((previous) => previous.some((item) => item._id === card._id)
      ? previous.map((item) => item._id === card._id ? card : item) : [...previous, card]);
    setNotice(dialog?.type === "edit" ? "Card updated." : "Card added to The Collective.");
  }
  return <section className="collective" id="collective" aria-labelledby="collective-title">
    <div className="collective-heading">
      <div><p className="eyebrow">Fan submitted cards</p><h2 id="collective-title">The Collective</h2>
        <p>A shared vault for the cards you love. Add yours to the collection.</p></div>
      <button className="button" disabled={loading || Boolean(error)} onClick={() => setDialog({ type: "add" })}>+ Add a card</button>
    </div>
    <p role="status">{loading ? "Loading The Collective…" : notice}</p>
    {error ? <div role="alert"><p>{error}</p><button onClick={() => setRetry((value) => value + 1)}>Try again</button></div>
      : !loading && cards.length === 0 ? <div className="collective-empty">The Collective starts with you. Submit the first card.</div> : null}
    <div className="collective-grid">{cards.map((card) => <div key={card._id}>
      <Card {...card} src={`${API_URL}${card.src}`} />
      <div className="collective-actions">
        <button aria-label={`Edit ${card.title}`} onClick={() => setDialog({ type: "edit", card })}>Edit</button>
        <button aria-label={`Delete ${card.title}`} onClick={() => setDialog({ type: "delete", card })}>Delete</button>
      </div>
    </div>)}</div>
    {dialog?.type === "add" && <AddDialog onClose={close} onSaved={saved} />}
    {dialog?.type === "edit" && <EditDialog card={dialog.card} onClose={close} onSaved={saved} />}
    {dialog?.type === "delete" && <DeleteDialog card={dialog.card} onClose={close} onDeleted={(id) => {
      setCards((previous) => previous.filter((card) => card._id !== id)); setNotice("Card deleted.");
    }} />}
  </section>;
}
