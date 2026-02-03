

export default function Footer() {
  return (
    <footer className="w-full bg-[#1f1f1f] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Center Text */}
        <p className="text-sm text-white/80 text-center w-full md:w-auto md:text-left">
          © {new Date().getFullYear()} LumaRose Health & Wellness | Patient Portal
        </p>

        <p className="text-sm text-white/80 text-center w-full md:w-auto md:text-right">
          All patient information is protected and handled in accordance with privacy and security standards.
        </p>
      </div>
    </footer>
  );
}
