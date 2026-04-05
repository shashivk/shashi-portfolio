import React, { useEffect, useRef } from "react";

function Project({ title, image, description, techstack, previewLink, githubLink }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("revealed");
      },
      { threshold: 0.1 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const techList = techstack ? techstack.split(",").map((t) => t.trim()) : [];

  return (
    <article ref={cardRef} className="reveal-card glass-card rounded-2xl overflow-hidden group">
      {/* Image with overlay */}
      <div className="relative overflow-hidden aspect-video">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/90 via-dark-bg/20 to-transparent" />
        {/* Hover overlay with links */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/40 backdrop-blur-sm">
          {previewLink && (
            <a
              href={previewLink}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-outline text-sm py-2"
              onClick={(e) => e.stopPropagation()}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
              </svg>
              Live Demo
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-outline text-sm py-2"
              onClick={(e) => e.stopPropagation()}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Code
            </a>
          )}
        </div>
      </div>

      {/* Card body */}
      <div className="p-5">
        <h3
          className="text-white font-bold text-base mb-3 leading-snug group-hover:text-gradient transition-all duration-300"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Tech badges */}
        {techList.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {techList.slice(0, 5).map((tech) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
            {techList.length > 5 && (
              <span className="tech-badge">+{techList.length - 5}</span>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default Project;
