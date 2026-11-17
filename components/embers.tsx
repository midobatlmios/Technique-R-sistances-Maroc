// Discreet glowing embers rising in the hero. Positions are deterministic (no hydration mismatch).
const embers = Array.from({ length: 18 }, (_, i) => {
  const r = (n: number) => ((Math.sin(i * 12.9898 + n * 78.233) * 43758.5453) % 1 + 1) % 1
  return {
    left: `${Math.round(40 + r(1) * 58)}%`,
    size: `${(2 + r(2) * 3).toFixed(1)}px`,
    duration: `${(7 + r(3) * 7).toFixed(1)}s`,
    delay: `${(-r(4) * 14).toFixed(1)}s`,
    drift: `${Math.round(-30 + r(5) * 60)}px`,
  }
})

export function Embers() {
  return (
    <div className="embers" aria-hidden="true">
      {embers.map((e, i) => (
        <span
          key={i}
          style={
            {
              left: e.left,
              width: e.size,
              height: e.size,
              animationDuration: e.duration,
              animationDelay: e.delay,
              '--drift': e.drift,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  )
}
