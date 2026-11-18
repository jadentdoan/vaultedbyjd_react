import { useEffect, useRef } from "react";

export default function Dialog({ title, busy, onClose, children }) {
  const ref = useRef(null);
  useEffect(() => {
    const dialog = ref.current;
    const trigger = document.activeElement;
    dialog.showModal();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previous;
      trigger?.focus();
    };
  }, []);
  return (
    <dialog ref={ref} className="collective-dialog" aria-labelledby="collective-dialog-title"
      onCancel={(event) => { event.preventDefault(); if (!busy) onClose(); }}>
      <div className="collective-dialog-heading">
        <h2 id="collective-dialog-title">{title}</h2>
        <button type="button" aria-label="Close dialog" disabled={busy} onClick={onClose}>×</button>
      </div>
      {children}
    </dialog>
  );
}
