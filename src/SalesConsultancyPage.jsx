import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";
import CursorAura from "./components/CursorAura";

export default function SalesConsultancyPage() {
  const focusAreas = [
    "Sales process design and audit",
    "Lead response and follow-up frameworks",
    "Inbound and outbound SOP setup",
    "Sales hiring and onboarding support",
    "Call script and objection handling refinement",
    "Performance dashboard and accountability tracking",
  ];

  return (
    <div className="min-h-screen bg-[#f7f6f3] text-[#080810]">
      <CursorAura />
      <SiteHeader basePath="/" />

      <section className="px-5 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#e8e6e0] bg-white p-8 md:p-12">
          <div className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#2233ff]">Sales Consultancy</div>
          <h1 className="mt-4 max-w-4xl font-sans text-4xl font-bold leading-[0.95] tracking-[-0.04em] md:text-6xl">
            Build a predictable sales engine that converts consistently.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[#5a5a72]">
            We help businesses improve conversion from enquiry to closure through sales hiring strategy, scripts, SOPs, follow-up design,
            accountability dashboards, and process optimization that scales beyond individual performers.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {focusAreas.map((item) => (
              <div key={item} className="rounded-[1.5rem] border border-[#e8e6e0] bg-[#f7f6f3] p-5">
                <CheckCircle2 className="h-5 w-5 text-[#2233ff]" />
                <div className="mt-3 text-sm font-semibold leading-7">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="book-sales-call" className="bg-[#2233ff] px-5 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/20 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-8 md:p-12">
          <div className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-white/70">Next step</div>
          <h2 className="mt-4 max-w-3xl font-sans text-4xl font-bold leading-none tracking-[-0.03em] md:text-5xl">
            Book your sales consultancy call.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/80">
            Get a practical roadmap to improve conversions, tighten team process, and turn lead flow into predictable revenue.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="tel:+918595611983"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-extrabold uppercase tracking-[0.12em] text-[#2233ff] transition hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <a
              href="/#case-studies"
              className="inline-flex items-center gap-2 rounded-full border border-white/35 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-white/10"
            >
              View Case Studies <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
      <SiteFooter basePath="/" />
    </div>
  );
}
