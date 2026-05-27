export default function About() {

  const services = [
    {
      number: "01",
      title: "Custom Websites",
      description:
        "Modern responsive websites designed for creators, startups, and businesses with clean UI and meaningful user experiences.",
    },

    {
      number: "02",
      title: "Couple Websites",
      description:
        "Personalized digital experiences crafted for love stories, surprises, anniversaries, and memorable moments.",
    },

    {
      number: "03",
      title: "Brand Identity",
      description:
        "Unique logos, color systems, and branding assets designed to help businesses create a strong visual identity.",
    },

    {
      number: "04",
      title: "Social Media Growth",
      description:
        "Creative visual strategies and social branding designed to improve engagement and digital presence.",
    },
  ];

  return (

    <section
      id="about"
      className="relative py-32 px-6 overflow-hidden"
    >

      {/* BACKGROUND IMAGE */}
      <div
        className="
          absolute inset-0
          bg-cover
          bg-top
          md:bg-center
          bg-no-repeat
        "
        style={{
          backgroundImage: "url('/founder1.jpeg')",
        }}
      ></div>

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="absolute inset-0 bg-fuchsia-950/50"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* TOP TEXT */}
        <p className="text-fuchsia-400 uppercase tracking-[3px] text-sm">
          Founder & CEO of NovaStack
        </p>

        <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight max-w-4xl text-white">
          Built From Passion,
          Designed With Purpose
        </h2>

        <p className="mt-8 text-zinc-300 leading-relaxed text-lg max-w-3xl">
          NovaStack was founded by Benedicta with a vision to create meaningful digital experiences that feel modern, emotional, and visually memorable.
        </p>

        <p className="mt-6 text-zinc-400 leading-relaxed text-lg max-w-3xl">
          What started with creative portfolio projects and personalized couple websites gradually evolved into a digital studio focused on branding, modern websites, and online identity for creators, startups, and growing businesses.
        </p>

        {/* SERVICES */}
        <div className="mt-14">

          <p className="text-fuchsia-400 uppercase tracking-[3px] text-sm">
            Our Services
          </p>

          <h3 className="mt-4 text-3xl sm:text-4xl font-bold text-white">
            Creative Solutions Designed
            For Modern Brands
          </h3>

        </div>

        {/* CARDS */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">

          {services.map((service, index) => (

            <div
              key={index}
              className="
                bg-white/5
                border
                border-fuchsia-500/30
                rounded-3xl
                p-6
                transition
                duration-300
                hover:-translate-y-2
                hover:border-fuchsia-400
                hover:shadow-[0_0_30px_rgba(217,70,239,0.25)]
              "
            >

              <p className="text-fuchsia-400 text-sm mb-4">
                {service.number}
              </p>

              <h3 className="text-white text-2xl font-semibold">
                {service.title}
              </h3>

              <p className="mt-4 text-zinc-400 leading-relaxed">
                {service.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}