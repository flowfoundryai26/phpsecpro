/**
 * Organic, slowly-drifting gradient blobs. Pure CSS animation (no JS scroll
 * listeners), fixed to transform/opacity so it stays off the main thread.
 */
export function MeshGradient({ variant = "dark" }: { variant?: "dark" | "danger" }) {
  const blobs =
    variant === "dark"
      ? [
          { color: "rgba(47,111,237,0.35)", top: "10%", left: "8%", size: "42vw", delay: "0s" },
          { color: "rgba(91,147,255,0.22)", top: "55%", left: "70%", size: "36vw", delay: "-6s" },
          { color: "rgba(47,111,237,0.18)", top: "75%", left: "15%", size: "30vw", delay: "-12s" },
        ]
      : [
          { color: "rgba(210,59,59,0.14)", top: "15%", left: "75%", size: "34vw", delay: "0s" },
          { color: "rgba(210,59,59,0.08)", top: "70%", left: "10%", size: "28vw", delay: "-8s" },
        ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {blobs.map((blob, index) => (
        <div
          key={index}
          className="absolute animate-[mesh-drift_18s_ease-in-out_infinite] rounded-full blur-3xl"
          style={{
            top: blob.top,
            left: blob.left,
            width: blob.size,
            height: blob.size,
            background: blob.color,
            animationDelay: blob.delay,
          }}
        />
      ))}
    </div>
  );
}
