import { STATUS_META } from "../../data/projects";

export default function StatusBadge({ status }) {
  const meta = STATUS_META[status] ?? STATUS_META.Live;

  return (
    <span
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-mono font-medium tracking-widest uppercase"
      style={{
        color: meta.color,
        borderColor: meta.color + "55",
        backgroundColor: meta.color + "18",
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full"
        style={{ backgroundColor: meta.color }}
      />
      {meta.label}
    </span>
  );
}
