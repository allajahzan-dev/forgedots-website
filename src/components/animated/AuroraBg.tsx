export default function AuroraBg() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden flex justify-center z-0">
      {/* Deep background gradient base - 1c2a63*/}
      <div className="absolute inset-0 bg-linear-to-b from-[#0a0f26] via-[#10193d] to-[#0a0f26]" />

      {/* Top-left massive intense violet/indigo sweep */}
      <div className="absolute top-[-30%] left-[-20%] w-[80%] h-[80%] rounded-full bg-violet-500/30 blur-[150px]" />

      {/* Top-right deep blue/purple glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-600/20 blur-[140px]" />

      {/* Center sweeping glow */}
      <div className="absolute top-[20%] left-[10%] w-[60%] h-[60%] rounded-full bg-purple-700/10 blur-[160px]" />
    </div>
  );
}
