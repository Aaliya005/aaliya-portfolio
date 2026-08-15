import React, { useState } from "react";
import {
  Send,
  Check,
  AlertCircle,
  Mail,
  Github,
  Linkedin,
  ArrowUpRight,
  CircleCheck,
} from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mdenzopw";

const CONTACT_LINKS = {
  email: "mailto:aaliyamanyar05@gmail.com",
  github: "https://github.com/Aaliya005",
  linkedin: "https://www.linkedin.com/in/aaliyamanyar",
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (status === "sending") return;

    setStatus("sending");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (response.ok) {
        setStatus("success");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="pt-20 pb-12 md:pt-24 md:pb-16 lg:pt-28"
    >
      <div className="container-main">
        {/* =========================================================
            HEADER
        ========================================================= */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          {/* Eyebrow */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-white
              border
              border-gray-200/80
              shadow-sm
              mb-5
            "
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500" />

            <span
              className="
                text-[10px]
                md:text-[11px]
                font-semibold
                tracking-[0.25em]
                uppercase
                text-slate-500
              "
            >
              Get In Touch
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              text-[2.5rem]
              leading-[1.02]
              md:text-5xl
              lg:text-[3.6rem]
              font-bold
              tracking-[-0.04em]
              text-dark
            "
          >
            Let's talk about{" "}
            <span className="text-slate-400">your next project.</span>
          </h2>

          {/* Description */}
          <p
            className="
              mt-6
              max-w-2xl
              mx-auto
              text-base
              md:text-lg
              leading-7
              text-slate-500
            "
          >
            Have an opportunity, project, or idea you'd like to discuss?
            I'd love to hear from you.
          </p>
        </div>

        {/* =========================================================
            MAIN CONTACT AREA
        ========================================================= */}
        <div
          className="
            max-w-6xl
            mx-auto
            grid
            lg:grid-cols-[0.82fr_1.18fr]
            gap-10
            lg:gap-14
            items-center
          "
        >
          {/* =======================================================
              LEFT CONTENT
          ======================================================= */}
          <div className="lg:pr-4">
            {/* Small label */}
            <p
              className="
                text-[10px]
                md:text-[11px]
                font-semibold
                tracking-[0.25em]
                uppercase
                text-sky-700
                mb-4
              "
            >
              Let's Connect
            </p>

            {/* Heading */}
            <h3
              className="
                text-2xl
                md:text-3xl
                font-bold
                tracking-[-0.025em]
                text-dark
                leading-tight
                max-w-md
              "
            >
              Have a project in mind?
            </h3>

            {/* Description */}
            <p
              className="
                mt-5
                text-base
                leading-7
                text-slate-500
                max-w-md
              "
            >
              I'm open to opportunities where I can contribute, collaborate,
              and build reliable, scalable web applications across the full
              stack.
            </p>

            {/* Availability */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                mt-6
                px-4
                py-2.5
                rounded-full
                bg-white
                border
                border-gray-200
                shadow-sm
              "
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500" />

              <span className="text-sm font-medium text-slate-700">
                Open to opportunities
              </span>
            </div>

            {/* =====================================================
                CONTACT LINKS
            ===================================================== */}
            <div className="mt-7 space-y-3">
              {/* Email */}
              <a
                href={CONTACT_LINKS.email}
                className="
                  group
                  flex
                  items-center
                  justify-between
                  gap-4
                  w-full
                  p-3.5
                  rounded-2xl
                  bg-white
                  border
                  border-gray-200/90
                  shadow-sm
                  hover:border-slate-300
                  hover:shadow-md
                  hover:-translate-y-0.5
                  transition-all
                "
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div
                    className="
                      shrink-0
                      w-10
                      h-10
                      rounded-xl
                      bg-slate-50
                      border
                      border-gray-200
                      flex
                      items-center
                      justify-center
                      text-slate-500
                      group-hover:text-dark
                      transition-colors
                    "
                  >
                    <Mail size={17} strokeWidth={1.7} />
                  </div>

                  <div className="min-w-0">
                    <p
                      className="
                        text-[9px]
                        font-semibold
                        tracking-[0.2em]
                        uppercase
                        text-slate-400
                      "
                    >
                      Email
                    </p>

                    <p className="mt-0.5 text-sm font-medium text-dark truncate">
                      aaliyamanyar05@gmail.com
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={16}
                  className="
                    shrink-0
                    text-slate-400
                    group-hover:text-dark
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                    transition-all
                  "
                />
              </a>

              {/* GitHub */}
              <a
                href={CONTACT_LINKS.github}
                target={CONTACT_LINKS.github !== "#" ? "_blank" : undefined}
                rel={
                  CONTACT_LINKS.github !== "#"
                    ? "noopener noreferrer"
                    : undefined
                }
                className="
                  group
                  flex
                  items-center
                  justify-between
                  gap-4
                  w-full
                  p-3.5
                  rounded-2xl
                  bg-white
                  border
                  border-gray-200/90
                  shadow-sm
                  hover:border-slate-300
                  hover:shadow-md
                  hover:-translate-y-0.5
                  transition-all
                "
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className="
                      shrink-0
                      w-10
                      h-10
                      rounded-xl
                      bg-slate-50
                      border
                      border-gray-200
                      flex
                      items-center
                      justify-center
                      text-slate-500
                      group-hover:text-dark
                      transition-colors
                    "
                  >
                    <Github size={17} strokeWidth={1.7} />
                  </div>

                  <div>
                    <p
                      className="
                        text-[9px]
                        font-semibold
                        tracking-[0.2em]
                        uppercase
                        text-slate-400
                      "
                    >
                      GitHub
                    </p>

                    <p className="mt-0.5 text-sm font-medium text-dark">
                      View my projects
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={16}
                  className="
                    shrink-0
                    text-slate-400
                    group-hover:text-dark
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                    transition-all
                  "
                />
              </a>

              {/* LinkedIn */}
              <a
                href={CONTACT_LINKS.linkedin}
                target={
                  CONTACT_LINKS.linkedin !== "#" ? "_blank" : undefined
                }
                rel={
                  CONTACT_LINKS.linkedin !== "#"
                    ? "noopener noreferrer"
                    : undefined
                }
                className="
                  group
                  flex
                  items-center
                  justify-between
                  gap-4
                  w-full
                  p-3.5
                  rounded-2xl
                  bg-white
                  border
                  border-gray-200/90
                  shadow-sm
                  hover:border-slate-300
                  hover:shadow-md
                  hover:-translate-y-0.5
                  transition-all
                "
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className="
                      shrink-0
                      w-10
                      h-10
                      rounded-xl
                      bg-slate-50
                      border
                      border-gray-200
                      flex
                      items-center
                      justify-center
                      text-slate-500
                      group-hover:text-dark
                      transition-colors
                    "
                  >
                    <Linkedin size={17} strokeWidth={1.7} />
                  </div>

                  <div>
                    <p
                      className="
                        text-[9px]
                        font-semibold
                        tracking-[0.2em]
                        uppercase
                        text-slate-400
                      "
                    >
                      LinkedIn
                    </p>

                    <p className="mt-0.5 text-sm font-medium text-dark">
                      Let's connect
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={16}
                  className="
                    shrink-0
                    text-slate-400
                    group-hover:text-dark
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                    transition-all
                  "
                />
              </a>
            </div>
          </div>

          {/* =======================================================
              FORM
          ======================================================= */}
          <div
            className="
              bg-white
              rounded-[1.75rem]
              border
              border-gray-200/80
              shadow-[0_18px_50px_rgba(15,23,42,0.07)]
              p-6
              md:p-8
              lg:p-9
            "
          >
            {/* Form heading */}
            <div className="mb-7">
              <h3
                className="
                  text-2xl
                  font-bold
                  tracking-[-0.025em]
                  text-dark
                "
              >
                Send a message
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Tell me a little about what you're working on.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="
                    block
                    mb-2
                    text-sm
                    font-medium
                    text-slate-700
                  "
                >
                  Name
                </label>

                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  autoComplete="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="
                    w-full
                    px-4
                    py-3.5
                    rounded-xl
                    border
                    border-gray-200
                    bg-slate-50/40
                    text-sm
                    text-dark
                    placeholder:text-slate-400
                    outline-none
                    focus:bg-white
                    focus:border-slate-400
                    focus:ring-4
                    focus:ring-slate-900/5
                    transition-all
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="
                    block
                    mb-2
                    text-sm
                    font-medium
                    text-slate-700
                  "
                >
                  Email
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="
                    w-full
                    px-4
                    py-3.5
                    rounded-xl
                    border
                    border-gray-200
                    bg-slate-50/40
                    text-sm
                    text-dark
                    placeholder:text-slate-400
                    outline-none
                    focus:bg-white
                    focus:border-slate-400
                    focus:ring-4
                    focus:ring-slate-900/5
                    transition-all
                  "
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="
                    block
                    mb-2
                    text-sm
                    font-medium
                    text-slate-700
                  "
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell me a little about your project..."
                  rows={6}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="
                    w-full
                    px-4
                    py-3.5
                    rounded-xl
                    border
                    border-gray-200
                    bg-slate-50/40
                    text-sm
                    text-dark
                    placeholder:text-slate-400
                    outline-none
                    focus:bg-white
                    focus:border-slate-400
                    focus:ring-4
                    focus:ring-slate-900/5
                    transition-all
                    resize-y
                    min-h-[150px]
                  "
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "sending"}
                className="
                  group
                  w-full
                  flex
                  items-center
                  justify-center
                  gap-2
                  bg-dark
                  text-white
                  py-3.5
                  px-5
                  rounded-xl
                  text-sm
                  font-semibold
                  shadow-sm
                  hover:shadow-md
                  hover:-translate-y-0.5
                  active:translate-y-0
                  transition-all
                  disabled:opacity-60
                  disabled:cursor-not-allowed
                  disabled:hover:translate-y-0
                  disabled:hover:shadow-sm
                "
              >
                {status === "sending" ? (
                  <>
                    <span
                      className="
                        w-4
                        h-4
                        rounded-full
                        border-2
                        border-white/30
                        border-t-white
                        animate-spin
                      "
                    />

                    Sending...
                  </>
                ) : (
                  <>
                    Send Message

                    <Send
                      size={16}
                      className="
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                        transition-transform
                      "
                    />
                  </>
                )}
              </button>

              {/* Success */}
              {status === "success" && (
                <div
                  role="status"
                  aria-live="polite"
                  className="
                    flex
                    items-start
                    gap-2.5
                    p-3
                    rounded-xl
                    bg-emerald-50
                    border
                    border-emerald-100
                    text-sm
                    text-emerald-700
                  "
                >
                  <CircleCheck
                    size={17}
                    className="shrink-0 mt-0.5"
                  />

                  <span>
                    Message sent successfully. I'll get back to you soon.
                  </span>
                </div>
              )}

              {/* Error */}
              {status === "error" && (
                <div
                  role="alert"
                  className="
                    flex
                    items-start
                    gap-2.5
                    p-3
                    rounded-xl
                    bg-red-50
                    border
                    border-red-100
                    text-sm
                    text-red-600
                  "
                >
                  <AlertCircle
                    size={17}
                    className="shrink-0 mt-0.5"
                  />

                  <span>
                    Something went wrong. Please try again or email me
                    directly.
                  </span>
                </div>
              )}

              {/* Response time */}
              {status !== "success" && status !== "error" && (
                <p className="text-center text-xs text-slate-400 pt-1">
                  I usually respond within 1–2 business days.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* =========================================================
            CLOSING DIVIDER
        ========================================================= */}
        <div className="flex items-center justify-center gap-4 mt-16 md:mt-20">
          <span className="h-px w-12 md:w-16 bg-gray-200" />

          <span
            className="
              text-[9px]
              md:text-[10px]
              font-semibold
              tracking-[0.25em]
              uppercase
              text-slate-400
              whitespace-nowrap
            "
          >
            Thanks for stopping by
          </span>

          <span className="h-px w-12 md:w-16 bg-gray-200" />
        </div>
      </div>
    </section>
  );
}