// components/Project/index.jsx  (ProjectList.jsx)
import React from "react";
import {
  HiOutlineCodeBracket,
  HiOutlineGlobeAlt,
  HiOutlinePlayCircle,
  HiOutlineArrowUpRight,
} from "react-icons/hi2";

const linkIcon = (label) => {
  if (label.toLowerCase().includes("code")) return HiOutlineCodeBracket;
  if (label.toLowerCase().includes("website")) return HiOutlineGlobeAlt;
  if (
    label.toLowerCase().includes("demo") ||
    label.toLowerCase().includes("video")
  )
    return HiOutlinePlayCircle;
  return HiOutlineArrowUpRight;
};

const ProjectList = ({ project }) => {
  const sources = [];

  if (project.frontend)
    sources.push({ label: "Frontend", url: project.frontend });
  if (project.backend) sources.push({ label: "Backend", url: project.backend });
  if (project.website) sources.push({ label: "Website", url: project.website });
  if (project.demo) sources.push({ label: "Demo", url: project.demo });

  const techChips = project.desc.split(",").map((t) => t.trim());

  return (
    <section className="relative  overflow-hidden min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600&display=swap');
        .proj-font-display { font-family: 'Fraunces', serif; }
        .proj-font-body { font-family: 'Inter', sans-serif; }
        @keyframes proj-pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.08); opacity: 0.85; }
        }
        .proj-play-pulse { animation: proj-pulse 2.2s ease-in-out infinite; }
      `}</style>

      <div className="relative max-w-5xl mx-auto px-6 md:px-10 pt-28 pb-56 md:pb-48">
        <p className="proj-font-body text-xs tracking-[0.25em] uppercase text-[#F576A9] mb-2">
          Project
        </p>
        <h2 className="proj-font-display text-3xl md:text-4xl text-[#F5EFF7] mb-8">
          {project.title}
        </h2>

        {/* Bento gallery */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 auto-rows-[130px] sm:auto-rows-[150px]">
          {project.mediaList.map((item, i) => (
            <div
              key={i}
              className={`relative rounded-2xl overflow-hidden group border border-white/10 ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <>
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <video
                    src={item.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </>
            </div>
          ))}

          {project.video && (
            <a
              href={project.video}
              target="_blank"
              rel="noreferrer"
              className="relative rounded-2xl overflow-hidden group border border-white/10 flex flex-col items-center justify-center gap-2 text-white bg-gradient-to-br from-[#F576A9] to-[#FFC15E]"
            >
              <HiOutlinePlayCircle className="text-4xl proj-play-pulse" />
              <span className="proj-font-body text-xs font-medium tracking-wide">
                Watch Demo
              </span>
            </a>
          )}
        </div>

        {/* Glass info card */}
        <div className="mt-8 md:mt-10 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg p-6 md:p-7">
          <p className="proj-font-body text-[11px] tracking-[0.2em] uppercase text-[#A895AE] mb-2">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {techChips.map((tech, i) => (
              <span
                key={i}
                className="proj-font-body text-xs px-3 py-1 rounded-full bg-white/5 border border-[#F576A9]/20 text-[#F5EFF7]"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {sources.map(({ label, url }, i) => {
              const Icon = linkIcon(label);
              return (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="proj-font-body flex items-center gap-2 text-sm font-medium text-[#F5EFF7] bg-white/5 border border-[#F576A9]/30 rounded-full px-4 py-2 hover:bg-[#F576A9] hover:text-white hover:border-[#F576A9] transition-colors duration-300"
                >
                  <Icon className="text-base" />
                  {label}
                </a>
              );
            })}
          </div>

          <p className="proj-font-body text-[11px] text-[#A895AE] mt-5">
            by{" "}
            <span className="text-[#F576A9] font-medium">© Retaj Alharbi</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectList;
