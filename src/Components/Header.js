import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { logos, socialMediaUrl } from "../Details";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { linkedin, github, twitter, leetcode } = socialMediaUrl;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/technologies", label: "Skills" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      href: twitter,
      label: "Twitter",
      icon: (
        <svg width="18" height="18" viewBox="0 0 32 32" fill="currentColor">
          <path d="M16.875 1.875C8.59152 1.875 1.875 8.59152 1.875 16.875C1.875 25.1585 8.59152 31.875 16.875 31.875C25.1585 31.875 31.875 25.1585 31.875 16.875C31.875 8.59152 25.1585 1.875 16.875 1.875ZM24.0837 13.1819C24.0937 13.3393 24.0937 13.5033 24.0937 13.6641C24.0937 18.5792 20.3504 24.2411 13.51 24.2411C11.4007 24.2411 9.44531 23.6283 7.79799 22.5737C8.09933 22.6071 8.38728 22.6205 8.69531 22.6205C10.4364 22.6205 12.0368 22.0312 13.3125 21.0335C11.6786 21 10.3058 19.9286 9.83705 18.4554C10.4096 18.5391 10.9252 18.5391 11.5145 18.3884C9.81921 18.0446 8.55804 16.5547 8.55804 14.7388V14.692C9.03013 14.9699 9.60938 15.1406 10.2154 15.1641C9.07801 14.3606 8.55804 12.8974 8.55804 11.5547C8.55804 11.3772 8.73884 10.7444 9.06362 10.1953C10.9987 12.5334 13.8444 14.0547 17.0225 14.2188C16.9792 13.9576 16.9558 13.6896 16.9558 13.4149C16.9558 11.3437 18.634 9.50893 20.3638 9.50893C21.4353 9.50893 22.3996 9.95759 23.0792 10.6808C23.9196 10.5234 24.7232 10.2087 25.4397 9.78683C25.1618 10.6473 24.5792 11.3739 23.8058 11.8326C24.5558 11.7522 25.279 11.5446 25.9487 11.2533C25.4431 11.9967 24.8103 12.6562 24.0837 13.1819Z" />
        </svg>
      ),
    },
    {
      href: linkedin,
      label: "LinkedIn",
      icon: (
        <svg width="18" height="18" viewBox="0 0 30 30" fill="currentColor">
          <path d="M15 0.599976C7.04701 0.599976 0.600006 7.04698 0.600006 15C0.600006 22.953 7.04701 29.4 15 29.4C22.953 29.4 29.4 22.953 29.4 15C29.4 7.04698 22.953 0.599976 15 0.599976ZM11.475 20.9685H8.55901V11.5845H11.475V20.9685ZM9.99901 10.4325C9.07801 10.4325 8.48251 9.77997 8.48251 8.97297C8.48251 8.14948 9.09601 7.51648 10.0365 7.51648C10.977 7.51648 11.553 8.14948 11.571 8.97297C11.571 9.77997 10.977 10.4325 9.99901 10.4325ZM22.125 20.9685H19.209V15.768C19.209 14.5575 18.786 13.7355 17.7315 13.7355C16.926 13.7355 16.4475 14.292 16.236 14.8275C16.158 15.018 16.1385 15.288 16.1385 15.5565V20.967H13.221V14.577C13.221 13.4055 13.1835 12.426 13.1445 11.583H15.678L15.8115 12.8865H15.87C16.254 12.2745 17.1945 11.3715 18.768 11.3715C20.6865 11.3715 22.125 12.657 22.125 15.42V20.9685Z" />
        </svg>
      ),
    },
    {
      href: github,
      label: "GitHub",
      icon: (
        <svg width="18" height="18" viewBox="0 0 30 30" fill="currentColor">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 0C6.7125 0 0 6.7125 0 15C0 21.6375 4.29375 27.2437 10.2563 29.2313C11.0063 29.3625 11.2875 28.9125 11.2875 28.5188C11.2875 28.1625 11.2688 26.9813 11.2688 25.725C7.5 26.4188 6.525 24.8062 6.225 23.9625C6.05625 23.5312 5.325 22.2 4.6875 21.8438C4.1625 21.5625 3.4125 20.8687 4.66875 20.85C5.85 20.8313 6.69375 21.9375 6.975 22.3875C8.325 24.6562 10.4812 24.0187 11.3438 23.625C11.475 22.65 11.8688 21.9937 12.3 21.6187C8.9625 21.2437 5.475 19.95 5.475 14.2125C5.475 12.5813 6.05625 11.2313 7.0125 10.1813C6.8625 9.80625 6.3375 8.26875 7.1625 6.20625C7.1625 6.20625 8.41875 5.8125 11.2875 7.74375C12.4875 7.40625 13.7625 7.2375 15.0375 7.2375C16.3125 7.2375 17.5875 7.40625 18.7875 7.74375C21.6562 5.79375 22.9125 6.20625 22.9125 6.20625C23.7375 8.26875 23.2125 9.80625 23.0625 10.1813C24.0188 11.2313 24.6 12.5625 24.6 14.2125C24.6 19.9688 21.0938 21.2437 17.7563 21.6187C18.3 22.0875 18.7688 22.9875 18.7688 24.3937C18.7688 26.4 18.75 28.0125 18.75 28.5188C18.75 28.9125 19.0312 29.3813 19.7812 29.2313C25.7437 27.2437 30 21.625 30 15C30 6.7125 23.2875 0 15 0Z"
          />
        </svg>
      ),
    },
    {
      href: leetcode,
      label: "LeetCode",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22,14.355c0-0.742-0.564-1.346-1.26-1.346H10.676c-0.696,0-1.26,0.604-1.26,1.346s0.563,1.346,1.26,1.346H20.74C21.436,15.702,22,15.098,22,14.355z"
          />
          <path d="M3.482,18.187l4.313,4.361C8.768,23.527,10.113,24,11.598,24c1.485,0,2.83-0.512,3.805-1.494l2.588-2.637c0.51-0.514,0.492-1.365-0.039-1.9c-0.531-0.535-1.375-0.553-1.884-0.039l-2.676,2.607c-0.462,0.467-1.102,0.662-1.809,0.662s-1.346-0.195-1.81-0.662l-4.298-4.363c-0.463-0.467-0.696-1.15-0.696-1.863c0-0.713,0.233-1.357,0.696-1.824l4.285-4.38c0.463-0.467,1.116-0.645,1.822-0.645s1.346,0.195,1.809,0.662l2.676,2.606c0.51,0.515,1.354,0.497,1.885-0.038c0.531-0.536,0.549-1.387,0.039-1.901l-2.588-2.636c-0.649-0.646-1.471-1.116-2.392-1.33l-0.034-0.007l2.447-2.503c0.512-0.514,0.494-1.366-0.037-1.901c-0.531-0.535-1.376-0.552-1.887-0.038L3.482,10.476C2.509,11.458,2,12.813,2,14.311C2,15.809,2.509,17.207,3.482,18.187z" />
        </svg>
      ),
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "glass-dark shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
        }`}
    >
      <div className="max-width py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink
          to="/"
          className="relative z-10 flex items-center gap-2 group"
          onClick={() => setIsOpen(false)}
        >
          <div className="w-10 h-10 rounded-xl overflow-hidden ring-2 ring-indigo-500/30 group-hover:ring-indigo-500/60 transition-all duration-300 group-hover:scale-105">
            <img src={logos.logogradient} alt="SV" className="w-full h-full object-cover" />
          </div>
          <span className="text-white font-bold text-lg hidden sm:block tracking-tight">
            Shashi<span className="text-gradient">VK</span>
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active text-white" : ""}`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3 pl-4 border-l border-white/10">
            {socialLinks.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                title={label}
                className="text-slate-400 hover:text-white transition-colors duration-200 hover:scale-110 transform"
              >
                {icon}
              </a>
            ))}
          </div>
          <a
            href="https://drive.google.com/file/d/1-Gnf-xbZuu0aq0syuLXJ8Ii97w48Wtqp/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="btn-primary text-sm"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
            </svg>
            Resume
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-10 flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/5 transition-colors"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-slate-300 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""
              }`}
          />
          <span
            className={`block w-6 h-0.5 bg-slate-300 transition-all duration-300 ${isOpen ? "opacity-0" : ""
              }`}
          />
          <span
            className={`block w-6 h-0.5 bg-slate-300 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="glass-dark border-t border-white/5 px-6 py-6">
          <ul className="space-y-4 mb-6">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block py-2 text-lg font-medium transition-colors ${isActive ? "text-white text-gradient" : "text-slate-400 hover:text-white"
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 pt-4 border-t border-white/10">
            {socialLinks.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                className="text-slate-400 hover:text-white transition-colors"
              >
                {icon}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/1-Gnf-xbZuu0aq0syuLXJ8Ii97w48Wtqp/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="btn-primary ml-auto text-xs"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
