import { TECH_STACK } from "../../data/projects";

export default function StackSection() {
  return (
    <section
      id="stack"
      className="border-t border-slate-900 py-16 sm:py-20 px-4 sm:px-6 text-center"
      style={{
        padding:"10px"
      }}
    >
      <p className="text-[10px] font-mono text-slate-600 uppercase tracking-[0.2em] mb-6">
        Tech Stack
      </p>
      <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
        {TECH_STACK.map((tech) => (
          <span
            key={tech}
            className="text-xs font-mono text-slate-500 bg-[#0c1520] border border-slate-800 px-4 py-1.5 rounded-full hover:text-slate-300 hover:border-slate-600 transition-colors cursor-default"
            style={{
              padding:"5px",
              margin:"10px"
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}
