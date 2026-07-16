import AiChat from "./AiChat"
import { Link } from "react-router-dom";

function AiWrapper() {
  return (
    <div>
      <Link
        to="/"
        className="fixed left-4 top-4 z-10 rounded-lg border border-cyan-400 px-3 py-2 text-sm text-cyan-400 transition-colors hover:bg-cyan-400 hover:text-slate-950"
      >
        ← Back
      </Link>
      <AiChat/>
    </div>
  )
}

export default AiWrapper
