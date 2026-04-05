import React, { useEffect, useRef } from "react";
import { contactDetails, socialMediaUrl } from "../Details";

function Contact() {
  const { email, phone } = contactDetails;
  const { linkedin, github, twitter } = socialMediaUrl;
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

  const contactItems = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      value: email,
      href: `mailto:${email}`,
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: "Phone",
      value: phone,
      href: `tel:${phone}`,
      color: "from-violet-500 to-purple-600",
    },
  ];

  const socialItems = [
    {
      href: linkedin,
      label: "LinkedIn",
      color: "hover:border-blue-500/50 hover:bg-blue-500/10",
      icon: (
        <svg width="20" height="20" viewBox="0 0 30 30" fill="currentColor">
          <path d="M15 0.599976C7.04701 0.599976 0.600006 7.04698 0.600006 15C0.600006 22.953 7.04701 29.4 15 29.4C22.953 29.4 29.4 22.953 29.4 15C29.4 7.04698 22.953 0.599976 15 0.599976ZM11.475 20.9685H8.55901V11.5845H11.475V20.9685ZM9.99901 10.4325C9.07801 10.4325 8.48251 9.77997 8.48251 8.97297C8.48251 8.14948 9.09601 7.51648 10.0365 7.51648C10.977 7.51648 11.553 8.14948 11.571 8.97297C11.571 9.77997 10.977 10.4325 9.99901 10.4325ZM22.125 20.9685H19.209V15.768C19.209 14.5575 18.786 13.7355 17.7315 13.7355C16.926 13.7355 16.4475 14.292 16.236 14.8275C16.158 15.018 16.1385 15.288 16.1385 15.5565V20.967H13.221V14.577C13.221 13.4055 13.1835 12.426 13.1445 11.583H15.678L15.8115 12.8865H15.87C16.254 12.2745 17.1945 11.3715 18.768 11.3715C20.6865 11.3715 22.125 12.657 22.125 15.42V20.9685Z" />
        </svg>
      ),
    },
    {
      href: github,
      label: "GitHub",
      color: "hover:border-slate-500/50 hover:bg-slate-500/10",
      icon: (
        <svg width="20" height="20" viewBox="0 0 30 30" fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M15 0C6.7125 0 0 6.7125 0 15C0 21.6375 4.29375 27.2437 10.2563 29.2313C11.0063 29.3625 11.2875 28.9125 11.2875 28.5188C11.2875 28.1625 11.2688 26.9813 11.2688 25.725C7.5 26.4188 6.525 24.8062 6.225 23.9625C6.05625 23.5312 5.325 22.2 4.6875 21.8438C4.1625 21.5625 3.4125 20.8687 4.66875 20.85C5.85 20.8313 6.69375 21.9375 6.975 22.3875C8.325 24.6562 10.4812 24.0187 11.3438 23.625C11.475 22.65 11.8688 21.9937 12.3 21.6187C8.9625 21.2437 5.475 19.95 5.475 14.2125C5.475 12.5813 6.05625 11.2313 7.0125 10.1813C6.8625 9.80625 6.3375 8.26875 7.1625 6.20625C7.1625 6.20625 8.41875 5.8125 11.2875 7.74375C12.4875 7.40625 13.7625 7.2375 15.0375 7.2375C16.3125 7.2375 17.5875 7.40625 18.7875 7.74375C21.6562 5.79375 22.9125 6.20625 22.9125 6.20625C23.7375 8.26875 23.2125 9.80625 23.0625 10.1813C24.0188 11.2313 24.6 12.5625 24.6 14.2125C24.6 19.9688 21.0938 21.2437 17.7563 21.6187C18.3 22.0875 18.7688 22.9875 18.7688 24.3937C18.7688 26.4 18.75 28.0125 18.75 28.5188C18.75 28.9125 19.0312 29.3813 19.7812 29.2313C25.7437 27.2437 30 21.625 30 15C30 6.7125 23.2875 0 15 0Z" />
        </svg>
      ),
    },
    {
      href: twitter,
      label: "Twitter",
      color: "hover:border-sky-500/50 hover:bg-sky-500/10",
      icon: (
        <svg width="20" height="20" viewBox="0 0 32 32" fill="currentColor">
          <path d="M16.875 1.875C8.59152 1.875 1.875 8.59152 1.875 16.875C1.875 25.1585 8.59152 31.875 16.875 31.875C25.1585 31.875 31.875 25.1585 31.875 16.875C31.875 8.59152 25.1585 1.875 16.875 1.875ZM24.0837 13.1819C24.0937 13.3393 24.0937 13.5033 24.0937 13.6641C24.0937 18.5792 20.3504 24.2411 13.51 24.2411C11.4007 24.2411 9.44531 23.6283 7.79799 22.5737C8.09933 22.6071 8.38728 22.6205 8.69531 22.6205C10.4364 22.6205 12.0368 22.0312 13.3125 21.0335C11.6786 21 10.3058 19.9286 9.83705 18.4554C10.4096 18.5391 10.9252 18.5391 11.5145 18.3884C9.81921 18.0446 8.55804 16.5547 8.55804 14.7388V14.692C9.03013 14.9699 9.60938 15.1406 10.2154 15.1641C9.07801 14.3606 8.55804 12.8974 8.55804 11.5547C8.55804 11.3772 8.73884 10.7444 9.06362 10.1953C10.9987 12.5334 13.8444 14.0547 17.0225 14.2188C16.9792 13.9576 16.9558 13.6896 16.9558 13.4149C16.9558 11.3437 18.634 9.50893 20.3638 9.50893C21.4353 9.50893 22.3996 9.95759 23.0792 10.6808C23.9196 10.5234 24.7232 10.2087 25.4397 9.78683C25.1618 10.6473 24.5792 11.3739 23.8058 11.8326C24.5558 11.7522 25.279 11.5446 25.9487 11.2533C25.4431 11.9967 24.8103 12.6562 24.0837 13.1819Z" />
        </svg>
      ),
    },
  ];

  return (
    <main className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="orb orb-blue w-96 h-96 -top-20 -left-20 opacity-20" />
        <div className="orb orb-pink w-72 h-72 bottom-10 right-10 opacity-20" />
      </div>

      <div className="max-width w-full section py-20 relative z-10">
        <div ref={sectionRef} className="reveal-card">
          {/* Section label */}
          <div className="flex items-center gap-3 mb-4 justify-center">
            <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent to-indigo-500/30" />
            <span className="text-indigo-400 text-sm font-medium uppercase tracking-widest">Get In Touch</span>
            <div className="h-px flex-1 max-w-xs bg-gradient-to-l from-transparent to-indigo-500/30" />
          </div>

          <h1 className="section-heading text-white text-center mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h1>
          <p className="text-slate-400 text-center max-w-lg mx-auto mb-12">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about tech.
          </p>

          {/* Contact cards */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-10">
            {contactItems.map(({ icon, label, value, href, color }) => (
              <a
                key={label}
                href={href}
                className="glass-card rounded-2xl p-6 flex items-center gap-5 group"
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                >
                  {icon}
                </div>
                <div>
                  <div className="text-slate-500 text-xs uppercase tracking-widest mb-1">{label}</div>
                  <div className="text-white font-semibold text-sm break-all">{value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 max-w-2xl mx-auto mb-8">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-slate-500 text-sm">or find me on</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* Social links */}
          <div className="flex justify-center gap-4">
            {socialItems.map(({ href, label, icon, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer noopener"
                title={label}
                className={`w-14 h-14 rounded-2xl glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 ${color}`}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
