export default function Hero() {
  return (

    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-32 bg-[#161616]"
    >

      <div className="max-w-5xl mx-auto text-center">

        {/* HEADING */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">

          Building Digital

          <span className="text-fuchsia-500">
            {" "}Experiences{" "}
          </span>

          That Feel Personal

        </h1>

        {/* TEXT */}
        <p className="mt-8 text-zinc-300 text-lg max-w-2xl mx-auto leading-relaxed">

          NovaStack helps couples, creators, and growing businesses
          turn ideas into modern websites, branding, and meaningful
          digital experiences.

        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <a
            href="#portfolio"
            className="px-7 py-3 rounded-full bg-fuchsia-700 hover:bg-fuchsia-600 transition"
          >
            View Our Work
          </a>

          <a
            href="#contact"
            className="px-7 py-3 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
          >
            Let’s Build Together
          </a>

        </div>

        {/* STATS */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-8">

          <div>
            <h2 className="text-3xl font-bold">25+</h2>
            <p className="mt-2 text-zinc-400 text-sm">
              Projects Completed
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">10+</h2>
            <p className="mt-2 text-zinc-400 text-sm">
              Brands Designed
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">2+</h2>
            <p className="mt-2 text-zinc-400 text-sm">
              Years Learning
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">100%</h2>
            <p className="mt-2 text-zinc-400 text-sm">
              Passion Driven
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}