import React, { useEffect, useRef } from "react";
import Project from "../Components/Project";
import { projectDetails } from "../Details";

function Projects() {
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("revealed");
      },
      { threshold: 0.1 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-pink w-72 h-72 top-10 -right-10 opacity-15" />
        <div className="orb orb-purple w-64 h-64 bottom-10 -left-20 opacity-15" />
      </div>

      <div className="max-width section py-20 relative z-10">
        {/* Header */}
        <div ref={headerRef} className="reveal-card mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-pink-500/30" />
            <span className="text-pink-400 text-sm font-medium uppercase tracking-widest">Portfolio</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-pink-500/30" />
          </div>
          <h1 className="section-heading text-white mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-slate-400 max-w-xl">
            A selection of projects that showcase my skills across full-stack development, system design, and cloud deployment.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {React.Children.toArray(
            projectDetails.map(({ title, image, description, techstack, previewLink, githubLink }) => (
              <Project
                title={title}
                image={image}
                description={description}
                techstack={techstack}
                previewLink={previewLink}
                githubLink={githubLink}
              />
            ))
          )}
        </div>
      </div>
    </main>
  );
}

export default Projects;
