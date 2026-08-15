import React from "react";
import { ArrowRight, Download, BriefcaseBusiness } from "lucide-react";
import CharacterSitting from "./illustrations/CharacterSitting";

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        min-h-[760px]
        md:min-h-[820px]
        overflow-hidden
        bg-gradient-to-br
        from-[#E7E3F1]
        via-[#DDD9EA]
        to-[#D4D7E5]
      "
    >
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================== */}

      {/* Soft ambient glow */}
      <div
        className="
          absolute
          left-[48%]
          top-[42%]
          -translate-x-1/2
          -translate-y-1/2
          w-[520px]
          h-[420px]
          md:w-[650px]
          md:h-[520px]
          rounded-full
          bg-[#CFC3FF]/25
          blur-[90px]
          pointer-events-none
        "
      />

      {/* =========================================================
          HERO CONTENT
      ========================================================== */}

      <div className="container-main relative z-10 w-full py-16 md:py-24">
        <div className="grid md:grid-cols-[0.95fr_1.05fr] gap-6 lg:gap-2 items-center min-h-[650px]">

          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}

          <div className="relative z-20 text-center md:text-left">

            {/* Availability badge */}
            <div
              className="
                inline-flex
                items-center
                gap-2
                px-5
                py-2.5
                rounded-full
                bg-white/65
                backdrop-blur-xl
                border
                border-white/70
                shadow-[0_8px_25px_rgba(30,35,70,0.08)]
                text-[#596174]
                text-sm
                font-semibold
              "
            >
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
              Available for opportunities
            </div>

            {/* Main heading */}
            <h1
              className="
                mt-8
                text-5xl
                sm:text-6xl
                md:text-6xl
                lg:text-[76px]
                xl:text-[82px]
                font-extrabold
                tracking-[-0.045em]
                leading-[0.96]
                text-[#171A35]
              "
            >
              Hello, I'm
              <br />

              <span className="text-[#626878]">
                Aaliya Manyar
              </span>
            </h1>

            {/* Role */}
            <div className="mt-8">
              <h2
                className="
                  text-xl
                  md:text-2xl
                  lg:text-[26px]
                  font-bold
                  text-[#182746]
                "
              >
                Java Full-Stack Developer
              </h2>

              {/* Small decorative line */}
              <div
                className="
                  mt-4
                  w-[84px]
                  h-[2px]
                  bg-[#7B8292]
                "
              />
            </div>

            {/* Description */}
            <p
              className="
                mt-7
                max-w-[620px]
                mx-auto
                md:mx-0
                text-base
                md:text-lg
                lg:text-[19px]
                leading-[1.8]
                text-[#5B6980]
              "
            >
              I build modern, responsive, and user-friendly web applications
              using React.js, Spring Boot, and MySQL — turning complex ideas
              into clean, scalable digital experiences.
            </p>

            {/* Buttons */}
            <div
              className="
                mt-9
                flex
                flex-wrap
                gap-4
                justify-center
                md:justify-start
              "
            >
              {/* Projects */}
              <a
                href="#works"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  px-7
                  py-4
                  rounded-xl
                  bg-[#171A35]
                  text-white
                  text-sm
                  md:text-base
                  font-semibold
                  shadow-[0_12px_25px_rgba(23,26,53,0.18)]
                  hover:-translate-y-1
                  hover:shadow-[0_18px_30px_rgba(23,26,53,0.25)]
                  transition-all
                  duration-300
                "
              >
                View Projects
                <ArrowRight size={18} />
              </a>

              {/* Resume */}
              <a
                href="/Aaliya_Manyar_Resume.pdf"
                download
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  px-7
                  py-4
                  rounded-xl
                  bg-white/70
                  backdrop-blur-md
                  border
                  border-white/80
                  text-[#20243E]
                  text-sm
                  md:text-base
                  font-semibold
                  shadow-[0_8px_25px_rgba(30,35,70,0.06)]
                  hover:-translate-y-1
                  hover:bg-white
                  transition-all
                  duration-300
                "
              >
                Download Resume
                <Download size={18} />
              </a>

              {/* Contact */}
              <a
                href="#contact"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  px-7
                  py-4
                  rounded-xl
                  border
                  border-[#AEB4C5]
                  text-[#20243E]
                  text-sm
                  md:text-base
                  font-semibold
                  hover:-translate-y-1
                  hover:bg-white/40
                  transition-all
                  duration-300
                "
              >
                Let's Talk
              </a>
            </div>
          </div>

          {/* =====================================================
              RIGHT VISUAL
          ====================================================== */}

          <div
            className="
              relative
              min-h-[500px]
              md:min-h-[600px]
              flex
              items-center
              justify-center
            "
          >

            {/* =================================================
                SOFT BLOB / GLOW BEHIND CHARACTER
            ================================================= */}

            <div
              className="
                absolute
                z-0

                left-[18%]
                top-1/2
                -translate-x-1/2
                -translate-y-1/2

                w-[390px]
                h-[390px]
                md:w-[500px]
                md:h-[500px]

                rounded-full

                bg-gradient-to-br
                from-[#EEE9FF]/80
                via-[#DCD0FF]/55
                to-[#C7BCF2]/20

                blur-[1px]

                shadow-[0_0_80px_rgba(185,168,255,0.28)]

                pointer-events-none
              "
            />

            {/* Extra blurred glow */}
            <div
              className="
                absolute
                z-0

                left-[18%]
                top-1/2
                -translate-x-1/2
                -translate-y-1/2

                w-[340px]
                h-[340px]
                md:w-[440px]
                md:h-[440px]

                rounded-full

                bg-[#C8B9FF]/20

                blur-[65px]

                pointer-events-none
              "
            />

            {/* Very subtle outer ring */}
            <div
              className="
                absolute
                z-0

                left-[18%]
                top-1/2
                -translate-x-1/2
                -translate-y-1/2

                w-[410px]
                h-[410px]
                md:w-[520px]
                md:h-[520px]

                rounded-full

                border
                border-white/35

                pointer-events-none
              "
            />

            {/* Decorative small dot */}
            <div
              className="
                absolute
                z-10
                left-[2%]
                top-[18%]
                w-4
                h-4
                rounded-full
                bg-[#B9BBD0]/70
              "
            />

            {/* =================================================
                CHARACTER
                SHIFTED SLIGHTLY FURTHER LEFT
            ================================================= */}

            <div
              className="
                relative
                z-20

                flex
                items-center
                justify-center

                -translate-x-[65px]
                md:-translate-x-[85px]
                lg:-translate-x-[105px]
                xl:-translate-x-[120px]

                scale-[1.12]
                md:scale-[1.18]
                lg:scale-[1.24]

                transition-transform
                duration-500
              "
            >
              <CharacterSitting
                className="
                  w-[390px]
                  h-[390px]

                  md:w-[500px]
                  md:h-[500px]

                  lg:w-[570px]
                  lg:h-[570px]

                  xl:w-[610px]
                  xl:h-[610px]

                  object-contain
                "
              />
            </div>

            {/* =================================================
                QUICK OVERVIEW CARD
            ================================================= */}

            <div
              className="
                hidden
                lg:block

                absolute
                z-30

                right-[-15px]
                xl:right-[-5px]

                top-[50%]
                -translate-y-1/2

                w-[285px]

                rounded-[22px]

                bg-white/55
                backdrop-blur-2xl

                border
                border-white/75

                shadow-[0_20px_50px_rgba(30,35,70,0.12)]

                px-7
                py-6
              "
            >
              {/* Card heading */}
              <div className="flex items-center gap-4">

                <div
                  className="
                    w-11
                    h-11
                    rounded-xl
                    bg-[#171A35]
                    flex
                    items-center
                    justify-center
                    text-white
                    shadow-lg
                  "
                >
                  <BriefcaseBusiness size={20} />
                </div>

                <div>
                  <p className="text-xs text-[#7A8192]">
                    Quick Overview
                  </p>

                  <h3 className="text-base font-bold text-[#20243E]">
                    Developer Profile
                  </h3>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-6">
                <StatRow
                  label="Projects"
                  value="2+"
                />

                <StatRow
                  label="Internships"
                  value="2"
                />

                <StatRow
                  label="CGPA"
                  value="8.43"
                />
              </div>

              {/* Availability */}
              <div
                className="
                  mt-2
                  pt-4
                  border-t
                  border-[#D8DAE4]
                  flex
                  items-center
                  gap-2
                "
              >
                <span
                  className="
                    w-2.5
                    h-2.5
                    rounded-full
                    bg-emerald-500
                    shadow-[0_0_8px_rgba(16,185,129,0.5)]
                  "
                />

                <span
                  className="
                    text-sm
                    font-semibold
                    text-emerald-600
                  "
                >
                  Available for Work
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            MOBILE STATS
        ====================================================== */}

        <div
          className="
            lg:hidden
            relative
            z-30
            max-w-md
            mx-auto
            mt-2
            bg-white/55
            backdrop-blur-2xl
            rounded-2xl
            px-6
            py-5
            border
            border-white/70
            shadow-[0_15px_40px_rgba(30,35,70,0.10)]
          "
        >
          <div className="flex items-center gap-3 mb-4">

            <div
              className="
                w-10
                h-10
                rounded-xl
                bg-[#171A35]
                flex
                items-center
                justify-center
                text-white
              "
            >
              <BriefcaseBusiness size={18} />
            </div>

            <div>
              <p className="text-xs text-[#7A8192]">
                Quick Overview
              </p>

              <p className="font-bold text-[#20243E]">
                Developer Profile
              </p>
            </div>
          </div>

          <StatRow
            label="Projects"
            value="2+"
          />

          <StatRow
            label="Internships"
            value="2"
          />

          <StatRow
            label="CGPA"
            value="8.43"
          />

          <div
            className="
              flex
              items-center
              gap-2
              pt-4
              mt-1
              border-t
              border-[#D8DAE4]
            "
          >
            <span
              className="
                w-2.5
                h-2.5
                rounded-full
                bg-emerald-500
              "
            />

            <span
              className="
                text-sm
                font-semibold
                text-emerald-600
              "
            >
              Available for Work
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}


/* =============================================================
   STAT ROW
============================================================= */

function StatRow({ label, value }) {
  return (
    <div
      className="
        flex
        justify-between
        items-center
        py-3.5
        border-b
        border-[#D8DAE4]
        last:border-0
      "
    >
      <span className="text-sm text-[#747C90]">
        {label}
      </span>

      <span className="text-sm font-bold text-[#20243E]">
        {value}
      </span>
    </div>
  );
}