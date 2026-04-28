import { ArrowLeft } from "lucide-react";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";
import CursorAura from "./components/CursorAura";

export default function CaseStudyDetailPage({ caseStudy }) {
  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-[#f7f6f3] text-[#080810]">
        <CursorAura />
        <SiteHeader basePath="/" />
        <section className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#e8e6e0] bg-white p-8 md:p-12">
            <h1 className="font-sans text-4xl font-bold tracking-[-0.03em]">Case study not found</h1>
            <a href="/case-studies" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#2233ff]">
              <ArrowLeft className="h-4 w-4" /> Back to case studies
            </a>
          </div>
        </section>
        <SiteFooter basePath="/" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f6f3] text-[#080810]">
      <CursorAura />
      <SiteHeader basePath="/" />

      <section className="px-5 py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <a href="/case-studies" className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#5a5a72] transition duration-300 hover:-translate-x-1 hover:text-[#2233ff]">
            <ArrowLeft className="h-4 w-4" />
            Back to Case Studies
          </a>

          <div className="mt-8 rounded-[2rem] border border-[#e8e6e0] bg-white p-8 md:p-12">
            <div className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#2233ff]">{caseStudy.type}</div>
            <h1 className="mt-4 max-w-5xl font-sans text-4xl font-bold leading-[0.95] tracking-[-0.04em] md:text-6xl">
              {caseStudy.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#5a5a72]">{caseStudy.result}</p>

            {caseStudy.overview ? (
              <div className="mt-10 rounded-[1.5rem] bg-[#f7f6f3] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(8,8,16,0.08)]">
                <h2 className="text-lg font-bold">Overview</h2>
                <p className="mt-3 text-sm leading-7 text-[#5a5a72]">{caseStudy.overview}</p>
              </div>
            ) : null}

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <div className="rounded-[1.5rem] bg-[#f7f6f3] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(8,8,16,0.08)]">
                <h2 className="text-lg font-bold">Challenge</h2>
                <p className="mt-3 text-sm leading-7 text-[#5a5a72]">{caseStudy.challenge}</p>
              </div>
              <div className="rounded-[1.5rem] bg-[#f7f6f3] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(8,8,16,0.08)]">
                <h2 className="text-lg font-bold">Solution</h2>
                <p className="mt-3 text-sm leading-7 text-[#5a5a72]">{caseStudy.solution}</p>
              </div>
            </div>

            <div className="mt-10 rounded-[1.5rem] border border-[#e8e6e0] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(8,8,16,0.08)]">
              <h2 className="text-lg font-bold">Business Impact</h2>
              <div className="mt-4 space-y-3">
                {caseStudy.impact.map((point) => (
                  <p key={point} className="text-sm leading-7 text-[#5a5a72]">
                    - {point}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-10 rounded-[1.5rem] bg-[#080810] p-6 text-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(8,8,16,0.22)]">
              <h2 className="text-lg font-bold">Tech Stack</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {caseStudy.stack.map((tool) => (
                  <span key={tool} className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] transition duration-300 hover:-translate-y-0.5 hover:bg-white/20">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {caseStudy.screenshots?.length ? (
              <div className="mt-10 rounded-[1.5rem] border border-[#e8e6e0] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(8,8,16,0.08)]">
                <h2 className="text-lg font-bold">Product Screenshots</h2>
                <p className="mt-2 text-sm leading-7 text-[#5a5a72]">
                  Sanitized previews with sensitive information blurred for confidentiality.
                </p>
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {caseStudy.screenshots.map((imagePath, idx) => (
                    <div key={imagePath} className="overflow-hidden rounded-2xl border border-[#e8e6e0] bg-[#f7f6f3]">
                      <img
                        src={imagePath}
                        alt={`${caseStudy.company} screenshot ${idx + 1}`}
                        className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

          </div>
        </div>
      </section>

      <SiteFooter basePath="/" />
    </div>
  );
}
