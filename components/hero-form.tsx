"use client";

import { useRef, useState } from "react";

const MAKE_WEBHOOK = "https://hook.us2.make.com/e4ytnr0cmszo7claksslcnwhjaasrmlz";

type Status = "idle" | "sending" | "success" | "error";

export function HeroForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    const formData = new FormData(form);
    const services = formData.getAll("services").map((v) => String(v));

    const data = {
      name: String(formData.get("name") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      services,
      message: String(formData.get("message") ?? "").trim(),
      source: "hero-form",
      submittedAt: new Date().toISOString(),
    };

    try {
      const res = await fetch(MAKE_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div style={{ padding: "24px 0", textAlign: "center" }}>
        <p style={{ fontSize: "18px", fontWeight: 800, color: "#fff", margin: "0 0 8px" }}>
          Request received.
        </p>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", margin: 0 }}>
          A ClearPath advisor will follow up within one business day.
        </p>
      </div>
    );
  }

  return (
    <>
      <h3 className="hfc-title">Get your free assessment</h3>
      <p className="hfc-sub">No commitment. We&apos;ll map your stack and hand you a written plan.</p>
      <form id="hero-form" className="hfc-form" ref={formRef} onSubmit={handleSubmit}>
        <div className="hfc-row">
          <input type="text" name="name" placeholder="Your name" required />
          <input type="text" name="company" placeholder="Company" />
        </div>
        <input type="email" name="email" placeholder="Email address" required />
        <input type="tel" name="phone" placeholder="Phone number" />
        <div>
          <p className="hfc-label">Services you&apos;re interested in</p>
          <div className="hfc-chips">
            <label className="hfc-chip">
              <input type="checkbox" name="services" value="Microsoft 365" />
              Microsoft 365
            </label>
            <label className="hfc-chip">
              <input type="checkbox" name="services" value="Azure Migration" />
              Azure Migration
            </label>
            <label className="hfc-chip">
              <input type="checkbox" name="services" value="Managed Security" />
              Managed Security
            </label>
            <label className="hfc-chip">
              <input type="checkbox" name="services" value="Automation & AI" />
              Automation &amp; AI
            </label>
            <label className="hfc-chip">
              <input type="checkbox" name="services" value="Website & SEO" />
              Website &amp; SEO
            </label>
            <label className="hfc-chip">
              <input type="checkbox" name="services" value="Google Business Page" />
              Google Business
            </label>
            <label className="hfc-chip">
              <input type="checkbox" name="services" value="Advertising" />
              Advertising
            </label>
            <label className="hfc-chip">
              <input type="checkbox" name="services" value="Not sure" />
              Not sure yet
            </label>
          </div>
        </div>
        <textarea name="message" placeholder="What are you looking to improve?" rows={2}></textarea>
        <button type="submit" className="hfc-btn" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Get My Free Assessment →"}
        </button>
        <p className="hfc-note">No spam. No commitment. Just a clear picture.</p>
      </form>
    </>
  );
}
