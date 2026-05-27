import Image from "next/image";

export default function Portfolio() {

  const projects = [
    {
      title: "Forever Begins",
      category: "Couple Website",
      image: "/project01.jpeg",
    },

    {
      title: "Aura Café",
      category: "Business Website",
      image: "/project02.jpeg",
    },

    {
      title: "Velora Studio",
      category: "Brand Identity",
      image: "/project03.jpeg",
    },

    {
      title: "Nova Creator Portfolio",
      category: "Personal Portfolio",
      image: "/project04.jpeg",
    },
  ];

  return (

    <section
      id="portfolio"
      className="px-6 py-28 bg-[#1b1b1b]"
    >

      <div className="max-w-6xl mx-auto">

        {/* SECTION INTRO */}
        <div className="text-center">

          <p className="text-fuchsia-400 uppercase tracking-[3px] text-sm">
            Portfolio
          </p>

          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white">
            Selected Projects
          </h2>

          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Creative websites and branding experiences designed
            for modern digital presence.
          </p>

        </div>

        {/* PROJECT GRID */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">

          {projects.map((project, index) => (

            <div
              key={index}
              className="
                group
                bg-white/5
                border
                border-fuchsia-500/30
                rounded-3xl
                overflow-hidden
                transition
                duration-300
                hover:-translate-y-2
                hover:border-fuchsia-400
                hover:shadow-[0_0_30px_rgba(217,70,239,0.25)]
              "
            >

              {/* IMAGE */}
              <div className="overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  width={700}
                  height={500}
                  className="
                    w-full
                    h-[240px]
                    sm:h-[300px]
                    object-cover
                    transition
                    duration-500
                    group-hover:scale-105
                  "
                />

              </div>

              {/* CONTENT */}
              <div className="p-5 sm:p-6">

                <p className="text-fuchsia-400 text-sm uppercase tracking-[2px]">
                  {project.category}
                </p>

                <h3 className="mt-2 text-xl sm:text-2xl font-semibold text-white">
                  {project.title}
                </h3>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}