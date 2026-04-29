import { SOCIAL_LINKS } from "../../data/projects";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-slate-900 px-4 sm:px-8 lg:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
      style={{
        padding:"10px"
      }}
    >
      <span className="text-[11px] font-mono text-slate-700 order-2 sm:order-1">
        © {new Date().getFullYear()} AI.Works — All rights reserved
      </span>

      <div className="flex items-center gap-5 order-1 sm:order-2">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-xs text-slate-600 hover:text-slate-300 transition-colors font-medium"
            style={{
              padding:"10px",
              margin:"10px"
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
