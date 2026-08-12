"use client";

import { useState } from "react";
import Image from "next/image";

const bannerMessage =
  "This website is currently under construction and some features may not work.";

const processSteps = [
  {
    code: "01",
    title: "Discovery & Scoping",
    copy: "We map institutional goals, existing infrastructure and target outcomes before designing the program.",
  },
  {
    code: "02",
    title: "Curriculum & Lab Design",
    copy: "Programs are structured around real industry curricula, with lab and infrastructure planning built in.",
  },
  {
    code: "03",
    title: "Launch & Operations",
    copy: "We manage batch formation, delivery, employer outreach and placement through to completion.",
  },
];

const partnerPoints = [
  {
    title: "Industry-Aligned Curriculum",
    copy: "Programs are built with practitioners so what's taught matches what employers actually need.",
  },
  {
    title: "Hands-On Lab Infrastructure",
    copy: "AI, EV and Cyber Security labs are planned and set up alongside the curriculum, not as an afterthought.",
  },
  {
    title: "Employer Placement Support",
    copy: "Outreach and placement operations run in parallel with delivery, not bolted on at the end.",
  },
  {
    title: "Dedicated Program Management",
    copy: "A single team owns batch formation, delivery and reporting for the life of the partnership.",
  },
];

const flagshipServices = [
  {
    dark: false,
    icon: "hub",
    title: "Centre of Excellence Setup",
    copy: "End-to-end design, curriculum and operations for institutional Centres of Excellence in AI, EV and Cyber Security.",
  },
  {
    dark: false,
    icon: "doc",
    title: "Curriculum & Certification Design",
    copy: "Structured, industry-mapped curricula built for direct institutional deployment.",
  },
  {
    dark: false,
    icon: "globe",
    title: "Employer Placement Network",
    copy: "Employer outreach and placement operations connected directly to program delivery.",
  },
];

const stats = [
  { value: "6", label: "Technology Domains" },
  { value: "3", label: "Delivery Phases" },
  { value: "4", label: "Partner Commitments" },
  { value: "3", label: "Flagship Services" },
];

function ServiceIcon({ kind }: { kind: string }) {
  if (kind === "hub") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
        <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="4" r="1.6" fill="currentColor" />
        <circle cx="19" cy="16" r="1.6" fill="currentColor" />
        <circle cx="5" cy="16" r="1.6" fill="currentColor" />
        <path d="M12 7.2V9M17 14.4l-2-1.4M7 14.4l2-1.4" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    );
  }
  if (kind === "doc") {
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
        <rect x="5" y="3.5" width="14" height="17" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8.5 8.5h7M8.5 12h7M8.5 15.5h4.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 12h16M12 4c2.5 2.2 2.5 13.8 0 16M12 4c-2.5 2.2-2.5 13.8 0 16" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export default function Home() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <main className="flex-1 flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-20 flex items-center justify-between px-6 md:px-10 py-2.5 border-b border-line bg-ink/90 backdrop-blur">
        <Image src="/logo.png" alt="TK Ventures Logo" width={96} height={36} priority />

        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm font-medium text-text-muted hover:text-accent-2 transition">
            About
          </a>
          <a href="#services" className="text-sm font-medium text-text-muted hover:text-accent-2 transition">
            Services
          </a>
          <a href="#contact" className="text-sm font-medium text-text-muted hover:text-accent-2 transition">
            Contact
          </a>
          <a
            href="#contact"
            className="bg-accent-2 text-white text-sm font-semibold px-5 py-2 rounded-full hover:opacity-90 transition"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* Under Construction Banner */}
      <div className="overflow-hidden whitespace-nowrap bg-accent-2 text-white py-2 border-b border-line">
        <div className="animate-marquee">
          {[0, 1].map((half) => (
            <div key={half} className="flex shrink-0">
              {Array.from({ length: 4 }).map((_, i) => (
                <span key={i} className="font-display text-xs md:text-sm font-medium px-6">
                  ⚠ {bannerMessage}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section className="px-6 md:px-10 pt-16 md:pt-24 pb-20 max-w-7xl mx-auto w-full text-center">
        <p className="sheet-label justify-center flex mb-6">Sheet 01 — Introduction</p>

        <h1 className="font-display text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight max-w-4xl mx-auto">
          Building the future through
          <br />
          Innovation, AI &{" "}
          <span className="italic text-accent-2">emerging technologies</span>
        </h1>

        <p className="mt-7 text-lg text-text-muted max-w-2xl mx-auto">
          Structured skilling programs, curriculum design and placement
          support, delivered in direct partnership with academic
          institutions.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#services"
            className="bg-accent-2 text-white text-sm font-semibold px-7 py-3.5 rounded-full hover:opacity-90 transition"
          >
            Our Services
          </a>
          <a
            href="#contact"
            className="bg-ink-2 border border-line text-sm font-semibold px-7 py-3.5 rounded-full hover:border-accent-2 hover:text-accent-2 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="border-t border-line px-6 md:px-10 py-20 max-w-7xl mx-auto w-full">
        <p className="sheet-label mb-6">Sheet 02 — About</p>

        <div className="grid md:grid-cols-[1fr_1.4fr] gap-10">
          <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight">
            About TK Ventures
          </h2>

          <p className="text-lg leading-9 text-text-muted">
            TK Ventures is an Innovation &amp; Technology Solutions Company
            helping educational institutions, universities, enterprises and
            government organizations establish industry-ready Centres of
            Excellence, technology programs and future-focused learning
            ecosystems.
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-line px-6 md:px-10 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-semibold">
              How We Build Your Centre of Excellence
            </h2>
            <p className="mt-4 text-text-muted">
              A structured path from institutional goals to a fully
              operating program.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {processSteps.map((step) => (
              <div key={step.code} className="relative blueprint-card rounded-sm p-7 overflow-hidden">
                <span className="absolute top-4 right-5 font-display text-6xl font-semibold text-line select-none">
                  {step.code}
                </span>
                <h3 className="font-display text-xl font-semibold relative">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-text-muted relative max-w-[85%]">
                  {step.copy}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-2 hover:gap-2.5 transition-all relative"
                >
                  Read More
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why institutions partner with us */}
      <section className="border-t border-line px-6 md:px-10 py-20 bg-ink-3">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-start">
          <div>
            <p className="sheet-label mb-6">Sheet 04 — Why TK Ventures</p>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
              Why Institutions Partner With Us
            </h2>
            <p className="text-text-muted mb-8 max-w-md">
              We deliver reliability through practitioner-built curricula,
              real lab infrastructure and outreach that continues through to
              placement.
            </p>

            <div className="divide-y divide-line border-t border-b border-line">
              {partnerPoints.map((point, i) => {
                const open = openIndex === i;
                return (
                  <div key={point.title}>
                    <button
                      type="button"
                      onClick={() => setOpenIndex(open ? -1 : i)}
                      className="w-full flex items-center justify-between py-5 text-left"
                    >
                      <span className="font-display text-lg font-semibold">
                        {point.title}
                      </span>
                      <span
                        className={`text-accent-2 transition-transform ${open ? "rotate-90" : ""}`}
                        aria-hidden="true"
                      >
                        ›
                      </span>
                    </button>
                    {open && (
                      <p className="text-sm leading-6 text-text-muted pb-5 max-w-md">
                        {point.copy}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-3xl border border-line bg-ink-2 overflow-hidden flex items-center justify-center min-h-[320px] md:min-h-[420px]">
            <svg viewBox="0 0 300 300" width="70%" height="70%">
              <circle cx="150" cy="150" r="90" fill="none" stroke="#d6deef" strokeWidth="1.5" strokeDasharray="4 6" />
              <circle cx="150" cy="150" r="55" fill="#e9eefb" stroke="#8f6209" strokeWidth="2" />
              <text x="150" y="145" textAnchor="middle" className="font-mono" fontSize="12" fontWeight={600} fill="#0b1440">
                TK
              </text>
              <text x="150" y="161" textAnchor="middle" className="font-mono" fontSize="12" fontWeight={600} fill="#0b1440">
                VENTURES
              </text>
              {[0, 90, 180, 270].map((deg) => {
                const rad = (deg * Math.PI) / 180;
                const x = 150 + 90 * Math.cos(rad);
                const y = 150 + 90 * Math.sin(rad);
                return <circle key={deg} cx={x} cy={y} r="6" fill="#1450c4" />;
              })}
            </svg>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-line px-6 md:px-10 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-4">
            <div>
              <p className="sheet-label mb-6">Sheet 03 — Services</p>
              <h2 className="font-display text-3xl md:text-4xl font-semibold max-w-lg">
                Comprehensive Skilling Services
              </h2>
            </div>
            <a
              href="#contact"
              className="bg-accent-2 text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:opacity-90 transition whitespace-nowrap"
            >
              View all Services
            </a>
          </div>

          <p className="text-text-muted max-w-2xl mb-12">
            We deliver reliability with practitioner-built curricula, real
            lab infrastructure and outreach that runs alongside delivery,
            end to end.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {flagshipServices.map((service) => (
              <div
                key={service.title}
                className={`rounded-2xl p-8 border transition hover:-translate-y-1 ${
                  service.dark
                    ? "bg-[#0b1440] border-[#0b1440] text-white"
                    : "blueprint-card"
                }`}
              >
                <div className="flex items-start justify-between mb-8">
                  <span
                    className={`w-9 h-9 rounded-full flex items-center justify-center ${
                      service.dark ? "bg-white/10 text-white" : "bg-accent-2/10 text-accent-2"
                    }`}
                  >
                    <ServiceIcon kind={service.icon} />
                  </span>
                  <span className={service.dark ? "text-white/60" : "text-text-muted"} aria-hidden="true">
                    ↗
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">
                  {service.title}
                </h3>
                <p className={`text-sm leading-6 ${service.dark ? "text-white/70" : "text-text-muted"}`}>
                  {service.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-t border-line px-6 md:px-10 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-4xl md:text-5xl font-semibold text-accent-2">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-line px-6 md:px-10 py-24 text-center">
        <p className="sheet-label mb-6">Sheet 05 — Contact</p>

        <h2 className="font-display text-3xl md:text-4xl font-semibold">
          Let&apos;s build the future together
        </h2>

        <p className="mt-6 text-text-muted text-lg max-w-2xl mx-auto">
          Partner with TK Ventures to build future-ready talent through
          innovation, technology and industry collaboration.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:info@tkventures.co.in"
            className="bg-accent-2 text-white px-7 py-3.5 rounded-full font-semibold hover:opacity-90 transition"
          >
            Email Us
          </a>
          <a
            href="#"
            className="border border-line px-7 py-3.5 rounded-full hover:border-accent-2 hover:text-accent-2 transition"
          >
            Call Us
          </a>
        </div>
      </section>

      {/* Footer / title block */}
      <footer className="border-t border-line px-6 md:px-10 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-3 font-display font-bold text-xs text-accent-2">
          <span>info@tkventures.co.in · www.tkventures.co.in</span>
          <span className="text-accent-2">Empowering Minds. Enriching Lives.</span>
          <span>© 2026 TK Ventures — All Rights Reserved</span>
        </div>
      </footer>
    </main>
  );
}