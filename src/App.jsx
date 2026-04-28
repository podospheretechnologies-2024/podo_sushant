import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Bot,
  ChartNoAxesCombined,
  Phone,
  ChevronRight,
  Globe,
  Briefcase,
  CheckCircle2,
  Sparkles,
  Mail,
  MapPin,
  Layers3,
  Radar,
  Users,
  Clock3,
  Star,
} from "lucide-react";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";
import CursorAura from "./components/CursorAura";
import { caseStudiesData } from "./data/caseStudiesData";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function SectionHeading({ eyebrow, title, desc, light = false }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={fadeUp}
      transition={{ duration: 0.6 }}
      className="max-w-4xl"
    >
      <div
        className={`mb-4 flex items-center gap-3 text-[11px] font-extrabold uppercase tracking-[0.18em] ${
          light ? "text-[#8fa0ff]" : "text-[#2233ff]"
        }`}
      >
        <span className={`h-[2px] w-8 ${light ? "bg-[#8fa0ff]" : "bg-[#2233ff]"}`} />
        {eyebrow}
      </div>
      <h2
        className={`font-sans text-4xl font-bold leading-none tracking-[-0.03em] md:text-6xl ${
          light ? "text-white" : "text-[#080810]"
        }`}
      >
        {title}
      </h2>
      {desc ? (
        <p className={`mt-6 max-w-3xl text-base leading-8 ${light ? "text-white/65" : "text-[#5a5a72]"}`}>
          {desc}
        </p>
      ) : null}
    </motion.div>
  );
}

function FloatingConsultCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 280);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          className="fixed bottom-5 right-5 z-[70]"
        >
          <a
            href="#book-call"
            className="flex items-center gap-3 rounded-full bg-[#2233ff] px-5 py-3 text-sm font-bold text-white shadow-[0_20px_60px_rgba(34,51,255,0.35)] transition hover:scale-[1.02]"
          >
            <Phone className="h-4 w-4" />
            Book Consultancy Call
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function PodospherePortfolio() {
  const [activePain, setActivePain] = useState(0);
  const interactiveShowcase = [
    {
      title: "AI Workflow Orchestration",
      desc: "Interactive low-code automation flow with agent logic and smart branching.",
      image: "/ai-workflow-showcase.png",
    },
    {
      title: "Modern AI Assistant Experience",
      desc: "Clean conversational interface design focused on high usability and speed.",
      image: "/gemini-ui-showcase.png",
    },
  ];

  const trustStats = [
    { value: "70%", label: "Tech-Led Positioning", desc: "Website, app, ERP, CRM, AI automation, and consulting-first transformation." },
    { value: "30%", label: "Revenue Enablement", desc: "Sales systems and digital marketing aligned to convert visibility into revenue." },
    { value: "360°", label: "Growth Coverage", desc: "From systems and lead funnels to cyber security and business monitoring." },
  ];

  const painPoints = [
    {
      title: "Businesses grow, but operations stay manual.",
      desc: "Teams lose leads, follow-ups break, reporting gets delayed, and founders cannot see what is happening in real time.",
      bullets: ["No centralized lead flow", "Manual reporting", "Disconnected tools"],
    },
    {
      title: "Marketing spends, but conversions stay inconsistent.",
      desc: "Campaigns create interest, but weak landing pages, poor follow-up systems, and unclear funnels block revenue growth.",
      bullets: ["Low funnel visibility", "Weak landing pages", "No CRO process"],
    },
    {
      title: "Sales teams work hard, but systems are missing.",
      desc: "Without SOPs, scripts, hiring support, and structured workflows, growth becomes dependent on individuals, not process.",
      bullets: ["No SOPs", "Poor sales accountability", "Unscalable hiring"],
    },
  ];

  const solutionPillars = [
    {
      icon: Bot,
      title: "Technology & Automation",
      headline: "Build systems that reduce chaos and create control.",
      desc: "We help businesses move from disconnected tools to software-backed, automation-first workflows that support growth.",
      points: ["Websites and landing pages", "Apps, dashboards, CRM and ERP", "AI automation and reporting workflows"],
    },
    {
      icon: ChartNoAxesCombined,
      title: "Growth & Marketing",
      headline: "Generate attention with a stronger conversion journey.",
      desc: "Through Kotech Digital Hub, marketing becomes more than creatives and ads. It becomes a measurable lead engine.",
      points: ["Meta & Google ad systems", "Ad creatives, content, UGC", "Lead capture and CRO improvements"],
    },
    {
      icon: Briefcase,
      title: "Sales Enablement",
      headline: "Turn leads into a repeatable revenue process.",
      desc: "Podo Sale supports sales hiring, process design, SOPs, and sales enablement so businesses can scale with structure.",
      points: ["Inbound and outbound systems", "Sales hiring and scripts", "SOP and performance frameworks"],
    },
    {
      icon: ShieldCheck,
      title: "Security & Monitoring",
      headline: "Protect operations while improving visibility.",
      desc: "Cyber security, AI surveillance, smart monitoring, and drone-led visibility concepts help future-proof business operations.",
      points: ["Cyber security consulting", "AI surveillance use cases", "Monitoring and risk visibility"],
    },
  ];

  const croFeatures = [
    "Sticky consultation CTA on scroll",
    "Conversion-first messaging blocks",
    "Problem-to-solution flow architecture",
    "Trust, proof, and case study sections",
    "High-clarity service segmentation",
    "Lead-focused booking and contact prompts",
  ];

  const services = [
    {
      badge: "Core Focus",
      title: "Technology Consulting & Product Thinking",
      desc: "For founders who need clarity on what to build, what to automate, and what systems will actually create scale.",
      tags: ["Discovery", "Consulting", "Business Systems"],
    },
    {
      badge: "Core Focus",
      title: "High-Performance Websites & Landing Funnels",
      desc: "Not just beautiful design. Conversion-led pages built to generate business enquiries, improve trust, and support sales conversations.",
      tags: ["React", "Landing Pages", "CRO"],
    },
    {
      badge: "Core Focus",
      title: "ERP, CRM & Internal Workflow Systems",
      desc: "Centralize operations, reporting, and team accountability with business systems that simplify execution.",
      tags: ["CRM", "ERP", "Dashboards"],
    },
    {
      badge: "Core Focus",
      title: "AI Automation for Business Operations",
      desc: "Automate repetitive work, internal communication, reporting, lead assignment, and decision support across departments.",
      tags: ["Automation", "AI", "Efficiency"],
    },
    {
      badge: "Growth Engine",
      title: "Kotech Digital Hub for Marketing Growth",
      desc: "Run performance marketing, content systems, ad creative production, and lead acquisition with a dedicated marketing arm.",
      tags: ["Paid Media", "Content", "Lead Gen"],
    },
    {
      badge: "Growth Engine",
      title: "Podo Sale for Revenue Conversion",
      desc: "Support sales teams with hiring, SOPs, scripts, outbound systems, and founder-level revenue process consulting.",
      tags: ["Sales", "Hiring", "SOPs"],
    },
  ];

  const featurePages = [
    "Home with strong positioning and lead hooks",
    "About with founder story and trust-building copy",
    "Solutions page for tech, marketing, sales, and security",
    "Case studies page to show execution thinking",
    "CRO page for conversion philosophy and lead systems",
    "Book consultancy page with appointment CTA",
  ];

  const caseStudies = caseStudiesData;

  const founderCards = [
    {
      name: "Sushant Singh",
      role: "Founder & C.E.O",
      image: "/founder-sushant.jpg",
      bio: "Focused on helping businesses grow through stronger systems, better execution, and consulting that connects technology, sales, and market opportunity.",
    },
    {
      name: "Surbhi Trivedi",
      role: "Co-Founder & C.T.O",
      image: "/founder-surbhi.jpg",
      bio: "Driving the technology and automation vision behind scalable digital products, business software, process intelligence, and implementation strategy.",
    },
  ];

  const socials = [
    
    { icon: Globe, href: "https://podospheretechnologies.com/", label: "Website" },
    { icon: Globe, href: "https://kotechdigitalhub.com/", label: "Kotech" },
    { icon: Mail, href: "mailto:sushant.singh@podospheretechnologies.com", label: "Email" },
  ];

  return (
    <div className="min-h-screen bg-[#f7f6f3] text-[#080810]">
      <CursorAura />
      <FloatingConsultCTA />
      <SiteHeader />

      <section id="home" className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,51,255,0.14),transparent_28%),radial-gradient(circle_at_left,rgba(34,51,255,0.08),transparent_32%)]" />
        <div className="relative mx-auto grid min-h-[78vh] max-w-7xl gap-7 px-5 py-10 lg:h-[calc(100vh-84px)] lg:grid-cols-[1.08fr_0.92fr] lg:gap-6 lg:px-8 lg:py-5 xl:py-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.65 }}
            className="flex flex-col justify-center lg:overflow-hidden"
          >
            <div className="mb-3 inline-flex w-fit items-center gap-2 rounded-full border border-[#2233ff]/15 bg-[#2233ff]/5 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#2233ff]">
              <Sparkles className="h-4 w-4" />
              Consulting-led growth systems for ambitious businesses
            </div>

            <h1 className="max-w-4xl font-sans text-4xl font-bold leading-[0.95] tracking-[-0.05em] md:text-5xl xl:text-[4.2rem]">
              The partner you call when your business needs <span className="text-[#2233ff]">better systems</span>, stronger <span className="text-[#2233ff]">lead flow</span>, and sharper <span className="text-[#2233ff]">execution</span>.
            </h1>

            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-[#5a5a72] lg:max-w-xl">
              Podosphere Technologies helps businesses move from scattered growth efforts to structured execution across software, automation,
              marketing, sales enablement, cyber security, and intelligent monitoring. We do not just build assets. We build momentum.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="#book-call"
                className="group inline-flex items-center gap-2 rounded-full bg-[#2233ff] px-6 py-3.5 text-sm font-extrabold uppercase tracking-[0.12em] text-white shadow-[0_20px_60px_rgba(34,51,255,0.25)] transition hover:-translate-y-0.5"
              >
                Book Consultancy Call
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#solutions"
                className="inline-flex items-center gap-2 rounded-full border border-[#080810] px-6 py-3.5 text-sm font-extrabold uppercase tracking-[0.12em] transition hover:bg-[#080810] hover:text-white"
              >
                Explore Solutions
              </a>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2.5">
              {socials.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d9d9e3] bg-white transition hover:border-[#2233ff] hover:text-[#2233ff]"
                    aria-label={item.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="grid h-full gap-2 rounded-[1.6rem] bg-[#080810] p-2 shadow-[0_30px_90px_rgba(8,8,16,0.18)] lg:max-h-[calc(100vh-140px)]">
              {trustStats.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.55 }}
                  className="rounded-[1.2rem] border border-white/10 bg-white/[0.04] p-5 text-white transition hover:border-[#2233ff] hover:bg-[#2233ff]/10"
                >
                  <div className="font-sans text-3xl font-bold md:text-4xl">{item.value}</div>
                  <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white/50">{item.label}</div>
                  <p className="mt-2 text-xs leading-6 text-white/65 md:text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-[#e8e6e0] bg-white/60">
        <div className="mx-auto grid max-w-7xl gap-0 px-5 lg:grid-cols-3 lg:px-8">
          {[
            ["For founders", "Who need clarity on tech, lead generation, systems, and scalable execution."],
            ["For growth-stage teams", "Who want stronger funnels, better sales process, and clearer operational visibility."],
            ["For modern businesses", "Who want one strategic partner instead of multiple disconnected vendors."],
          ].map(([title, desc]) => (
            <div key={title} className="border-b border-[#e8e6e0] px-0 py-8 lg:border-b-0 lg:border-r lg:px-8 last:border-r-0">
              <div className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#2233ff]">{title}</div>
              <p className="mt-3 text-base leading-8 text-[#5a5a72]">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Interactive product visuals"
            title="Homepage experiences that feel alive, modern, and conversion-ready."
            desc="We integrated interactive visual blocks inspired by real AI workflow and assistant interfaces to make the website more engaging."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {interactiveShowcase.map((item, index) => (
              <motion.article
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.01 }}
                className="group overflow-hidden rounded-[2rem] border border-[#e8e6e0] bg-[#f7f6f3] shadow-[0_18px_50px_rgba(0,0,0,0.04)] transition hover:border-[#2233ff]"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[280px] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="font-sans text-3xl font-bold tracking-[-0.03em]">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5a5a72]">{item.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why businesses choose Podosphere"
            title="Because growth does not fail only from lack of effort. It fails from lack of alignment."
            desc="Most businesses already have pieces in place: a website, a team, marketing activity, or a sales process. What they often do not have is alignment between these pieces. That is where we come in."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] bg-[#080810] p-4 shadow-[0_30px_90px_rgba(8,8,16,0.12)]">
              {painPoints.map((item, index) => (
                <button
                  key={item.title}
                  onClick={() => setActivePain(index)}
                  className={`mb-3 w-full rounded-[1.5rem] border px-6 py-6 text-left transition last:mb-0 ${
                    activePain === index
                      ? "border-[#2233ff] bg-[#2233ff]/15 text-white"
                      : "border-white/10 bg-white/[0.03] text-white/75 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-lg font-semibold leading-8">{item.title}</div>
                      <p className="mt-2 text-sm leading-7 opacity-80">{item.desc}</p>
                    </div>
                    <ChevronRight className={`mt-1 h-5 w-5 transition ${activePain === index ? "translate-x-1" : ""}`} />
                  </div>
                </button>
              ))}
            </div>

            <motion.div
              key={activePain}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-[2rem] border border-[#e8e6e0] bg-white p-8 md:p-10"
            >
              <div className="inline-flex rounded-full bg-[#2233ff]/8 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#2233ff]">
                What this really costs a business
              </div>
              <h3 className="mt-6 font-sans text-4xl font-bold leading-none tracking-[-0.03em]">
                {painPoints[activePain].title}
              </h3>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#5a5a72]">{painPoints[activePain].desc}</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {painPoints[activePain].bullets.map((bullet) => (
                  <div key={bullet} className="rounded-2xl bg-[#f7f6f3] p-5">
                    <CheckCircle2 className="h-5 w-5 text-[#2233ff]" />
                    <div className="mt-3 text-sm font-semibold leading-6">{bullet}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-[1.5rem] bg-[#080810] p-6 text-white">
                <div className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#8fa0ff]">Podosphere approach</div>
                <p className="mt-3 text-base leading-8 text-white/75">
                  We connect business strategy with execution layers so that your website, lead flow, automation, marketing, sales system,
                  and visibility stack actually support one another.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="solutions" className="bg-[#080810] px-5 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Integrated solutions"
            title="One business partner. Four high-impact solution layers."
            desc="The website should not feel like a list of services. It should feel like a business transformation model."
            light
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {solutionPillars.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  whileHover={{ y: -8, scale: 1.01 }}
                  className="group rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition hover:border-[#2233ff] hover:bg-[#2233ff]/10"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#2233ff]/15 text-[#8fa0ff]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="mt-6 text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#8fa0ff]">{item.title}</div>
                  <h3 className="mt-3 font-sans text-3xl font-bold leading-tight tracking-[-0.03em]">{item.headline}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/65">{item.desc}</p>
                  <div className="mt-6 space-y-3">
                    {item.points.map((point) => (
                      <div key={point} className="flex items-start gap-3 text-sm text-white/80">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#8fa0ff]" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="technology-consultancy" className="bg-[#080810] px-5 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/15 bg-white/[0.03] p-8 md:p-12">
          <div className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#8fa0ff]">Technology Consultancy</div>
          <h3 className="mt-4 font-sans text-4xl font-bold leading-none tracking-[-0.03em] md:text-5xl">
            Align product, automation, and operations with business growth goals.
          </h3>
          <p className="mt-6 max-w-3xl text-base leading-8 text-white/75">
            From platform planning to CRM/ERP architecture, we provide strategic technology consulting that improves execution speed,
            visibility, and process control. The focus is clear: right stack, right roadmap, right outcomes.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["Website and product roadmap", "Automation and reporting architecture", "Scalable systems for operations"].map((item) => (
              <div key={item} className="rounded-[1.4rem] border border-white/15 bg-white/5 p-5 text-sm font-semibold">
                {item}
              </div>
            ))}
          </div>
          <a
            href="#book-call"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-extrabold uppercase tracking-[0.12em] text-[#2233ff] transition hover:-translate-y-0.5"
          >
            Book Technology Consultation <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-[#2233ff] p-8 text-white md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <div className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-white/65">Kotech Digital Hub + Podo Sale</div>
              <h3 className="mt-4 font-sans text-4xl font-bold leading-none tracking-[-0.03em] md:text-5xl">
                Marketing brings attention. Sales brings movement. Systems make both scalable.
              </h3>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/80">
                That is why the website architecture now positions marketing and sales as parallel growth layers instead of generic service boxes.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Kotech Digital Hub", "Performance marketing, content systems, paid media, lead generation."],
                ["Podo Sale", "Sales hiring, SOPs, scripts, outbound systems, revenue process setup."],
                ["CRO Thinking", "Every major section is written to increase action, enquiries, and booked calls."],
                ["Consultancy CTA", "The site repeatedly asks the right visitor to start the right conversation."],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-[1.5rem] border border-white/20 bg-white/10 p-5 backdrop-blur">
                  <div className="text-sm font-bold">{title}</div>
                  <p className="mt-2 text-sm leading-7 text-white/75">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="cro-page" className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="CRO features"
            title="Designed not only to look premium, but to generate better business leads."
            desc="You asked for CRO features. So the website now behaves like a sales tool: it frames pain clearly, builds trust quickly, repeats CTAs intentionally, and moves the visitor toward consultation."
          />

          <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {croFeatures.map((item, index) => (
              <motion.div
                key={item}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="rounded-[1.6rem] border border-[#e8e6e0] bg-[#f7f6f3] p-6 transition hover:border-[#2233ff] hover:bg-white"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2233ff]/10 text-[#2233ff]">
                  <Radar className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold leading-7">{item}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="bg-[#080810] px-5 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Expanded site map"
            title="More pages, more narrative depth, and more reasons for a serious buyer to trust the brand."
            desc="To make the site less generic, it should feel like a complete business profile, consulting pitch, and lead-generation engine at once."
            light
          />

          <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featurePages.map((item, index) => (
              <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6 transition hover:border-[#2233ff] hover:bg-[#2233ff]/10">
                <div className="text-3xl font-sans font-bold text-white/15">0{index + 1}</div>
                <div className="mt-3 text-base font-semibold leading-8">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="whats-new-ai" className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#e8e6e0] bg-[#f7f6f3] p-8 md:p-10">
          <div className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#2233ff]">Whats New In AI</div>
          <h3 className="mt-4 font-sans text-3xl font-bold leading-tight tracking-[-0.03em] md:text-4xl">
            Practical AI updates for growth-focused businesses.
          </h3>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[#5a5a72]">
            We continuously monitor new AI capabilities across automation, marketing, sales workflows, and security so businesses can
            adopt what works and ignore hype.
          </p>
        </div>
      </section>

      <section id="case-studies" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Case studies"
            title="Narratives that show how Podosphere thinks, not just what it sells."
            desc="These case studies are written to position the brand as strategic, execution-capable, and outcome-oriented — especially for startups and modern MSMEs."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {caseStudies.map((item, index) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                whileHover={{ y: -8 }}
                className="rounded-[2rem] border border-[#e8e6e0] bg-white p-8 shadow-[0_18px_50px_rgba(0,0,0,0.04)] transition hover:border-[#2233ff]"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#2233ff]/8 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#2233ff]">
                    {item.type}
                  </span>
                  <span className="text-sm font-semibold text-[#5a5a72]">{item.company}</span>
                </div>
                <h3 className="mt-6 font-sans text-3xl font-bold leading-tight tracking-[-0.03em]">{item.title}</h3>
                <p className="mt-4 text-base leading-8 text-[#5a5a72]">{item.result}</p>
                <a href={`/case-studies/${item.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#2233ff]">
                  Open detailed case study <ArrowRight className="h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="leadership" className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Founder-led credibility"
            title="The leadership story should make the brand feel more trusted, more serious, and more consultative."
            desc="A strong services business converts better when the people behind it are visible, credible, and positioned with clarity."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {founderCards.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="rounded-[2rem] border border-[#e8e6e0] bg-[#f7f6f3] p-6 md:p-8"
              >
                <div className="grid gap-6 md:grid-cols-[220px_1fr] md:items-start">
                  <img src={founder.image} alt={founder.name} className="aspect-[4/5] w-full object-cover rounded-[1.5rem]" />
                  <div>
                    <div className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#2233ff]">Leadership</div>
                    <h3 className="mt-3 font-sans text-3xl font-bold">{founder.name}</h3>
                    <div className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-[#5a5a72]">{founder.role}</div>
                    <p className="mt-5 text-base leading-8 text-[#5a5a72]">{founder.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Technology Team", "Development, websites, software, dashboards, automation systems."],
              ["Marketing Team", "Paid media, creative direction, campaigns, content, CRO support."],
              ["Sales Team", "Lead follow-up, outbound systems, scripts, SOPs, conversion process."],
              ["Operations Team", "Client delivery, reporting, execution flow, business coordination."],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-[1.5rem] border border-[#e8e6e0] bg-white p-6">
                <div className="text-lg font-bold">{title}</div>
                <p className="mt-3 text-sm leading-7 text-[#5a5a72]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="book-call" className="bg-[#2233ff] px-5 py-24 text-white lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/20 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-8 backdrop-blur md:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <div className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-white/65">Primary conversion action</div>
              <h2 className="mt-4 font-sans text-4xl font-bold leading-none tracking-[-0.03em] md:text-6xl">
                Book a consultancy call and find the bottleneck that is slowing your growth.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
                Whether you need a stronger website, a smarter lead funnel, sales process improvement, business automation, or better visibility into operations,
                this conversation is the right place to start.
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
                  href="mailto:sushant.singh@podospheretechnologies.com"
                  className="inline-flex items-center gap-2 rounded-full border border-white/35 px-7 py-4 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-white/10"
                >
                  <Mail className="h-4 w-4" />
                  Email Us
                </a>
              </div>
            </div>

            <div className="grid gap-4 rounded-[1.7rem] border border-white/15 bg-white/10 p-5">
              {[
                [Clock3, "Fast consultation", "Ideal for founders who need direction before investing in execution."],
                [Users, "Business-first thinking", "We discuss systems, team process, lead journey, and scalable next steps."],
                [Layers3, "Clear action mapping", "The goal is to move from confusion to a sharper path forward."],
                [Star, "Lead-focused outcome", "The website is now structured to convert interest into better enquiries."],
              ].map(([Icon, title, desc]) => (
                <div key={title} className="rounded-[1.3rem] border border-white/15 bg-white/5 p-5">
                  <Icon className="h-5 w-5 text-white" />
                  <div className="mt-3 text-base font-bold">{title}</div>
                  <p className="mt-2 text-sm leading-7 text-white/75">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
