import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white">

      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-slate-800">

        <Image
          src="/logo.png"
          alt="TK Ventures Logo"
          width={180}
          height={70}
          priority
        />

        <div className="hidden md:flex gap-8">
          <a href="#about" className="hover:text-blue-400 transition">
            About
          </a>

          <a href="#services" className="hover:text-blue-400 transition">
            Services
          </a>

          <a href="#contact" className="hover:text-blue-400 transition">
            Contact
          </a>
        </div>

      </nav>

      {/* Hero */}
      <section className="text-center px-6 py-28">

        <h2 className="text-6xl font-extrabold leading-tight">
          Building the Future Through
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-600 bg-clip-text text-transparent">
            Innovation, AI & Emerging Technologies
          </span>
        </h2>

        <p className="max-w-3xl mx-auto mt-8 text-xl text-slate-300 leading-9">
          Empowering educational institutions, universities, enterprises and
          government organizations through Centres of Excellence,
          AI-driven learning, industry partnerships and technology innovation.
        </p>

        <div className="mt-12 flex justify-center gap-6">
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-semibold">
            Explore Services
          </button>

          <button className="border border-white px-8 py-4 rounded-xl hover:bg-white hover:text-black transition">
            Contact Us
          </button>
        </div>

      </section>

      {/* About */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-20"
      >

        <h3 className="text-4xl font-bold text-blue-400 mb-8">
          About TK Ventures
        </h3>

        <p className="text-lg leading-9 text-slate-300">
          TK Ventures is an Innovation & Technology Solutions Company helping
          educational institutions, universities, enterprises and government
          organizations establish industry-ready Centres of Excellence,
          technology programs and future-focused learning ecosystems.
        </p>

      </section>

      {/* Services */}
      <section
        id="services"
        className="bg-slate-900 py-20 px-6"
      >

        <div className="max-w-6xl mx-auto">

          <h3 className="text-4xl font-bold text-center text-blue-400">
            Our Services
          </h3>

          <div className="grid md:grid-cols-3 gap-8 mt-12">

            {[
              "🤖 Artificial Intelligence",
              "🔐 Cyber Security",
              "⚡ Electric Vehicle Technologies",
              "📊 Data Analytics",
              "🎓 Centre of Excellence",
              "🏢 Corporate Training",
            ].map((service) => (
              <div
                key={service}
                className="bg-slate-800 rounded-2xl p-8 hover:scale-105 transition"
              >
                <h4 className="text-2xl font-semibold">
                  {service}
                </h4>
              </div>
            ))}

          </div>

        </div>
{/* Why Choose Us */}
<section className="py-20 px-6 bg-slate-950">

  <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
    Why Choose TK Ventures?
  </h2>

  <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">

    <div className="bg-slate-800 rounded-xl p-6">
      <h3 className="text-2xl mb-3">🎓</h3>
      <h4 className="font-bold text-xl">Industry Experts</h4>
      <p className="mt-3 text-slate-300">
        Learn directly from experienced professionals.
      </p>
    </div>

    <div className="bg-slate-800 rounded-xl p-6">
      <h3 className="text-2xl mb-3">🤖</h3>
      <h4 className="font-bold text-xl">Latest Technologies</h4>
      <p className="mt-3 text-slate-300">
        AI, EV, Cyber Security and Data Science.
      </p>
    </div>

    <div className="bg-slate-800 rounded-xl p-6">
      <h3 className="text-2xl mb-3">🏢</h3>
      <h4 className="font-bold text-xl">Industry Partnerships</h4>
      <p className="mt-3 text-slate-300">
        Strong collaboration with academia and industry.
      </p>
    </div>

    <div className="bg-slate-800 rounded-xl p-6">
      <h3 className="text-2xl mb-3">🚀</h3>
      <h4 className="font-bold text-xl">Future Ready</h4>
      <p className="mt-3 text-slate-300">
        Building innovation ecosystems for tomorrow.
      </p>
    </div>

  </div>

</section>
      </section>      {/* Contact */}
      <section
        id="contact"
        className="py-20 px-6 text-center"
      >
        <h3 className="text-4xl font-bold text-blue-400">
          Let's Build the Future Together
        </h3>

        <p className="mt-6 text-slate-300 text-lg">
          Partner with TK Ventures to build future-ready talent through
          innovation, technology and industry collaboration.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:info@tkventures.co.in"
            className="rounded-xl bg-blue-600 px-8 py-4 font-semibold hover:bg-blue-700 transition"
          >
            Email Us
          </a>

          <a
            href="#"
            className="rounded-xl border border-white px-8 py-4 hover:bg-white hover:text-black transition"
          >
            Call Us
          </a>
        </div>

        <p className="mt-10 text-slate-400">
          📧 info@tkventures.co.in
        </p>

        <p className="text-slate-400">
          🌐 www.tkventures.co.in
        </p>

        <p className="mt-4 text-blue-400 font-semibold">
          Empowering Minds. Enriching Lives.
        </p>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-400">
        © 2026 TK Ventures. All Rights Reserved.
      </footer>

    </main>
  );
}