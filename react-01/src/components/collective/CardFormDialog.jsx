import { useEffect, useState } from "react";
import Dialog from "./Dialog";
import { API_URL, requestCards } from "./api";

export default function CardFormDialog({ card, onClose, onSaved }) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(card ? `${API_URL}${card.src}` : "");
  useEffect(() => {
    if (!file) { setPreview(card ? `${API_URL}${card.src}` : ""); return; }
    const url = URL.createObjectURL(file);
    setPreview(url);
    return () => URL.revokeObjectURL(url);
  }, [file, card]);
  async function submit(event) {
    event.preventDefault();
    if (busy) return;
    const data = new FormData(event.currentTarget);
    data.set("collection", "The Collective");
    data.set("preview", "");
    if (!file) data.delete("img");
    setBusy(true);
    setError("");
    try {
      const saved = await requestCards(card ? `/${card._id}` : "", { method: card ? "PUT" : "POST", body: data });
      onSaved(saved);
      onClose();
    } catch (error) { setError(error.message); setBusy(false); }
  }
  return (
    <Dialog title={card ? "Edit card" : "Add to The Collective"} busy={busy} onClose={onClose}>
      <p>Share a card in The Collective. Enter its title, sport, and details, and {card ? "keep or replace its image" : "upload an image"}.</p>
      <form onSubmit={submit}>
        <fieldset disabled={busy}>
          {[["title", "Card title / player", 120], ["sport", "Sport", 80]].map(([name, label, max]) => (
            <label key={name} htmlFor={`card-${name}`}>{label}
              <input id={`card-${name}`} name={name} required maxLength={max} defaultValue={card?.[name] || ""} />
            </label>
          ))}
          <label htmlFor="card-details">Card details
            <textarea id="card-details" name="details" required maxLength={2000} rows={3} defaultValue={card?.details || ""} placeholder="Set, year, parallel, autograph, grade…" />
          </label>
          <label htmlFor="card-image">{card ? "Replace image (optional)" : "Card image"}
            <input id="card-image" name="img" type="file" required={!card} accept="image/png,image/jpeg,image/webp"
              onChange={(event) => {
                const selected = event.target.files[0];
                if (selected && selected.size > 5 * 1024 * 1024) {
                  event.target.value = ""; setFile(null); setError("Image must be 5 MB or smaller.");
                } else { setFile(selected || null); setError(""); }
              }} />
          </label>
          <small>PNG, JPEG, or WebP. Maximum 5 MB.</small>
          {preview && <img className="collective-image-preview" src={preview} alt="Selected card preview" />}
          <div className="collective-actions">
            <button type="button" onClick={onClose}>Cancel</button>
            <button className="button" type="submit">{busy ? "Saving…" : card ? "Save changes" : "Add card"}</button>
          </div>
        </fieldset>
        {error && <p role="alert" className="collective-error">{error}</p>}
      </form>
    </Dialog>
  );
}
