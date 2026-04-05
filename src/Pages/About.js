import React, { useEffect, useRef } from "react";
import Work from "../Components/Work";
import Education from "../Components/Education";
import { personalDetails, workDetails, eduDetails } from "../Details";

function About() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1 }
    );
    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addRef = (el) => {
    if (el && !sectionRefs.current.includes(el)) sectionRefs.current.push(el);
  };

  const highlights = [
    { icon: "☕", label: "Java & Spring", sub: "Core Stack" },
    { icon: "📨", label: "IBM MQ & Kafka", sub: "Messaging & Streaming" },
    { icon: "☁️", label: "AWS & Azure", sub: "Cloud Platforms" },
    { icon: "⚛️", label: "React / Angular", sub: "Frontend" }
  ];

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-purple w-72 h-72 top-0 right-0 translate-x-1/3 opacity-20" />
        <div className="orb orb-blue w-64 h-64 bottom-1/3 -left-20 opacity-15" />
      </div>

      <div className="max-width section py-20 relative z-10">
        {/* About Me */}
        <div ref={addRef} className="reveal-card mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-indigo-500/30" />
            <span className="text-indigo-400 text-sm font-medium uppercase tracking-widest">About</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-indigo-500/30" />
          </div>
          <h1 className="section-heading text-white mb-8">
            About <span className="text-gradient">Me</span>
          </h1>

          <div className="grid lg:grid-cols-5 gap-10 items-start">
            <div className="lg:col-span-3">
              <p className="text-slate-400 text-base leading-relaxed mb-6">
                {personalDetails.about}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {highlights.map(({ icon, label, sub }) => (
                  <div key={label} className="glass-card rounded-xl p-4 flex items-center gap-3">
                    <span className="text-2xl">{icon}</span>
                    <div>
                      <div className="text-white font-semibold text-sm">{label}</div>
                      <div className="text-slate-500 text-xs">{sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="glass-card rounded-2xl p-6 space-y-4">
                <h3 className="text-white font-semibold mb-4">Quick Info</h3>
                {[
                  { label: "📍 Location", value: "Tampa, FL" },
                  { label: "🎓 Degree", value: "MS, Computer Science" },
                  { label: "🏛️ University", value: "UMKC" },
                  { label: "💼 Experience", value: "5+ Years" },
                  { label: "📧 Email", value: "shashi.vanga183@gmail.com" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-center py-1 border-b border-white/5 last:border-0">
                    <span className="text-slate-500 text-sm">{label}</span>
                    <span className="text-slate-300 text-sm font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div ref={addRef} className="reveal-card mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-indigo-500/30" />
            <span className="text-indigo-400 text-sm font-medium uppercase tracking-widest">Experience</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-indigo-500/30" />
          </div>
          <h2 className="section-heading text-white mb-8">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="space-y-4">
            {React.Children.toArray(
              workDetails.map(({ Position, Company, Location, Type, Duration, Description }) => (
                <Work
                  position={Position}
                  company={Company}
                  location={Location}
                  type={Type}
                  duration={Duration}
                  description={Description}
                />
              ))
            )}
          </div>
        </div>

        {/* Education */}
        <div ref={addRef} className="reveal-card">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-indigo-500/30" />
            <span className="text-indigo-400 text-sm font-medium uppercase tracking-widest">Education</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-indigo-500/30" />
          </div>
          <h2 className="section-heading text-white mb-8">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="space-y-4">
            {React.Children.toArray(
              eduDetails.map(({ Position, Company, Location, Duration, Description }) => (
                <Education
                  position={Position}
                  company={Company}
                  location={Location}
                  duration={Duration}
                  description={Description}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
