export default function Testimonials() {

  const testimonials = [
    {
      name: "Sarah & Daniel",
      role: "Couple Website Client",
      review:
        "NovaStack turned our ideas into something emotional and visually beautiful. The website felt truly personal.",
    },

    {
      name: "Aura Café",
      role: "Business Branding",
      review:
        "The branding and website design gave our business a modern identity that actually stands out.",
    },

    {
      name: "Velora Studio",
      role: "Creative Startup",
      review:
        "Professional, creative, and detail-oriented. The final design exceeded expectations.",
    },
  ];

  return (

    <section className="px-6 py-24 bg-[#161616]">

      <div className="max-w-7xl mx-auto">

        {/* INTRO */}
        <div className="text-center">

          <p className="text-fuchsia-400 uppercase tracking-[3px] text-sm">
            Testimonials
          </p>

          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white">
            What Clients Say
          </h2>

          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto leading-relaxed text-lg">
            Creative experiences built with emotion,
            strategy, and modern digital design.
          </p>

        </div>

        {/* GRID */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className="
                bg-white/5
                border
                border-fuchsia-500/30
                rounded-3xl
                p-8
                transition
                duration-300
                hover:-translate-y-2
                hover:border-fuchsia-400
                hover:shadow-[0_0_30px_rgba(217,70,239,0.25)]
              "
            >

              {/* REVIEW */}
              <p className="text-zinc-300 leading-relaxed text-lg">
                “{item.review}”
              </p>

              {/* CLIENT */}
              <div className="mt-8">

                <h3 className="text-white font-semibold text-lg">
                  {item.name}
                </h3>

                <p className="text-zinc-500 text-sm mt-1">
                  {item.role}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}