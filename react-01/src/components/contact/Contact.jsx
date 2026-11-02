import { useRef, useState } from "react";
import toast from "react-hot-toast";
import "./Contact.css";

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");
  const pending = useRef(false);

  const sendMessage = async (event) => {
    event.preventDefault();
    if (pending.current) return;
    const form = event.currentTarget;
    const formData = new FormData(form);
    for (const field of ["first-name", "last-name", "message"]) {
      if (!formData.get(field).trim()) {
        setStatus("Please complete all required fields.");
        form.elements.namedItem(field).focus();
        return;
      }
    }
    // Reuse the public Web3Forms access key from Project Part 7.
    formData.append("access_key", "d8041c84-adb7-46d7-819d-d9268b19847d");
    formData.append("subject", "VAULTED by JD Contact Form");
    pending.current = true;
    setSending(true);
    setStatus("Sending your message...");
    const toastId = toast.loading("Sending your message...");
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST", body: formData, signal: controller.signal,
      });
      const data = await response.json();
      if (!response.ok || !data.success) throw new Error("Submission failed");
      const message = "Message sent! Thanks for reaching out.";
      setStatus(message);
      toast.success(message, { id: toastId });
      form.reset();
    } catch (error) {
      const message = error.name === "AbortError"
        ? "The request timed out. Please try again or email JD directly."
        : "We couldn't send your message. Please try again or email JD directly.";
      setStatus(message);
      toast.error(message, { id: toastId });
    } finally {
      clearTimeout(timeout);
      pending.current = false;
      setSending(false);
    }
  };

  return (
    <section className="contact-box">
      <h2>REACH <br />OUT</h2>
      <form className="contact-form" onSubmit={sendMessage}>
        <p className="contact-intro">Tell JD about your collection. All fields are required except phone.</p>
        <fieldset disabled={sending}>
          <div className="contact-fields">
            <div className="name-fields">
              <label>First name<input name="first-name" autoComplete="given-name" required maxLength={100} /></label>
              <label>Last name<input name="last-name" autoComplete="family-name" required maxLength={100} /></label>
            </div>
            <label>Email<input type="email" name="email" autoComplete="email" required maxLength={254} /></label>
            <label>Phone (optional)<input type="tel" name="phone" autoComplete="tel" placeholder="(000) 000-0000" maxLength={40} /></label>
          </div>
          <label className="message-field">Tell us about your cards
            <textarea name="message" required rows={6} maxLength={5000} placeholder="Add details here..." />
          </label>
          <input type="checkbox" name="botcheck" className="contact-honeypot" tabIndex={-1} />
          <button className="button" type="submit" disabled={sending}>{sending ? "Sending..." : "Send message"}</button>
        </fieldset>
        <p className="form-note" role="status">{status}</p>
        <a className="contact-email" href="mailto:jaden.jtdcards@gmail.com">jaden.jtdcards@gmail.com</a>
      </form>
    </section>
  );
};

export default Contact;
