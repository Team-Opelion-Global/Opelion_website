export default function Hero() {
  return (
    <section
      id="home"
      className="relative mb-[-1px] flex h-screen items-center justify-center overflow-hidden bg-[#1a120c] pt-0 text-center"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        className="absolute inset-0 h-full w-full scale-[1.1] object-cover object-center"
      >
        <source src="/hero-bg.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-20 max-w-5xl px-6">
        <h1 className="opelion-title text-[56px] md:text-[72px] lg:text-[80px] leading-[1.1] text-white font-semibold tracking-tight">
          From <span className="text-[#D4AF37]">Indian Farms</span>
          <br />
          to Global Markets
        </h1>
        <p className="text-gray-300 mt-6 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Premium supplier of rice, pulses, grains, spices and seeds
          delivering trusted agricultural exports to global markets.
        </p>
      </div>

    </section>
  );
}
