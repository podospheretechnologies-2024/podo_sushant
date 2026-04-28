import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import CursorAura from "./components/CursorAura";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", text: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", text: "" });

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data?.message || "Unable to send enquiry right now.");

      setStatus({ type: "success", text: "Enquiry sent successfully. Our team will contact you shortly." });
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setStatus({ type: "error", text: error.message || "Failed to send enquiry. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f7f6f3] text-[#080810]">
      <CursorAura />
      <SiteHeader basePath="/" />

      <section className="px-5 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#e8e6e0] bg-white p-8 md:p-12">
          <div className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#2233ff]">Contact</div>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-[0.95] tracking-[-0.04em] md:text-6xl">
            Book a strategy call and share your business requirement.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#5a5a72]">
            Tell us what you are trying to solve and we will respond with the right direction for systems, growth, or automation.
          </p>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                required
                placeholder="Full name"
                value={form.name}
                onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                className="w-full rounded-xl border border-[#dfe1ea] bg-white px-4 py-3 text-sm text-[#080810] placeholder:text-[#8f93a8] focus:border-[#2233ff] focus:outline-none"
              />
              <input
                type="email"
                required
                placeholder="Email address"
                value={form.email}
                onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                className="w-full rounded-xl border border-[#dfe1ea] bg-white px-4 py-3 text-sm text-[#080810] placeholder:text-[#8f93a8] focus:border-[#2233ff] focus:outline-none"
              />
              <input
                type="tel"
                required
                placeholder="Phone number"
                value={form.phone}
                onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
                className="w-full rounded-xl border border-[#dfe1ea] bg-white px-4 py-3 text-sm text-[#080810] placeholder:text-[#8f93a8] focus:border-[#2233ff] focus:outline-none"
              />
              <textarea
                rows={5}
                required
                placeholder="Tell us about your requirement"
                value={form.message}
                onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
                className="w-full resize-none rounded-xl border border-[#dfe1ea] bg-white px-4 py-3 text-sm text-[#080810] placeholder:text-[#8f93a8] focus:border-[#2233ff] focus:outline-none"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center rounded-full bg-[#2233ff] px-6 py-3 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Enquiry"}
              </button>
              {status.text ? (
                <p className={`text-sm ${status.type === "success" ? "text-green-700" : "text-red-600"}`}>{status.text}</p>
              ) : null}
            </form>

            <div className="rounded-[1.5rem] bg-[#f7f6f3] p-6">
              <h2 className="text-xl font-bold">Direct contact</h2>
              <div className="mt-5 space-y-4 text-sm text-[#5a5a72]">
                <a href="tel:+918595611983" className="flex items-center gap-3 transition hover:text-[#2233ff]">
                  <Phone className="h-4 w-4" /> +91 8595611983
                </a>
                <a href="mailto:info@podospheretechnologies.com" className="flex items-center gap-3 transition hover:text-[#2233ff]">
                  <Mail className="h-4 w-4" /> info@podospheretechnologies.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter basePath="/" />
    </div>
  );
}
