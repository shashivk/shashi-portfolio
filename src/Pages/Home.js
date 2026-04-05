import React, { useEffect, useState } from "react";
import { personalDetails } from "../Details";

const ROLES = [
  "Full Stack Java Developer",
  "Backend Developer",
  "Senior Software Engineer",
];

function Home() {
  const { name, img } = personalDetails;
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Typing animation
  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;
    if (!isDeleting) {
      if (displayedRole.length < current.length) {
        timeout = setTimeout(() => setDisplayedRole(current.slice(0, displayedRole.length + 1)), 70);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayedRole.length > 0) {
        timeout = setTimeout(() => setDisplayedRole(displayedRole.slice(0, -1)), 40);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayedRole, isDeleting, roleIndex]);

  return (
    <main className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="orb orb-blue w-96 h-96 -top-24 -left-24" />
        <div className="orb orb-purple w-80 h-80 top-1/3 right-0 translate-x-1/2" />
        <div className="orb orb-pink w-64 h-64 bottom-20 left-1/4" />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-width w-full py-32 md:py-0 z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Text content */}
          <div
            className={`flex-1 transition-all duration-1000 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
          >
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-green-500/20 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
              </span>
              <span className="text-green-400 text-xs font-medium">Available for opportunities</span>
            </div>

            {/* Greeting */}
            <p className="text-slate-400 text-lg mb-2 font-medium tracking-wide">
              Hello, I'm
            </p>

            {/* Name */}
            <h1
              className="text-4xl md:text-5xl xl:text-6xl font-bold mb-4 leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="text-white">{name.split(" ")[0]} </span>
              <span className="text-gradient">{name.split(" ")[1]}</span>
            </h1>

            {/* Typewriter Role */}
            <h2 className="text-xl md:text-2xl text-slate-300 font-semibold mb-6 min-h-[2rem]">
              <span>{displayedRole}</span>
              <span className="inline-block w-0.5 h-6 bg-indigo-400 ml-1 animate-[blink_1s_step-end_infinite]" />
            </h2>

            {/* About blurb */}
            <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-lg">
              Senior Software Engineer with <span className="text-white font-semibold">5+ years</span> of experience building
              high-performance web applications with Java, Spring Boot, React, and Cloud platforms.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "/contact";
                }}
                className="btn-primary"
              >
                Get In Touch
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="/projects"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "/projects";
                }}
                className="btn-outline"
              >
                View Projects
              </a>
            </div>

            {/* Stats row */}
            <div className="flex gap-8">
              {[
                { value: "5+", label: "Years Experience" },
                { value: "10+", label: "Projects Built" },
                { value: "3", label: "Cloud Platforms" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="text-2xl font-bold text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    {value}
                  </div>
                  <div className="text-xs text-slate-500 mt-0.5">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div
            className={`flex-shrink-0 transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 rounded-full opacity-20 blur-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse" />
              {/* Spinning dashed ring */}
              <div
                className="absolute -inset-3 rounded-full border border-dashed border-indigo-500/40 animate-[spin_12s_linear_infinite]"
              />
              {/* Image */}
              <div className="relative profile-ring w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden">
                <img
                  src={img}
                  alt={name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Floating badges */}
              <div className="absolute -bottom-4 -left-8 glass-card rounded-2xl px-4 py-3 animate-[float_5s_ease-in-out_infinite]">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">☕</span>
                  <div>
                    <div className="text-white text-xs font-semibold">Java Expert</div>
                    <div className="text-slate-400 text-[10px]">Spring Boot</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-8 glass-card rounded-2xl px-4 py-3 animate-[float_5s_ease-in-out_infinite_2s]">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⚛️</span>
                  <div>
                    <div className="text-white text-xs font-semibold">React Dev</div>
                    <div className="text-slate-400 text-[10px]">Full Stack</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-indicator opacity-60">
          <span className="text-slate-500 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-indigo-500/60 to-transparent" />
        </div>
      </div>
    </main>
  );
}

export default Home;
