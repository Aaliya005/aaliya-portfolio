import React from "react";
import {
  Code2,
  Layers3,
  Lightbulb,
  Rocket,
  ArrowRight,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      style={{
        background: "#F8F9FC",
        padding: "50px 0 160px",
      }}
    >
      {/* Section Header */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px",
          textAlign: "center",
        }}
      >
        {/* Label */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "7px 14px",
            borderRadius: "999px",
            background: "#FFFFFF",
            border: "1px solid #E1E3EC",
            boxShadow: "0 4px 12px rgba(20, 27, 59, 0.05)",
            marginBottom: "22px",
          }}
        >
          <span
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "#19B88A",
              display: "inline-block",
            }}
          />

          <span
            style={{
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              color: "#5D667A",
            }}
          >
            WHO I AM
          </span>
        </div>

        {/* Main Heading */}
        <h2
          style={{
            margin: 0,
            fontSize: "clamp(42px, 5vw, 62px)",
            lineHeight: 1.02,
            fontWeight: 800,
            letterSpacing: "-0.04em",
            color: "#151B3B",
          }}
        >
          Building thoughtful digital
          <br />

          <span
            style={{
              color: "#6C7891",
            }}
          >
            experiences with clean code.
          </span>
        </h2>

        {/* Subtitle */}
        <p
          style={{
            maxWidth: "760px",
            margin: "24px auto 0",
            fontSize: "17px",
            lineHeight: 1.7,
            color: "#526684",
          }}
        >
          A little about the developer behind the projects, technologies, and
          ideas you see throughout this portfolio.
        </p>
      </div>

      {/* Main About Card */}
      <div
        style={{
          maxWidth: "1135px",
          margin: "78px auto 0",
          padding: "38px 40px",
          borderRadius: "26px",
          background:
            "linear-gradient(135deg, #F0EFFA 0%, #F4F3FB 48%, #ECEBF7 100%)",
          border: "1px solid #DEDDEA",
          boxShadow:
            "0 24px 60px rgba(31, 39, 79, 0.08), 0 4px 16px rgba(31, 39, 79, 0.04)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.05fr 0.95fr",
            gap: "42px",
            alignItems: "stretch",
          }}
        >
          {/* LEFT CONTENT */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {/* Developer Badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "13px",
                marginBottom: "28px",
              }}
            >
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "11px",
                  background: "#151B3B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#FFFFFF",
                  boxShadow: "0 8px 18px rgba(21, 27, 59, 0.18)",
                  flexShrink: 0,
                }}
              >
                <Code2 size={21} strokeWidth={2} />
              </div>

              <div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#151B3B",
                    marginBottom: "3px",
                  }}
                >
                  Java Full-Stack Developer
                </div>

                <div
                  style={{
                    fontSize: "12px",
                    color: "#73809A",
                  }}
                >
                  Building useful things with thoughtful code
                </div>
              </div>
            </div>

            {/* Heading */}
            <h3
              style={{
                margin: 0,
                fontSize: "32px",
                lineHeight: 1.15,
                fontWeight: 800,
                letterSpacing: "-0.025em",
                color: "#151B3B",
                maxWidth: "500px",
              }}
            >
              I turn ideas into{" "}
              <span
                style={{
                  color: "#71809A",
                }}
              >
                working products.
              </span>
            </h3>

            {/* Description */}
            <p
              style={{
                margin: "24px 0 0",
                maxWidth: "560px",
                fontSize: "15px",
                lineHeight: 1.9,
                color: "#526684",
              }}
            >
              I'm a Java Full-Stack Developer who enjoys turning ideas into
              working products. I build full-stack applications with React.js,
              Spring Boot, and MySQL, focusing on clean architecture and
              interfaces people actually enjoy using.
            </p>

            <p
              style={{
                margin: "16px 0 0",
                maxWidth: "560px",
                fontSize: "15px",
                lineHeight: 1.9,
                color: "#526684",
              }}
            >
              I like solving real problems through thoughtful design, scalable
              code, and continuous learning — not just building things that
              look good on paper.
            </p>

            {/* Technology Pills */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "9px",
                marginTop: "25px",
              }}
            >
              {["Java", "React.js", "Spring Boot", "MySQL"].map((tech) => (
                <span
                  key={tech}
                  style={{
                    padding: "8px 14px",
                    borderRadius: "999px",
                    background: "#FFFFFF",
                    border: "1px solid #E0E2EA",
                    color: "#50617D",
                    fontSize: "12px",
                    fontWeight: 600,
                    boxShadow: "0 3px 8px rgba(30, 38, 70, 0.04)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Button */}
            <div style={{ marginTop: "28px" }}>
              <a
                href="#education"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "13px 21px",
                  borderRadius: "11px",
                  background: "#151B3B",
                  color: "#FFFFFF",
                  fontSize: "13px",
                  fontWeight: 700,
                  textDecoration: "none",
                  boxShadow: "0 10px 22px rgba(21, 27, 59, 0.18)",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 14px 28px rgba(21, 27, 59, 0.24)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 22px rgba(21, 27, 59, 0.18)";
                }}
              >
                View My Journey
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* RIGHT FEATURE CARDS */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "18px",
            }}
          >
            <FeatureCard
              icon={<Code2 size={21} />}
              title="Full-Stack"
              description="Building complete web applications from UI to backend."
            />

            <FeatureCard
              icon={<Layers3 size={21} />}
              title="Clean Architecture"
              description="Writing structured, maintainable and scalable code."
            />

            <FeatureCard
              icon={<Lightbulb size={21} />}
              title="Problem Solver"
              description="Turning complex problems into simple solutions."
            />

            <FeatureCard
              icon={<Rocket size={21} />}
              title="Always Learning"
              description="Exploring better tools, patterns and technologies."
            />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div
        style={{
          maxWidth: "900px",
          margin: "32px auto 0",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
      >
        <Stat value="2+" label="Projects" />
        <Stat value="2" label="Internships" />
        <Stat value="8.43" label="CGPA" />
        <Stat value="Java" label="Primary Stack" />
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          .about-main-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 700px) {
          #about {
            padding-top: 40px !important;
          }

          #about h2 {
            font-size: 40px !important;
          }

          #about > div:nth-child(2) {
            margin-top: 50px !important;
            padding: 28px 22px !important;
          }

          #about > div:nth-child(3) {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 520px) {
          #about h2 {
            font-size: 34px !important;
          }

          #about > div:nth-child(2) {
            margin-left: 16px !important;
            margin-right: 16px !important;
          }

          #about > div:nth-child(3) {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

/* ----------------------------- */
/* Feature Card                   */
/* ----------------------------- */

function FeatureCard({ icon, title, description }) {
  return (
    <div
      style={{
        minHeight: "205px",
        padding: "24px 22px",
        borderRadius: "18px",
        background: "rgba(255, 255, 255, 0.88)",
        border: "1px solid rgba(255, 255, 255, 0.95)",
        boxShadow:
          "0 10px 25px rgba(34, 42, 76, 0.07), inset 0 1px 0 rgba(255,255,255,0.8)",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.25s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow =
          "0 16px 32px rgba(34, 42, 76, 0.11)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 10px 25px rgba(34, 42, 76, 0.07)";
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: "42px",
          height: "42px",
          borderRadius: "12px",
          background: "#EFEDFA",
          color: "#151B3B",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "22px",
        }}
      >
        {icon}
      </div>

      {/* Title */}
      <h4
        style={{
          margin: 0,
          fontSize: "15px",
          fontWeight: 700,
          color: "#151B3B",
        }}
      >
        {title}
      </h4>

      {/* Description */}
      <p
        style={{
          margin: "12px 0 0",
          fontSize: "13px",
          lineHeight: 1.7,
          color: "#71809A",
        }}
      >
        {description}
      </p>
    </div>
  );
}

/* ----------------------------- */
/* Stats                          */
/* ----------------------------- */

function Stat({ value, label }) {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "0 20px",
        borderRight: "1px solid #DDE0E9",
      }}
    >
      <div
        style={{
          fontSize: "17px",
          fontWeight: 800,
          color: "#151B3B",
          marginBottom: "5px",
        }}
      >
        {value}
      </div>

      <div
        style={{
          fontSize: "11px",
          color: "#71809A",
        }}
      >
        {label}
      </div>
    </div>
  );
}