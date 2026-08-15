import React from "react";
import {
  SiJavascript,
  SiPython,
  SiReact,
  SiAngular,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiTailwindcss,
  SiNodedotjs,
  SiSpringboot,
  SiSpring,
  SiHibernate,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiApachemaven,
  SiVite,
  SiRedis,
} from "react-icons/si";
import { FaJava } from "react-icons/fa6";
import { Code2 } from "lucide-react";

/* =====================================================
   TECHNOLOGY DATA
===================================================== */

const categories = [
  {
    title: "Languages",
    description: "Core programming languages",
    skills: [
      {
        icon: <FaJava size={25} className="text-[#f89820]" />,
        title: "Java",
        desc: "Backend language",
        primary: true,
      },
      {
        icon: <SiJavascript size={24} className="text-[#f7df1e]" />,
        title: "JavaScript",
        desc: "Web programming",
        primary: true,
      },
      {
        icon: <SiPython size={24} className="text-[#3776ab]" />,
        title: "Python",
        desc: "General-purpose language",
      },
    ],
  },

  {
    title: "Frontend",
    description: "Modern user interfaces",
    skills: [
      {
        icon: <SiReact size={25} className="text-[#61dafb]" />,
        title: "React.js",
        desc: "UI development",
        primary: true,
      },
      {
        icon: <SiAngular size={24} className="text-[#dd0031]" />,
        title: "Angular",
        desc: "Web applications",
      },
      {
        icon: <SiHtml5 size={24} className="text-[#e34f26]" />,
        title: "HTML5",
        desc: "Web markup",
      },
      {
        icon: <SiCss size={24} className="text-[#1572b6]" />,
        title: "CSS3",
        desc: "Web styling",
      },
      {
        icon: <SiBootstrap size={24} className="text-[#7952b3]" />,
        title: "Bootstrap",
        desc: "Responsive UI",
      },
      {
        icon: <SiTailwindcss size={24} className="text-[#38bdf8]" />,
        title: "Tailwind CSS",
        desc: "Utility-first CSS",
      },
      {
        icon: <SiVite size={24} className="text-[#646cff]" />,
        title: "Vite",
        desc: "Frontend build tool",
      },
    ],
  },

  {
    title: "Backend",
    description: "APIs and server-side systems",
    skills: [
      {
        icon: <SiSpringboot size={25} className="text-[#6db33f]" />,
        title: "Spring Boot",
        desc: "Backend framework",
        primary: true,
      },
      {
        icon: <SiSpring size={25} className="text-[#6db33f]" />,
        title: "Spring Security",
        desc: "Authentication & security",
      },
      {
        icon: <SiHibernate size={24} className="text-[#59666c]" />,
        title: "Hibernate / JPA",
        desc: "Java persistence",
      },
      {
        icon: <SiNodedotjs size={24} className="text-[#5fa04e]" />,
        title: "Node.js",
        desc: "Backend runtime",
      },
    ],
  },

  {
    title: "Databases",
    description: "Data storage and management",
    skills: [
      {
        icon: <SiMysql size={24} className="text-[#00758f]" />,
        title: "MySQL",
        desc: "Relational database",
        primary: true,
      },
      {
        icon: <SiPostgresql size={24} className="text-[#4169e1]" />,
        title: "PostgreSQL",
        desc: "Advanced database",
      },
      {
        icon: <SiMongodb size={24} className="text-[#47a248]" />,
        title: "MongoDB",
        desc: "NoSQL database",
      },
      {
        icon: <SiRedis size={24} className="text-[#dc382d]" />,
        title: "Redis",
        desc: "Caching & storage",
      },
    ],
  },

  {
    title: "Tools & Workflow",
    description: "Development and collaboration tools",
    skills: [
      {
        icon: <SiGit size={24} className="text-[#f05032]" />,
        title: "Git",
        desc: "Version control",
      },
      {
        icon: <SiGithub size={24} className="text-white" />,
        title: "GitHub",
        desc: "Code collaboration",
      },
      {
        icon: <SiApachemaven size={24} className="text-[#c71a36]" />,
        title: "Maven",
        desc: "Java build tool",
      },
      {
        icon: <Code2 size={24} className="text-[#007acc]" />,
        title: "VS Code",
        desc: "Code editor",
      },
    ],
  },
];

/* =====================================================
   TECH CARD
===================================================== */

function TechCard({ skill }) {
  return (
    <div
      className="
        group
        relative
        flex
        min-h-[94px]
        items-center
        gap-4
        overflow-hidden
        rounded-xl
        border
        border-white/[0.07]
        bg-white/[0.025]
        px-4
        py-3.5
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-white/[0.15]
        hover:bg-white/[0.045]
        hover:shadow-[0_12px_30px_rgba(0,0,0,0.18)]
      "
    >
      {/* Subtle hover glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-8
          -top-8
          h-20
          w-20
          rounded-full
          bg-indigo-400/[0.025]
          blur-2xl
          transition-all
          duration-300
          group-hover:bg-indigo-400/[0.06]
        "
      />

      {/* Icon */}
      <div
        className="
          relative
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-xl
          border
          border-white/[0.06]
          bg-white/[0.055]
          transition-all
          duration-300
          group-hover:border-white/[0.12]
          group-hover:bg-white/[0.08]
        "
      >
        {skill.icon}
      </div>

      {/* Text */}
      <div className="relative min-w-0">
        <div className="flex items-center gap-2">
          <h3
            className="
              truncate
              text-[13px]
              font-semibold
              tracking-[-0.01em]
              text-white
            "
          >
            {skill.title}
          </h3>

          {skill.primary && (
            <span
              className="
                hidden
                shrink-0
                items-center
                gap-1
                rounded-full
                border
                border-emerald-400/10
                bg-emerald-400/[0.07]
                px-1.5
                py-0.5
                text-[8px]
                font-medium
                uppercase
                tracking-wider
                text-emerald-300/80
                sm:inline-flex
              "
            >
              <span className="h-1 w-1 rounded-full bg-emerald-400" />
              Primary
            </span>
          )}
        </div>

        <p
          className="
            mt-1
            truncate
            text-[11px]
            leading-relaxed
            text-white/35
            transition-colors
            duration-300
            group-hover:text-white/50
          "
        >
          {skill.desc}
        </p>
      </div>
    </div>
  );
}

/* =====================================================
   MAIN COMPONENT
===================================================== */

export default function TechStack() {
  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        bg-[#17172B]
        py-16
        sm:py-20
      "
    >
      {/* =================================================
          BACKGROUND GLOW
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[-120px]
          h-[400px]
          w-[650px]
          -translate-x-1/2
          rounded-full
          bg-indigo-500/[0.055]
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-160px]
          right-[-100px]
          h-[350px]
          w-[350px]
          rounded-full
          bg-purple-500/[0.025]
          blur-[110px]
        "
      />

      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="container-main relative z-10">

        {/* =================================================
            HEADER
        ================================================= */}

        <div className="mx-auto mb-11 max-w-3xl text-center">

          {/* Eyebrow */}
          <div
            className="
              mb-4
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/[0.09]
              bg-white/[0.035]
              px-3.5
              py-1.5
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-white/50
              "
            >
              Technologies
            </span>
          </div>

          {/* Heading */}
          <h2
            className="
              text-3xl
              font-bold
              leading-[1.1]
              tracking-[-0.035em]
              text-white
              sm:text-4xl
              lg:text-[42px]
            "
          >
            Tools I use to{" "}
            <span className="text-white/40">
              build things that work.
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-4
              max-w-xl
              text-[13px]
              leading-6
              text-white/40
              sm:text-sm
            "
          >
            A practical stack built around Java full-stack development,
            modern frontend technologies, scalable backend systems,
            and reliable development tools.
          </p>
        </div>

        {/* =================================================
            CATEGORIES
        ================================================= */}

        <div className="space-y-8">

          {categories.map((category) => (
            <div key={category.title}>

              {/* Category title */}
              <div className="mb-3.5 flex items-center gap-4">

                <div className="shrink-0">
                  <h3
                    className="
                      text-[13px]
                      font-semibold
                      tracking-tight
                      text-white
                    "
                  >
                    {category.title}
                  </h3>

                  <p
                    className="
                      mt-0.5
                      text-[10px]
                      text-white/25
                    "
                  >
                    {category.description}
                  </p>
                </div>

                <div className="h-px flex-1 bg-white/[0.055]" />
              </div>

              {/* Cards */}
              <div
                className="
                  grid
                  grid-cols-1
                  gap-2.5
                  sm:grid-cols-2
                  lg:grid-cols-3
                  xl:grid-cols-4
                "
              >
                {category.skills.map((skill) => (
                  <TechCard
                    key={skill.title}
                    skill={skill}
                  />
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}