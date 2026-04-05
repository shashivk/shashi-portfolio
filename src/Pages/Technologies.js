import React, { useEffect, useRef } from "react";
import { techStackDetails } from "../Details";

const TECH_LABELS = {
  java: "Java",
  springboot: "Spring Boot",
  js: "JavaScript",
  nodejs: "Node.js",
  express: "Express",
  postgre: "PostgreSQL",
  redis: "Redis",
  mysql: "MySQL",
  html: "HTML5",
  css: "CSS3",
  react: "React",
  bootstrap: "Bootstrap",
  tf: "TensorFlow",
  aws: "AWS",
  vscode: "VS Code",
  intellij: "IntelliJ",
  git: "Git",
  github: "GitHub",
  figma: "Figma",
  insomnia: "Insomnia",
  nginx: "Nginx",
  jenkins: "Jenkins",
  redux: "Redux",
  npm: "NPM",
  tailwind: "Tailwind",
};

function Technologies() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("revealed");
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const {
    tf, aws, java, springboot, express, jenkins, nginx,
    nodejs, redis, mysql, postgre, insomnia, html, css,
    js, react, bootstrap, vscode, git, github, figma, intellij,
  } = techStackDetails;

  const techStack = [
    { src: java, key: "java" },
    { src: springboot, key: "springboot" },
    { src: js, key: "js" },
    { src: nodejs, key: "nodejs" },
    { src: express, key: "express" },
    { src: postgre, key: "postgre" },
    { src: redis, key: "redis" },
    { src: mysql, key: "mysql" },
    { src: html, key: "html" },
    { src: css, key: "css" },
    { src: react, key: "react" },
    { src: bootstrap, key: "bootstrap" },
    { src: tf, key: "tf" },
  ];

  const tools = [
    { src: aws, key: "aws" },
    { src: vscode, key: "vscode" },
    { src: intellij, key: "intellij" },
    { src: git, key: "git" },
    { src: github, key: "github" },
    { src: figma, key: "figma" },
    { src: insomnia, key: "insomnia" },
    { src: nginx, key: "nginx" },
    { src: jenkins, key: "jenkins" },
  ];

  const TechGrid = ({ items }) => (
    <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-7 gap-4 pt-4">
      {items.map(({ src, key }, i) => (
        <div
          key={key}
          className="tooltip tech-icon-wrapper flex flex-col items-center gap-2 glass-card rounded-2xl p-4 cursor-default"
          style={{ animationDelay: `${i * 60}ms` }}
        >
          <img src={src} alt={TECH_LABELS[key] || key} className="w-10 h-10 object-contain" />
          <span className="text-slate-500 text-[10px] font-medium text-center leading-tight">
            {TECH_LABELS[key] || key}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-blue w-72 h-72 top-20 -right-20 opacity-20" />
        <div className="orb orb-purple w-64 h-64 bottom-20 -left-20 opacity-20" />
      </div>

      <div className="max-width section py-20 relative z-10">
        {/* Header */}
        <div ref={sectionRef} className="reveal-card mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-indigo-500/30" />
            <span className="text-indigo-400 text-sm font-medium uppercase tracking-widest">Skills</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-indigo-500/30" />
          </div>
          <h1 className="section-heading text-white mb-4">
            Tech <span className="text-gradient">Stack</span>
          </h1>
          <p className="text-slate-400 max-w-xl">
            Technologies and tools I work with daily to build robust, scalable applications.
          </p>
        </div>

        {/* Tech Stack Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-white font-semibold text-lg">Languages & Frameworks</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-indigo-500/30 to-transparent" />
          </div>
          <TechGrid items={techStack} />
        </div>

        {/* Tools Section */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-white font-semibold text-lg">Tools & Platforms</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-violet-500/30 to-transparent" />
          </div>
          <TechGrid items={tools} />
        </div>
      </div>
    </main>
  );
}

export default Technologies;
