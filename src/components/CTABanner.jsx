import React from "react";
import { ArrowRight, Download } from "lucide-react";
import CharacterAtDesk from "./illustrations/CharacterAtDesk";

export default function CTABanner() {
  return (
    <section id="services" className="py-14 sm:py-16 md:py-20 lg:py-24">
      <div className="container-main">
        <div
          className="
            relative
            mx-auto
            max-w-[1600px]
            overflow-hidden
            rounded-[32px]
            border
            border-white/80
            bg-gradient-to-br
            from-[#F1EEF8]
            via-[#EBE8F3]
            to-[#E3E7EE]
            shadow-[0_20px_55px_rgba(31,35,61,0.08)]
          "
        >
          {/* Soft background glow */}
          <div
            className="
              pointer-events-none
              absolute
              -right-32
              -top-36
              h-[500px]
              w-[500px]
              rounded-full
              bg-[#D9D5F2]/30
              blur-3xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-48
              -left-40
              h-[440px]
              w-[440px]
              rounded-full
              bg-white/45
              blur-3xl
            "
          />

          {/* Main layout */}
          <div
            className="
              relative
              z-10
              grid
              min-h-[540px]
              md:grid-cols-[1.02fr_0.98fr]
            "
          >
            {/* =========================================================
                LEFT CONTENT
            ========================================================= */}
            <div
              className="
                relative
                z-20
                flex
                flex-col
                justify-center
                px-7
                py-12
                sm:px-10
                sm:py-14
                md:px-12
                md:py-16
                lg:px-16
                lg:py-16
                xl:px-[72px]
              "
            >
              {/* Availability badge */}
              <div
                className="
                  mb-6
                  inline-flex
                  w-fit
                  items-center
                  gap-2.5
                  rounded-full
                  border
                  border-white
                  bg-white/90
                  px-4
                  py-2.5
                  shadow-[0_5px_18px_rgba(31,35,61,0.05)]
                  backdrop-blur-sm
                "
              >
                <span
                  className="
                    h-2
                    w-2
                    shrink-0
                    rounded-full
                    bg-emerald-500
                    shadow-[0_0_0_3px_rgba(16,185,129,0.08)]
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.24em]
                    text-[#56657D]
                  "
                >
                  Open to opportunities
                </span>
              </div>

              {/* Heading */}
              <h2
                className="
                  max-w-[650px]
                  text-[40px]
                  font-bold
                  leading-[1.02]
                  tracking-[-0.045em]
                  text-dark
                  sm:text-[46px]
                  md:text-[52px]
                  lg:text-[56px]
                "
              >
                Let's build something{" "}
                <span className="text-[#98A3B7]">
                  great together.
                </span>
              </h2>

              {/* Description */}
              <p
                className="
                  mt-5
                  max-w-[560px]
                  text-[15px]
                  leading-7
                  text-[#506581]
                  sm:text-base
                  md:text-[17px]
                "
              >
                I'm open to opportunities where I can build reliable,
                scalable web applications and contribute across the full
                stack.
              </p>

              {/* CTA buttons */}
              <div
                className="
                  mt-7
                  flex
                  flex-col
                  gap-3
                  sm:flex-row
                  sm:items-center
                "
              >
                {/* Primary */}
                <a
                  href="/Aaliya_Manyar_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    h-14
                    items-center
                    justify-center
                    gap-2.5
                    rounded-xl
                    bg-dark
                    px-6
                    text-sm
                    font-semibold
                    text-white
                    shadow-[0_8px_18px_rgba(24,25,48,0.13)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#22233F]
                    hover:shadow-[0_11px_22px_rgba(24,25,48,0.16)]
                    focus:outline-none
                    focus:ring-2
                    focus:ring-dark/20
                    focus:ring-offset-2
                  "
                >
                  <span>View Resume</span>
                  <Download size={16} strokeWidth={2} />
                </a>

                {/* Secondary */}
                <a
                  href="#contact"
                  className="
                    inline-flex
                    h-14
                    items-center
                    justify-center
                    gap-2.5
                    rounded-xl
                    border
                    border-[#D2D7E2]
                    bg-white/90
                    px-6
                    text-sm
                    font-semibold
                    text-dark
                    shadow-[0_5px_15px_rgba(31,35,61,0.05)]
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-[#C4CAD7]
                    hover:bg-white
                    hover:shadow-[0_9px_20px_rgba(31,35,61,0.08)]
                    focus:outline-none
                    focus:ring-2
                    focus:ring-dark/15
                    focus:ring-offset-2
                  "
                >
                  <span>Let's Connect</span>
                  <ArrowRight size={17} strokeWidth={2} />
                </a>
              </div>

              {/* =======================================================
                  CAPABILITIES
              ======================================================= */}
              <div
                className="
                  mt-5
                  flex
                  max-w-[600px]
                  flex-wrap
                  items-center
                  gap-x-2
                  gap-y-1
                  text-[9px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[#7B879B]
                  sm:text-[10px]
                  sm:tracking-[0.18em]
                "
              >
                <span className="whitespace-nowrap">
                  Full-stack development
                </span>

                <span
                  aria-hidden="true"
                  className="text-[#B7BDC8]"
                >
                  •
                </span>

                <span className="whitespace-nowrap">
                  Web applications
                </span>

                <span
                  aria-hidden="true"
                  className="text-[#B7BDC8]"
                >
                  •
                </span>

                <span className="whitespace-nowrap">
                  Software engineering
                </span>
              </div>
            </div>

            {/* =========================================================
                RIGHT / CHARACTER
            ========================================================= */}
            <div
              className="
                relative
                min-h-[350px]
                md:min-h-0
              "
            >
              {/* Character glow */}
              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-[-70px]
                  right-[-20px]
                  h-[400px]
                  w-[400px]
                  rounded-full
                  bg-white/35
                  blur-3xl
                "
              />

              <CharacterAtDesk
                className="
                  absolute
                  bottom-[-4px]
                  right-[-8px]
                  z-10
                  h-[350px]
                  w-[380px]
                  object-contain
                  object-bottom
                  sm:h-[390px]
                  sm:w-[425px]
                  md:bottom-[-8px]
                  md:right-[2px]
                  md:h-[455px]
                  md:w-[485px]
                  lg:right-[8px]
                  lg:h-[495px]
                  lg:w-[525px]
                  xl:right-[14px]
                  xl:h-[515px]
                  xl:w-[545px]
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}