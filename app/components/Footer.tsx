export default function Footer() {
  return (
    <footer className="px-6 pt-10  border-t border-white/10">

      <div className="max-w-7xl mx-auto">

        {/* TOP */}
<div className="flex flex-col md:flex-row items-center md:items-center justify-around gap-10 text-center md:text-left">
          {/* LEFT */}
          <div>

            <h2 className="text-3xl font-bold text-white">
              NovaStack
            </h2>

            <p className="mt-4 text-zinc-400 max-w-md leading-relaxed">
              Creative digital experiences for brands, businesses,
              and meaningful stories.
            </p>

          </div>

          {/* RIGHT */}
           <div className="flex flex-row gap-12 justify-center">
            {/* NAVIGATION */}
            <div>

              <h3 className="text-white font-semibold mb-4">
                Navigation
              </h3>

              <ul className="space-y-3 text-zinc-400">

                <li>
                  <a href="#home" className="hover:text-fuchsia-400 transition">
                    Home
                  </a>
                </li>

                <li>
                  <a href="#about" className="hover:text-fuchsia-400 transition">
                    About
                  </a>
                </li>

                <li>
                  <a href="#portfolio" className="hover:text-fuchsia-400 transition">
                    Portfolio
                  </a>
                </li>

                <li>
                  <a href="#contact" className="hover:text-fuchsia-400 transition">
                    Contact
                  </a>
                </li>

              </ul>

            </div>

            {/* SOCIALS */}
            <div>

              <h3 className="text-white font-semibold mb-4">
                Socials
              </h3>

              <ul className="space-y-3 text-zinc-400">

                <li>
                  <a
                    href="https://www.instagram.com/_.novastack._?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    className="hover:text-fuchsia-400 transition"
                  >
                    Instagram
                  </a>
                </li>

                <li>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    className="hover:text-fuchsia-400 transition"
                  >
                    GitHub
                  </a>
                </li>

                <li>
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    className="hover:text-fuchsia-400 transition"
                  >
                    LinkedIn
                  </a>
                </li>

              </ul>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-16 pt-6 border-t mb-10 border-white/10 text-center">

          <p className="text-zinc-500 text-sm">
            © 2026 NovaStack. Designed & Developed by Benedicta.
          </p>

        </div>

      </div>

    </footer>
  );
}