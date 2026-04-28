import { useState } from "react";
import { ArrowRight, ChevronDown, Globe, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const solutionMenu = [
  { label: "Marketing consultancy", href: "https://media.podospheretechnologies.com/" },
  { label: "Sales consultancy", href: "/sales-consultancy" },
  { label: "Funding consultancy", href: "https://media.podospheretechnologies.com/seed-funding-consultancy/" },
  { label: "Technology consultancy", href: "#technology-consultancy" },
  { label: "Security", href: "https://primesecuresurveillance.com/" },
  { label: "Investment and finance", href: "https://evriddhi.in/" },
];

const socials = [
  { icon: Globe, href: "https://podospheretechnologies.com/", label: "Website" },
  { icon: Globe, href: "https://kotechdigitalhub.com/", label: "Kotech" },
  { icon: Mail, href: "mailto:info@podospheretechnologies.com", label: "Email" },
];

function withBase(hash, basePath) {
  if (!hash.startsWith("#")) return hash;
  const normalized = basePath.endsWith("/") ? basePath.slice(0, -1) : basePath;
  return `${normalized}${hash}`;
}

export function SiteHeader({ basePath = "" }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const logoSrc = "/podosphere-logo.png";
  const marqueeText =
    "Podosphere builds momentum: strategy + systems + automation + growth + sales clarity for ambitious businesses.";

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-[#2d2f55] bg-[#0b0c1d] text-white">
        <div className="mx-auto max-w-7xl overflow-hidden px-5 lg:px-8">
          <motion.div
            className="flex w-max items-center gap-10 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#b8c0ff]"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 18, ease: "linear", repeat: Infinity }}
          >
            <span>{marqueeText}</span>
            <span>{marqueeText}</span>
            <span>{marqueeText}</span>
            <span>{marqueeText}</span>
          </motion.div>
        </div>
      </div>
      <div className="border-b border-[#e8e6e0] bg-[#f7f6f3]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href={basePath || "#home"} className="flex items-center transition duration-300 hover:scale-[1.02]">
            <img src={logoSrc} alt="Podosphere Technologies" className="h-10 w-auto object-contain transition duration-300 md:h-11" />
          </a>

          <nav className="hidden items-center gap-6 xl:flex">
            <div className="group relative">
              <button
                type="button"
                className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#5a5a72] transition duration-300 hover:-translate-y-0.5 hover:text-[#2233ff]"
              >
                Solutions
                <ChevronDown className="h-4 w-4 transition duration-300 group-hover:rotate-180" />
              </button>
              <div className="invisible absolute left-0 top-full z-50 mt-3 w-72 rounded-2xl border border-[#e8e6e0] bg-white p-2 opacity-0 shadow-[0_18px_40px_rgba(8,8,16,0.12)] transition-all duration-150 group-hover:visible group-hover:opacity-100">
                {solutionMenu.map((item) => (
                  <a
                    key={item.label}
                    href={item.href.startsWith("#") ? withBase(item.href, basePath || "") : item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="block rounded-xl px-4 py-3 text-sm font-semibold capitalize text-[#5a5a72] transition duration-300 hover:translate-x-1 hover:bg-[#f7f6f3] hover:text-[#2233ff]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
            <a href="/case-studies" className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#5a5a72] transition duration-300 hover:-translate-y-0.5 hover:text-[#2233ff]">
              Case Studies
            </a>
            <div className="group relative">
              <button
                type="button"
                className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-[#5a5a72] transition duration-300 hover:-translate-y-0.5 hover:text-[#2233ff]"
              >
                Products
                <ChevronDown className="h-4 w-4 transition duration-300 group-hover:rotate-180" />
              </button>
              <div className="invisible absolute left-0 top-full z-50 mt-3 w-64 rounded-2xl border border-[#e8e6e0] bg-white p-2 opacity-0 shadow-[0_18px_40px_rgba(8,8,16,0.12)] transition-all duration-150 group-hover:visible group-hover:opacity-100">
                <a
                  href={withBase("#products", basePath || "")}
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-[#5a5a72] transition duration-300 hover:translate-x-1 hover:bg-[#f7f6f3] hover:text-[#2233ff]"
                >
                  LeadSphere AI
                </a>
                <a
                  href={withBase("#products", basePath || "")}
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-[#5a5a72] transition duration-300 hover:translate-x-1 hover:bg-[#f7f6f3] hover:text-[#2233ff]"
                >
                  AutoROAS AI
                </a>
              </div>
            </div>
            <a href={withBase("#whats-new-ai", basePath || "")} className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#5a5a72] transition duration-300 hover:-translate-y-0.5 hover:text-[#2233ff]">
              Whats New In AI
            </a>
          </nav>

          <a
            href="/contact"
            className="hidden rounded-full bg-[#2233ff] px-5 py-3 text-[11px] font-extrabold uppercase tracking-[0.12em] text-white shadow-lg shadow-[#2233ff]/25 transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_18px_40px_rgba(34,51,255,0.35)] md:inline-flex"
          >
            Book Strategy Call
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-xl border border-[#e8e6e0] bg-white p-2 text-[#080810] xl:hidden"
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="border-t border-[#e8e6e0] bg-white px-5 py-4 xl:hidden"
            >
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => setMobileSolutionsOpen((prev) => !prev)}
                  className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm font-bold uppercase tracking-[0.08em] text-[#5a5a72]"
                >
                  Solutions
                  <ChevronDown className={`h-4 w-4 transition ${mobileSolutionsOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileSolutionsOpen && (
                  <div className="rounded-xl bg-[#f7f6f3] p-2">
                    {solutionMenu.map((item) => (
                      <a
                        key={item.label}
                        href={item.href.startsWith("#") ? withBase(item.href, basePath || "") : item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                        className="block rounded-lg px-3 py-2 text-sm font-semibold text-[#5a5a72]"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}

                <a href="/case-studies" className="block rounded-xl px-3 py-3 text-sm font-bold uppercase tracking-[0.08em] text-[#5a5a72]" onClick={() => setMobileOpen(false)}>
                  Case Studies
                </a>

                <button
                  type="button"
                  onClick={() => setMobileProductsOpen((prev) => !prev)}
                  className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm font-bold uppercase tracking-[0.08em] text-[#5a5a72]"
                >
                  Products
                  <ChevronDown className={`h-4 w-4 transition ${mobileProductsOpen ? "rotate-180" : ""}`} />
                </button>
                {mobileProductsOpen && (
                  <div className="rounded-xl bg-[#f7f6f3] p-2">
                    <a href={withBase("#products", basePath || "")} className="block rounded-lg px-3 py-2 text-sm font-semibold text-[#5a5a72]" onClick={() => setMobileOpen(false)}>
                      LeadSphere AI
                    </a>
                    <a href={withBase("#products", basePath || "")} className="block rounded-lg px-3 py-2 text-sm font-semibold text-[#5a5a72]" onClick={() => setMobileOpen(false)}>
                      AutoROAS AI
                    </a>
                  </div>
                )}

                <a href={withBase("#whats-new-ai", basePath || "")} className="block rounded-xl px-3 py-3 text-sm font-bold uppercase tracking-[0.08em] text-[#5a5a72]" onClick={() => setMobileOpen(false)}>
                  Whats New In AI
                </a>
              </div>
              <a
                href="/contact"
                className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#2233ff] px-5 py-3 text-[11px] font-extrabold uppercase tracking-[0.12em] text-white"
                onClick={() => setMobileOpen(false)}
              >
                Book Strategy Call
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export function SiteFooter({ basePath = "" }) {
  const logoSrc = "/podosphere-logo.png";

  return (
    <footer className="bg-[#080810] px-5 py-14 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <img src={logoSrc} alt="Podosphere Technologies" className="h-10 w-auto object-contain md:h-11" />
          <p className="mt-5 max-w-xl text-sm leading-8 text-white/60">
            Consulting-led technology, automation, marketing, sales enablement, cyber security, and intelligent monitoring solutions for
            businesses that want more clarity and better growth execution.
          </p>
        </div>

        <div>
          <div className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-white/45">Contact</div>
          <div className="mt-5 space-y-4 text-sm text-white/75">
            <a href="tel:+918595611983" className="flex items-start gap-3 transition duration-300 hover:translate-x-1 hover:text-white">
              <Phone className="mt-1 h-4 w-4" /> +91 8595611983
            </a>
            <a href="mailto:info@podospheretechnologies.com" className="flex items-start gap-3 transition duration-300 hover:translate-x-1 hover:text-white">
              <Mail className="mt-1 h-4 w-4" /> info@podospheretechnologies.com
            </a>
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 h-4 w-4" /> 107, Amarpali Plaza, Amarpali Circle, Vaishali Nagar, Jaipur 302021
            </div>
          </div>
        </div>

        <div>
          <div className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-white/45">Social & Links</div>
          <div className="mt-5 flex flex-wrap gap-3">
            {socials.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/75 transition duration-300 hover:-translate-y-1 hover:scale-105 hover:border-[#2233ff] hover:text-white"
                  aria-label={item.label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
          <a href={withBase("#book-call", basePath || "")} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#8fa0ff] transition duration-300 hover:translate-x-1 hover:text-white">
            Book your consultancy call <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
