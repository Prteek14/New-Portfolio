import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row items-center justify-center gap-2  p-4 border-t border-white/10 text-sm text-gray-400 h-auto">
      <span>© 2026 · Designed & coded with</span>
      <span className="text-orange-500 animate-pulse">❤️</span>
      <span>
        by{" "}
        <span className="font-medium text-white relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-orange-500/50">
          Prteek
        </span>
      </span>
    </footer>
  );
}

export default Footer;
