import React from "react";

function Work({ position, company, location, type, duration }) {
  const isFullTime = type === "Full-time";

  return (
    <article className="glass-card rounded-2xl p-6 relative overflow-hidden group">
      {/* Left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-gradient-to-b from-blue-500 via-violet-500 to-transparent" />

      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
        <div className="flex-1">
          {/* Position */}
          <h3 className="text-white font-bold text-lg mb-1 group-hover:text-gradient transition-all duration-300">
            {position}
          </h3>

          {/* Company & Location row */}
          <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2">
            <div className="flex items-center gap-1.5 text-slate-400 text-sm">
              <svg width="14" height="14" viewBox="0 0 16 12" fill="currentColor" className="text-indigo-400 flex-shrink-0">
                <path d="M3.33331 1.5V10.5H7.33331V8.75H8.66665V10.5H12.6666V1.5H3.33331ZM4.66665 2.5H5.99998V3.5H4.66665V2.5ZM7.33331 2.5H8.66665V3.5H7.33331V2.5ZM9.99998 2.5H11.3333V3.5H9.99998V2.5ZM4.66665 4.5H5.99998V5.5H4.66665V4.5ZM7.33331 4.5H8.66665V5.5H7.33331V4.5ZM9.99998 4.5H11.3333V5.5H9.99998V4.5ZM4.66665 6.5H5.99998V7.5H4.66665V6.5ZM7.33331 6.5H8.66665V7.5H7.33331V6.5ZM9.99998 6.5H11.3333V7.5H9.99998V6.5ZM4.66665 8.5H5.99998V9.5H4.66665V8.5ZM9.99998 8.5H11.3333V9.5H9.99998V8.5Z" />
              </svg>
              <span className="font-medium text-slate-300">{company}</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-400 text-sm">
              <svg width="14" height="14" viewBox="0 0 16 14" fill="currentColor" className="text-indigo-400 flex-shrink-0">
                <path d="M8 6.75C7.50555 6.75 7.0222 6.64003 6.61108 6.43401C6.19995 6.22798 5.87952 5.93514 5.6903 5.59253C5.50108 5.24992 5.45157 4.87292 5.54804 4.50921C5.6445 4.14549 5.8826 3.8114 6.23223 3.54918C6.58187 3.28695 7.02732 3.10838 7.51228 3.03603C7.99723 2.96368 8.4999 3.00081 8.95671 3.14273C9.41353 3.28464 9.80397 3.52496 10.0787 3.83331C10.3534 4.14165 10.5 4.50416 10.5 4.875C10.4992 5.3721 10.2356 5.84867 9.76689 6.20017C9.29822 6.55167 8.6628 6.74941 8 6.75ZM8.00001 11.25L3.78201 7.51912C2.8875 6.63817 2.49826 5.76871 2.50001 4.875C2.50001 3.78098 3.07947 2.73177 4.11092 1.95818C5.14237 1.1846 6.54132 0.75 8.00001 0.75C9.4587 0.75 10.8576 1.1846 11.8891 1.95818C12.9205 2.73177 13.5 3.78098 13.5 4.875C13.5018 5.7683 13.1127 6.63737 12.3925 7.34888L8.00001 11.25Z" />
              </svg>
              <span>{location}</span>
            </div>
          </div>
        </div>

        {/* Right side: type badge + duration */}
        <div className="flex flex-col items-end gap-2">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${isFullTime
                ? "bg-blue-500/15 text-blue-300 border border-blue-500/25"
                : "bg-emerald-500/15 text-emerald-300 border border-emerald-500/25"
              }`}
          >
            {type}
          </span>
          <div className="flex items-center gap-1.5 text-slate-500 text-xs">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            {duration}
          </div>
        </div>
      </div>
    </article>
  );
}

export default Work;
