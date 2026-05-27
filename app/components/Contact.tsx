"use client";

import { useState } from "react";

export default function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();

    if (
      name === "" ||
      email === "" ||
      project === "" ||
      message === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    alert("Form submitted");

    setName("");
    setEmail("");
    setProject("");
    setMessage("");
  };

  return (

    <section
      id="contact"
      className="px-6 pt-28 bg-[#1b1b1b]"
    >

      <div className="max-w-5xl mx-auto">

        {/* INTRO */}
        <div className="text-center">

          <p className="text-fuchsia-400 uppercase tracking-[3px] text-sm">
            Contact
          </p>

          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white">
            Let's Build Something Meaningful
          </h2>

          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Whether it's a startup idea, portfolio,or personal story <br />
            NovaStack is ready to bring it online.
          </p>

        </div>

        {/* FORM BOX */}
        <div className="mt-12 bg-white/5 border border-fuchsia-500/30 rounded-3xl p-6 sm:p-10">

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* NAME + EMAIL */}
            <div className="grid md:grid-cols-2 gap-6">

              {/* NAME */}
              <div>

                <label className="text-sm text-white">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="
                    w-full
                    mt-2
                    bg-black/30
                    border
                    border-fuchsia-500/30
                    rounded-2xl
                    px-4
                    py-3
                    text-white
                    outline-none
                  "
                />

              </div>

              {/* EMAIL */}
              <div>

                <label className="text-sm text-white">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="
                    w-full
                    mt-2
                    bg-black/30
                    border
                    border-fuchsia-500/30
                    rounded-2xl
                    px-4
                    py-3
                    text-white
                    outline-none
                  "
                />

              </div>

            </div>

            {/* PROJECT */}
            <div>

              <label className="text-sm text-white">
                Project Type
              </label>

              <input
                type="text"
                placeholder="Website, Branding..."
                value={project}
                onChange={(e) => setProject(e.target.value)}
                className="
                  w-full
                  mt-2
                  bg-black/30
                  border
                  border-fuchsia-500/30
                  rounded-2xl
                  px-4
                  py-3
                  text-white
                  outline-none
                "
              />

            </div>

            {/* MESSAGE */}
            <div>

              <label className="text-sm text-white">
                Message
              </label>

              <textarea
                rows={5}
                placeholder="Write your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="
                  w-full
                  mt-2
                  bg-black/30
                  border
                  border-fuchsia-500/30
                  rounded-2xl
                  px-4
                  py-3
                  text-white
                  outline-none
                  resize-none
                "
              ></textarea>

            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="
                px-7
                py-3
                rounded-2xl
                bg-fuchsia-700
                hover:bg-fuchsia-600
                transition
                text-white
              "
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}