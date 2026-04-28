import { ArrowRight } from "lucide-react";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";
import CursorAura from "./components/CursorAura";
import { caseStudiesData } from "./data/caseStudiesData";

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-[#f7f6f3] text-[#080810]">
      <CursorAura />
      <SiteHeader basePath="/" />

      <section className="px-5 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#2233ff]">Case Studies</div>
          <h1 className="mt-4 max-w-4xl font-sans text-4xl font-bold leading-[0.95] tracking-[-0.04em] md:text-6xl">
            Real projects with measurable operational impact.
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-[#5a5a72]">
            Explore consulting and implementation case studies across automation, AI systems, and business performance workflows.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {caseStudiesData.map((item) => (
              <article
                key={item.slug}
                className="group rounded-[2rem] border border-[#e8e6e0] bg-white p-8 shadow-[0_18px_50px_rgba(0,0,0,0.04)] transition duration-300 hover:-translate-y-2 hover:scale-[1.01] hover:border-[#2233ff] hover:shadow-[0_25px_55px_rgba(34,51,255,0.12)]"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#2233ff]/8 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#2233ff]">
                    {item.type}
                  </span>
                  <span className="text-sm font-semibold text-[#5a5a72]">{item.company}</span>
                </div>
                <h2 className="mt-6 font-sans text-3xl font-bold leading-tight tracking-[-0.03em]">{item.title}</h2>
                <p className="mt-4 text-base leading-8 text-[#5a5a72]">{item.result}</p>
                <a href={`/case-studies/${item.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#2233ff] transition duration-300 group-hover:translate-x-1">
                  Open detailed case study <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter basePath="/" />
    </div>
  );
}
