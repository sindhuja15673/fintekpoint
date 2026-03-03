export default function Hero() {
  return (
    <section className="relative h-[85vh] flex items-center justify-center text-white">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.webp')" }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Empowering Businesses Through{" "}
          <span className="text-[#02a9f7]">
            Scalable IT Solutions
          </span>
        </h1>

        <p className="text-lg text-gray-200 max-w-3xl mx-auto mb-8">
          FintekPoint is a technology consulting and IT services company
          delivering secure, high-performance web applications, enterprise systems,
          and cloud solutions for modern businesses.
        </p>

        <a
          href="#contact"
          className="bg-[#fad062] text-black px-8 py-3 rounded-md font-semibold hover:bg-cyan-300 transition"
        >
          Discuss Your Project
        </a>
      </div>
    </section>
  );
}