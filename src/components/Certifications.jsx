import React from "react";
import {
  Cloud,
  ShieldCheck,
  BadgeCheck,
  ArrowUpRight,
  Sparkles,
  Database,
  LockKeyhole,
} from "lucide-react";

const certifications = [
  {
    title: "Data Engineering Virtual Internship",
    issuer: "AWS Academy",
    year: "2025",
    category: "Cloud & Data",
    description:
      "Hands-on exposure to cloud computing, data engineering concepts, and AWS technologies.",
    icon: Cloud,
    iconClass:
      "bg-[#f1eff9] text-[#5869a8] border-[#e5e1f1]",
    credentialUrl: "", // Add your actual credential URL here
  },
  {
    title: "Cybersecurity Virtual Internship",
    issuer: "Palo Alto Networks",
    year: "2024",
    category: "Cybersecurity",
    description:
      "Practical exposure to cybersecurity concepts, network security, and modern security practices.",
    icon: ShieldCheck,
    iconClass:
      "bg-[#eef8f4] text-[#438b72] border-[#dcefe8]",
    credentialUrl: "", // Add your actual credential URL here
  },
];

const stats = [
  {
    value: "02",
    label: "Credentials",
  },
  {
    value: "02",
    label: "Technical Areas",
  },
  {
    value: "2024–25",
    label: "Learning Period",
  },
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="
        relative
        overflow-hidden
        bg-[#f8f8fb]
        py-20
        md:py-24
        lg:py-28
      "
    >
      {/* =====================================================
          SOFT BACKGROUND GLOW
         ===================================================== */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-180px]
          h-[520px]
          w-[720px]
          -translate-x-1/2
          rounded-full
          bg-[#ebe9f7]/70
          blur-[110px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-180px]
          top-[420px]
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#efedf8]/70
          blur-[100px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-[-180px]
          bottom-[100px]
          h-[320px]
          w-[320px]
          rounded-full
          bg-[#f1f2fa]/80
          blur-[90px]
        "
      />

      <div className="container-main relative z-10 mx-auto w-full max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* =====================================================
            SECTION HEADER
           ===================================================== */}
        <div className="mx-auto max-w-4xl text-center">
          {/* Eyebrow */}
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-gray-200
              bg-white
              px-4
              py-2
              shadow-[0_4px_16px_rgba(31,32,54,0.05)]
            "
          >
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-emerald-500
                shadow-[0_0_0_3px_rgba(16,185,129,0.08)]
              "
            />

            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-slate-500
              "
            >
              Credentials
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              mt-7
              text-4xl
              font-bold
              leading-[1.08]
              tracking-[-0.04em]
              text-[#17182f]
              sm:text-[46px]
              lg:text-[50px]
            "
          >
            Credentials that{" "}
            <span className="text-[#9ca3b3]">
              back my skills.
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-slate-500
              sm:text-base
            "
          >
            Certifications and practical learning experiences that have
            strengthened my foundation in cloud, data, and cybersecurity.
          </p>
        </div>

        {/* =====================================================
            STATS STRIP
           ===================================================== */}
        <div
          className="
            mx-auto
            mt-12
            max-w-3xl
            border-y
            border-slate-200/80
          "
        >
          <div className="grid grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`
                  flex
                  flex-col
                  items-center
                  justify-center
                  px-3
                  py-6
                  text-center
                  sm:py-7
                  ${
                    index !== stats.length - 1
                      ? "border-r border-slate-200/80"
                      : ""
                  }
                `}
              >
                <span
                  className="
                    text-xl
                    font-bold
                    tracking-tight
                    text-[#17182f]
                    sm:text-2xl
                  "
                >
                  {stat.value}
                </span>

                <span
                  className="
                    mt-1.5
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.2em]
                    text-slate-400
                    sm:text-[10px]
                  "
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* =====================================================
            CERTIFICATIONS
           ===================================================== */}
        <div className="mx-auto mt-12 max-w-5xl space-y-4">
          {certifications.map((cert) => {
            const Icon = cert.icon;
            const hasCredential = Boolean(cert.credentialUrl);

            return (
              <article
                key={cert.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[22px]
                  border
                  border-slate-200/80
                  bg-white
                  px-5
                  py-5
                  shadow-[0_8px_30px_rgba(31,32,54,0.045)]
                  transition-all
                  duration-300
                  hover:-translate-y-[2px]
                  hover:border-slate-300
                  hover:shadow-[0_16px_40px_rgba(31,32,54,0.08)]
                  sm:px-6
                  sm:py-5
                  lg:px-7
                "
              >
                {/* Subtle top accent */}
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    left-0
                    top-0
                    h-full
                    w-[3px]
                    origin-top
                    scale-y-0
                    bg-gradient-to-b
                    from-emerald-400
                    to-transparent
                    transition-transform
                    duration-300
                    group-hover:scale-y-100
                  "
                />

                <div
                  className="
                    flex
                    flex-col
                    gap-5
                    md:flex-row
                    md:items-center
                  "
                >
                  {/* =================================================
                      ICON
                     ================================================= */}
                  <div
                    className={`
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-[14px]
                      border
                      transition-transform
                      duration-300
                      group-hover:scale-[1.03]
                      ${cert.iconClass}
                    `}
                  >
                    <Icon
                      size={21}
                      strokeWidth={1.7}
                    />
                  </div>

                  {/* =================================================
                      MAIN INFORMATION
                     ================================================= */}
                  <div className="min-w-0 flex-1">
                    {/* Metadata */}
                    <div
                      className="
                        flex
                        flex-wrap
                        items-center
                        gap-x-2
                        gap-y-1
                        text-[10px]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                      "
                    >
                      <span className="inline-flex items-center gap-1.5 text-emerald-500">
                        <BadgeCheck size={13} strokeWidth={2} />
                        {cert.year}
                      </span>

                      <span className="text-slate-300">
                        •
                      </span>

                      <span className="text-slate-400">
                        {cert.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="
                        mt-2
                        text-base
                        font-bold
                        leading-snug
                        tracking-[-0.015em]
                        text-[#17182f]
                        sm:text-lg
                      "
                    >
                      {cert.title}
                    </h3>

                    {/* Issuer */}
                    <p
                      className="
                        mt-1
                        text-sm
                        font-medium
                        text-slate-500
                      "
                    >
                      {cert.issuer}
                    </p>

                    {/* Description */}
                    <p
                      className="
                        mt-2
                        max-w-3xl
                        text-xs
                        leading-6
                        text-slate-400
                        sm:text-sm
                      "
                    >
                      {cert.description}
                    </p>
                  </div>

                  {/* =================================================
                      RIGHT SIDE ACTIONS
                     ================================================= */}
                  <div
                    className="
                      flex
                      shrink-0
                      items-center
                      justify-between
                      gap-5
                      border-t
                      border-slate-100
                      pt-4
                      md:flex-col
                      md:items-end
                      md:justify-center
                      md:border-t-0
                      md:pt-0
                    "
                  >
                    {/* Verified badge */}
                    <span
                      className="
                        inline-flex
                        items-center
                        gap-1.5
                        rounded-full
                        border
                        border-emerald-100
                        bg-emerald-50
                        px-3
                        py-1.5
                        text-[9px]
                        font-bold
                        uppercase
                        tracking-[0.16em]
                        text-emerald-600
                      "
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Verified
                    </span>

                    {/* Credential link */}
                    {hasCredential ? (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          group/link
                          inline-flex
                          items-center
                          gap-1.5
                          text-xs
                          font-semibold
                          text-[#17182f]
                          transition-colors
                          hover:text-emerald-600
                        "
                      >
                        <span>View Credential</span>

                        <ArrowUpRight
                          size={14}
                          strokeWidth={1.8}
                          className="
                            transition-transform
                            duration-200
                            group-hover/link:translate-x-0.5
                            group-hover/link:-translate-y-0.5
                          "
                        />
                      </a>
                    ) : (
                      <span
                        className="
                          inline-flex
                          items-center
                          gap-1.5
                          text-xs
                          font-semibold
                          text-slate-400
                        "
                      >
                        Credential available
                      </span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* =====================================================
            TECHNICAL AREA TAGS
           ===================================================== */}
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-slate-200
              bg-white
              px-3.5
              py-2
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.15em]
              text-slate-500
              shadow-[0_3px_12px_rgba(31,32,54,0.035)]
            "
          >
            <Database
              size={13}
              strokeWidth={1.7}
              className="text-[#6574aa]"
            />
            Cloud & Data
          </span>

          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-slate-200
              bg-white
              px-3.5
              py-2
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.15em]
              text-slate-500
              shadow-[0_3px_12px_rgba(31,32,54,0.035)]
            "
          >
            <LockKeyhole
              size={13}
              strokeWidth={1.7}
              className="text-[#438b72]"
            />
            Cybersecurity
          </span>
        </div>

        {/* =====================================================
            FOOTER MESSAGE
           ===================================================== */}
        <div className="mt-10 text-center">
          <div className="mx-auto flex max-w-md items-center justify-center gap-4">
            <span className="h-px flex-1 bg-slate-200" />

            <div
              className="
                inline-flex
                shrink-0
                items-center
                gap-2
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-slate-400
              "
            >
              <Sparkles
                size={13}
                strokeWidth={1.7}
                className="text-amber-400"
              />
              Always Learning
            </div>

            <span className="h-px flex-1 bg-slate-200" />
          </div>

          <p
            className="
              mt-3
              text-xs
              text-slate-400
            "
          >
            Building knowledge beyond the classroom.
          </p>
        </div>
      </div>
    </section>
  );
}