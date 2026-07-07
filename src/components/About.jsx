// components/About/index.jsx
import React, { useEffect, useRef, useState } from "react";
import { HiOutlineMail, HiOutlineSparkles } from "react-icons/hi";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import projects from "../data/Data";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiAstro,
  SiTailwindcss,
  SiBootstrap,
  SiVite,
  SiNodedotjs,
  SiExpress,
  SiDotnet,
  SiCplusplus,
  SiPython,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiDocker,
  SiGit,
  SiGithub,
  SiFigma,
  SiWebflow,
  SiHtml5,
  SiCss,
} from "react-icons/si";
import { HiOutlineCloud } from "react-icons/hi2";
/* ---------- Count-up number that starts when it enters the viewport ---------- */
const CountUp = ({ end, duration = 1600, suffix = "" }) => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();

          const tick = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            // ease-out for a snappier finish
            const eased = 1 - Math.pow(1 - progress, 3);
            setValue(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(tick);
            else setValue(end);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span
      ref={ref}
      className="proj-font-display text-4xl md:text-5xl text-[#F576A9]"
    >
      {value}
      {suffix}
    </span>
  );
};

const stats = [
  { label: "Years of Experience", value: 2, suffix: "+" },
  { label: "Projects Built", value: projects.length, suffix: "+" },
  { label: "Technologies", value: 18, suffix: "+" },
  { label: "Production Websites", value: 20, suffix: "+" }, // عدلي الرقم حسب الواقع
];

const techStack = {
  Languages: [
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "C#", icon: SiCplusplus },
    { name: "Python", icon: SiPython },
    { name: "HTML5", icon: SiHtml5 },
    { name: "CSS3", icon: SiCss },
  ],

  Frontend: [
    { name: "React", icon: SiReact },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Astro", icon: SiAstro },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Bootstrap", icon: SiBootstrap },
    { name: "Vite", icon: SiVite },
  ],

  Backend: [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Express", icon: SiExpress },
    { name: "ASP.NET Core", icon: SiDotnet },
  ],

  Databases: [
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MySQL", icon: SiMysql },
    { name: "SQLite", icon: SiSqlite },
  ],

  Tools: [
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "Docker", icon: SiDocker },
    { name: "AWS", icon: HiOutlineCloud },
    { name: "Figma", icon: SiFigma },
    { name: "Webflow", icon: SiWebflow },
  ],
};
const About = () => {
  return (
    <section className="relative  overflow-hidden min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600&display=swap');
        .proj-font-display { font-family: 'Fraunces', serif; }
        .proj-font-body { font-family: 'Inter', sans-serif; }
      `}</style>

      <div className="relative max-w-5xl mx-auto px-6 md:px-10 pt-28 pb-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-14">
          <div className="flex-1 text-center md:text-left">
            <p className="proj-font-body text-xs tracking-[0.25em] uppercase text-[#F576A9] mb-2">
              Hi 👋
            </p>
            <h1 className="proj-font-display text-3xl md:text-5xl text-[#F5EFF7] mb-2">
              I'm Retaj Alharbi
            </h1>
            <h3 className="proj-font-body text-[#A895AE] text-base md:text-lg">
              Software Developer from Saudi Arabia 🇸🇦
            </h3>
          </div>
          <img
            alt="Coding"
            width="220"
            className="rounded-2xl border border-white/10 shrink-0"
            src="https://i.pinimg.com/originals/e1/85/18/e18518c6d24257c6fb02e3c95a862d85.gif"
          />
        </div>

        {/* Count-up stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((s, i) => (
            <div
              key={i}
              className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-6 text-center"
            >
              <CountUp end={s.value} suffix={s.suffix} />
              <p className="proj-font-body text-xs tracking-wide uppercase text-[#A895AE] mt-2">
                {s.label}
              </p>
            </div>
          ))}
        </div>

        {/* About me */}
        <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-7 md:p-8 mb-10">
          <p className="proj-font-body text-[11px] tracking-[0.2em] uppercase text-[#F576A9] mb-4 flex items-center gap-2">
            <HiOutlineSparkles /> About me
          </p>
          <ul className="proj-font-body text-[#F5EFF7] space-y-3 text-sm md:text-base">
            <li>
              💻 Software Developer specializing in modern web applications and
              digital experiences.
            </li>

            <li>
              🚀 Experienced with{" "}
              <span className="text-[#F576A9] font-medium">
                React, Astro, TypeScript, ASP.NET Core, Node.js, and REST APIs
              </span>
            </li>

            <li>
              ⚡ Passionate about building scalable, accessible, and
              high-performance web applications.
            </li>

            <li>
              🎨 Transforming Figma designs into responsive, pixel-perfect user
              interfaces.
            </li>

            <li className="flex items-center gap-2">
              <HiOutlineMail className="text-[#F576A9]" />
              retajfaisalalharbi@gmail.com
            </li>
          </ul>
        </div>

        {/* Tech stack */}
        <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-7 md:p-8 mb-10">
          <p className="proj-font-body text-[11px] tracking-[0.2em] uppercase text-[#A895AE] mb-5">
            Languages &amp; Tools
          </p>
          <div className="flex flex-wrap gap-4">
            {Object.entries(techStack).map(([category, items]) => (
              <div key={category} className="mb-8">
                <h3 className="proj-font-body text-[11px] tracking-[0.2em] uppercase text-[#A895AE] mb-5">
                  {category}
                </h3>

                <div className="flex flex-wrap gap-4">
                  {items.map(({ name, icon: Icon }) => (
                    <div
                      key={name}
                      title={name}
                      className="group flex flex-col items-center justify-center w-24 h-24 rounded-2xl
          bg-white/5 border border-white/10
          hover:border-[#F576A9]
          hover:bg-white/10
          transition-all duration-300"
                    >
                      <Icon className="text-4xl text-[#F5EFF7] group-hover:text-[#F576A9] transition-colors" />
                      <span className="mt-2 text-[11px] text-[#A895AE] text-center">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Connect */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://twitter.com/retj00"
            target="_blank"
            rel="noreferrer"
            className="proj-font-body flex items-center gap-2 text-sm font-medium text-[#F5EFF7] bg-white/5 border border-[#F576A9]/30 rounded-full px-4 py-2 hover:bg-[#F576A9] hover:text-white hover:border-[#F576A9] transition-colors duration-300"
          >
            <FaTwitter /> @retj00
          </a>
          <a
            href="https://linkedin.com/in/retaj-alharbi-907730234"
            target="_blank"
            rel="noreferrer"
            className="proj-font-body flex items-center gap-2 text-sm font-medium text-[#F5EFF7] bg-white/5 border border-[#F576A9]/30 rounded-full px-4 py-2 hover:bg-[#F576A9] hover:text-white hover:border-[#F576A9] transition-colors duration-300"
          >
            <FaLinkedin /> Retaj Alharbi
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
