import React from "react";
import { GraduationCap, Sparkles } from "lucide-react";

const GraduateCharacter = "/graduate-character.png";

const education = [
  {
    degree: "HSC",
    school: "Ashok Vidyalaya And Jr. College",
    duration: "2021 — 2023",
    resultLabel: "Score",
    result: "61.67%",
  },
  {
    degree: "Bachelor's Degree in Computer Science",
    school: "JSPM University",
    duration: "2023 — 2026",
    resultLabel: "CGPA",
    result: "8.43",
  },
];

const offsets = ["", "md:ml-10 lg:ml-14"];

export default function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-bg-light py-16 md:py-20 lg:py-24"
    >
      {/* -------------------------------------------------
          BACKGROUND GLOW
      -------------------------------------------------- */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[34rem] w-[44rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(224,219,245,0.55)_0%,rgba(224,219,245,0.2)_35%,transparent_72%)] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-12rem] top-[18rem] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(220,214,238,0.28)_0%,transparent_70%)] blur-3xl"
      />

      <div className="container-main relative z-10">
        {/* -------------------------------------------------
            SECTION HEADING
        -------------------------------------------------- */}
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
          {/* Section Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-200/80 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />

            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
              Education
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-dark sm:text-5xl">
            My academic{" "}
            <span className="text-gray-400">journey.</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 md:text-lg">
            The foundation behind how I learn, build, and grow as a developer.
          </p>
        </div>

        {/* -------------------------------------------------
            MAIN CONTENT
        -------------------------------------------------- */}
        <div className="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-[minmax(0,1fr)_auto] lg:gap-14">
          {/* =================================================
              LEFT — EDUCATION TIMELINE
          ================================================== */}
          <div className="relative">
            {/* Timeline line */}
            <div
              aria-hidden="true"
              className="absolute left-[27px] top-7 bottom-[58px] hidden border-l border-dashed border-gray-300 md:block"
            />

            <div className="space-y-8 md:space-y-9">
              {education.map((item, idx) => (
                <div
                  key={item.school}
                  className={`relative flex items-start gap-4 md:gap-5 ${offsets[idx]}`}
                >
                  {/* Timeline Icon */}
                  <div
                    className="
                      relative z-10
                      flex h-14 w-14 shrink-0 items-center justify-center
                      rounded-full
                      bg-dark
                      text-white
                      shadow-[0_10px_25px_rgba(15,18,45,0.14)]
                      ring-4 ring-bg-light
                      transition-all duration-300
                      hover:-translate-y-0.5
                      hover:shadow-[0_14px_30px_rgba(15,18,45,0.2)]
                    "
                  >
                    <GraduationCap size={21} strokeWidth={2} />
                  </div>

                  {/* Education Card */}
                  <div
                    className="
                      group
                      min-w-0 flex-1
                      rounded-2xl
                      border border-gray-200/80
                      bg-white/95
                      p-5
                      shadow-[0_8px_25px_rgba(15,18,45,0.04)]
                      backdrop-blur-sm
                      transition-all duration-300
                      hover:-translate-y-1
                      hover:border-gray-300
                      hover:shadow-[0_18px_40px_rgba(15,18,45,0.08)]
                      md:p-6
                    "
                  >
                    <div className="flex items-center justify-between gap-5">
                      {/* Education Information */}
                      <div className="min-w-0">
                        {/* Duration */}
                        <span
                          className="
                            inline-flex
                            rounded-full
                            bg-[#f2f0f8]
                            px-3
                            py-1
                            text-[10px]
                            font-semibold
                            uppercase
                            tracking-[0.16em]
                            text-gray-500
                          "
                        >
                          {item.duration}
                        </span>

                        {/* Degree */}
                        <h3
                          className="
                            mt-3
                            text-lg
                            font-bold
                            leading-snug
                            text-dark
                            transition-colors
                            duration-300
                            group-hover:text-[#171a3d]
                            md:text-xl
                          "
                        >
                          {item.degree}
                        </h3>

                        {/* School */}
                        <p className="mt-1.5 text-sm leading-relaxed text-gray-500 md:text-base">
                          {item.school}
                        </p>
                      </div>

                      {/* Result */}
                      <div
                        className="
                          flex
                          min-w-[96px]
                          shrink-0
                          flex-col
                          items-center
                          justify-center
                          rounded-xl
                          border border-[#e9e5f3]
                          bg-[#f7f5fb]
                          px-4
                          py-3
                          text-center
                          transition-all
                          duration-300
                          group-hover:border-[#ded8ec]
                          group-hover:bg-[#f4f1fa]
                        "
                      >
                        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-gray-400">
                          {item.resultLabel}
                        </p>

                        <p className="mt-1 text-xl font-bold tracking-tight text-dark md:text-2xl">
                          {item.result}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* =================================================
                  FINAL MILESTONE
              ================================================== */}
              <div className="relative flex items-center gap-4 pl-0 md:ml-14 md:gap-5 lg:ml-20">
                {/* Milestone Icon */}
                <div
                  className="
                    relative z-10
                    flex h-14 w-14 shrink-0 items-center justify-center
                    rounded-full
                    bg-amber-400
                    text-dark
                    shadow-[0_10px_25px_rgba(245,158,11,0.18)]
                    ring-4 ring-bg-light
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-[0_14px_30px_rgba(245,158,11,0.25)]
                  "
                >
                  <Sparkles size={21} strokeWidth={2} />
                </div>

                {/* Milestone Content */}
                <div
                  className="
                    rounded-xl
                    border border-transparent
                    px-1
                    py-2
                    transition-all
                    duration-300
                    hover:border-gray-200/70
                    hover:bg-white/50
                    hover:px-4
                  "
                >
                  <p className="text-base font-bold text-dark md:text-lg">
                    Graduated & ready for what's next
                  </p>

                  <p className="mt-1 text-sm text-gray-500 md:text-base">
                    Ready to turn knowledge into meaningful work.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT — GRADUATE CHARACTER
          ================================================== */}
          <div
            className="
              relative
              mx-auto
              flex
              w-full
              max-w-[25rem]
              items-center
              justify-center
              md:mx-0
              md:-translate-y-5
              lg:-translate-y-8
              lg:translate-x-2
            "
          >
            {/* Soft Character Glow */}
            <div
              aria-hidden="true"
              className="
                absolute
                right-1/2
                top-1/2
                h-[22rem]
                w-[20rem]
                translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[radial-gradient(circle,rgba(218,211,238,0.7)_0%,rgba(224,220,240,0.38)_45%,transparent_72%)]
                blur-2xl
              "
            />

            {/* Background Blob */}
            <div
              aria-hidden="true"
              className="
                absolute
                right-0
                top-1/2
                h-[27rem]
                w-[21rem]
                -translate-y-1/2
                rounded-[55%_45%_48%_52%/48%_52%_45%_55%]
                bg-gradient-to-br
                from-[#e5e0f0]
                via-[#ddd8e9]
                to-[#d3d8e3]
                opacity-90
              "
            />

            {/* Character */}
            <img
              src={GraduateCharacter}
              alt="Graduate character"
              className="
                relative
                z-10
                w-[22rem]
                object-contain
                -translate-y-3
                drop-shadow-[0_18px_25px_rgba(20,20,50,0.08)]
                transition-transform
                duration-500
                hover:-translate-y-5
                md:w-[24rem]
                lg:w-[26rem]
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}