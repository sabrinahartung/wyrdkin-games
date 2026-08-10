import { useState, type FormEvent } from "react";
import { contact } from "../content";
import PixelButton from "./ui/PixelButton";

type Status = "idle" | "sending" | "sent" | "error";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const fieldClass =
  "w-full border-2 border-haze bg-void/60 px-3 py-2 font-retro text-xl text-ink placeholder:text-muted/50 focus:border-neon focus:outline-none";
const labelClass =
  "mb-2 block font-pixel text-[9px] uppercase tracking-wider text-muted";

// Guards against shipping the placeholder key by accident.
const configured =
  !!contact.accessKey && !contact.accessKey.startsWith("PASTE_");

/**
 * Contact form for the footer. No backend: it posts straight to Web3Forms,
 * which emails us the message (see the `contact` block in content.ts for why
 * the access key is fine in public source).
 */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState(contact.error);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Grab the form before awaiting — `currentTarget` is gone after the event.
    const form = event.currentTarget;

    if (!configured) {
      setError("The contact form isn't set up yet — no access key.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const fields = Object.fromEntries(new FormData(form));
      // Put the request type in the subject so it's filterable in the inbox.
      const subject = fields.topic
        ? `${contact.subject} — ${fields.topic}`
        : contact.subject;

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: contact.accessKey,
          subject,
          // So hitting reply in the inbox answers the sender.
          replyto: fields.email,
          ...fields,
        }),
      });
      const result = await response.json();

      if (result.success) {
        form.reset();
        setStatus("sent");
      } else {
        setError(result.message || contact.error);
        setStatus("error");
      }
    } catch {
      setError(contact.error);
      setStatus("error");
    }
  }

  return (
    <div id="contact" className="mx-auto max-w-xl text-left">
      <p className="text-center font-pixel text-[10px] uppercase tracking-widest text-cyan">
         {contact.eyebrow}
      </p>
      <h3 className="mt-4 text-center font-pixel text-lg text-ink">
        {contact.heading}
      </h3>
      <p className="mt-3 text-center font-retro text-xl text-muted">
        {contact.blurb}
      </p>

      {status === "sent" ? (
        <div className="pixel-card mt-8 p-8 text-center">
          <p className="font-pixel text-sm leading-relaxed text-cyan">
            {contact.success}
          </p>
          <div className="mt-6">
            <PixelButton
              type="button"
              variant="secondary"
              onClick={() => setStatus("idle")}
            >
              Send another
            </PixelButton>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="pixel-card mt-8 p-6 sm:p-8">
          {/* Honeypot: hidden from people, irresistible to bots. Web3Forms
              rejects any submission that ticks it. */}
          <input
            type="checkbox"
            name="botcheck"
            className="hidden"
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <div className="mb-5">
            <label className={labelClass} htmlFor="contact-topic">
              Request type
            </label>
            {/* `appearance-none` strips the OS chrome so the field matches the
                other inputs; the caret below replaces it. */}
            <div className="relative">
              {/* The prompt is value="" and the field is required, so `invalid:`
                  dims it exactly while nothing is picked — no state needed, and
                  form.reset() restores it on its own. */}
              <select
                id="contact-topic"
                name="topic"
                required
                defaultValue=""
                className={`${fieldClass} appearance-none pr-10 invalid:text-muted/50`}
              >
                <option value="" disabled>
                  {contact.topicPrompt}
                </option>
                {contact.topics.map((topic) => (
                  <option key={topic} value={topic} className="bg-void">
                    {topic}
                  </option>
                ))}
              </select>
              <span
                aria-hidden
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 font-pixel text-[8px] text-muted"
              >
                ▼
              </span>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="contact-name">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Your name"
                className={fieldClass}
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="contact-email">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@example.com"
                className={fieldClass}
              />
            </div>
          </div>

          <div className="mt-5">
            <label className={labelClass} htmlFor="contact-message">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={5}
              placeholder="What's on your mind?"
              className={`${fieldClass} resize-y`}
            />
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
            <PixelButton
              type="submit"
              variant="primary"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </PixelButton>

            {/* aria-live so screen readers hear the failure too */}
            <p
              role="status"
              aria-live="polite"
              className="font-retro text-lg text-gold"
            >
              {status === "error" ? error : ""}
            </p>
          </div>

          {import.meta.env.DEV && !configured && (
            <p className="mt-5 border-2 border-gold/60 bg-gold/10 p-3 font-retro text-lg text-gold">
              Dev note: paste a Web3Forms access key into `contact.accessKey`
              in src/content.ts — until then this form can't send.
            </p>
          )}
        </form>
      )}

      <p className="mt-4 text-center font-retro text-base text-muted/70">
        {contact.note}
      </p>
    </div>
  );
}
