import { useState } from "react";
import Dialog from "./Dialog";
import { requestCards } from "./api";
export default function DeleteDialog({ card, onClose, onDeleted }) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  async function remove() {
    if (busy) return;
    setBusy(true); setError("");
    try {
      await requestCards(`/${card._id}`, { method: "DELETE" });
      onDeleted(card._id); onClose();
    } catch (error) { setError(error.message); setBusy(false); }
  }
  return <Dialog title="Delete card?" busy={busy} onClose={onClose}>
    <p>Remove <strong>{card.title}</strong> from The Collective? This cannot be undone.</p>
    <div className="collective-actions">
      <button type="button" disabled={busy} onClick={onClose}>Cancel</button>
      <button className="button" type="button" disabled={busy} onClick={remove}>{busy ? "Deleting…" : "Delete card"}</button>
    </div>
    {error && <p role="alert" className="collective-error">{error}</p>}
  </Dialog>;
}
