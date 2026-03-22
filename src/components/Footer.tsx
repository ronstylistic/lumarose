export default function Footer() {
  return (
    <footer
      className="relative w-full overflow-hidden border-t border-white/[0.08] bg-[#141314] antialiased"
      role="contentinfo"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/[0.06] to-transparent opacity-80" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-6 py-10 md:px-8 md:py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-12 lg:gap-20">
          <p className="text-center text-sm font-medium leading-relaxed tracking-wide text-white/90 md:max-w-sm md:text-left">
            © {new Date().getFullYear()} LumaRose Health & Wellness | Patient
            Portal
          </p>

          <p className="text-center text-sm font-normal leading-relaxed text-white/75 md:max-w-md md:text-right md:leading-relaxed">
            All patient information is protected and handled in accordance with
            privacy and security standards.
          </p>
        </div>
      </div>
    </footer>
  );
}
