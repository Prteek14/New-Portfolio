import { motion } from "framer-motion";
import { FaGear } from "react-icons/fa6";

const SampleCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group relative flex min-h-75 w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border border-cyan-100/15 bg-slate-900 shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/40 hover:shadow-lg hover:shadow-cyan-400/20"
    >
      {/* Animated background glow blobs */}
      <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl transition-all duration-500 group-hover:bg-cyan-400/30" />
      <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl transition-all duration-500 group-hover:bg-blue-400/20" />

      {/* Subtle grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(cyan 1px, transparent 1px), linear-gradient(90deg, cyan 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Gears */}
      <div className="relative z-10 flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute h-16 w-16 rounded-full bg-cyan-400/30 blur-md"
        />

        {/* Small gear, top-left, spins counter-clockwise */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute -left-6 -top-4 text-cyan-400/50"
        >
          <FaGear className="h-5 w-5" />
        </motion.div>

        {/* Main gear, spins clockwise */}
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-cyan-300/30 bg-slate-800/80 shadow-inner shadow-cyan-500/10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          >
            <FaGear className="h-7 w-7 text-cyan-300" />
          </motion.div>
        </div>
      </div>

      {/* Text */}
      <div className="relative z-10 flex flex-col items-center gap-1 px-6 text-center">
        <p className="bg-linear-to-r from-cyan-300 to-blue-400 bg-clip-text text-xl font-semibold tracking-wide text-transparent">
          Coming Soon
        </p>
        <p className="text-sm text-slate-400">
          Building something awesome ⚙️
        </p>
      </div>

      {/* Bottom shimmer line */}
      <div className="absolute bottom-0 left-0 h-0.5 w-full bg-linear-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </motion.div>
  );
};

export default SampleCard;