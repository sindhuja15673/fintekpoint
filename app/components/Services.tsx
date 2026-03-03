export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#eaf2f7]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-800">
            <span className="text-[#02a9f7]">Our</span> Services
          </h2>
          <div className="w-16 h-1 bg-[#02a9f7] mx-auto mt-4 rounded"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* Card 1 */}
          <div className="bg-white p-10 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <h3 className="text-xl font-semibold mb-4">
              Web Application Development
            </h3>
            <div className="mb-6">
              {/* <div className="w-16 h-16 bg-[#02a9f7]/10 rounded-full mx-auto"></div> */}
              <img src="/services_1.gif" className="mx-auto w-50 mb-6" />
            </div>
            
            <p className="text-gray-600 text-sm leading-relaxed">
              Modern custom web application design and development with scalable architecture,
              security, and integration capabilities.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-10 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <h3 className="text-xl font-semibold mb-4">
             Enterprise Platform & Transformation

            </h3>
            <div className="mb-6">
                 <img src="/services_2.gif" className="mx-auto w-50 mb-6" />
              {/* <div className="w-16 h-16 bg-[#02a9f7]/10 rounded-full mx-auto"></div> */}
            </div>
            
            <p className="text-gray-600 text-sm leading-relaxed">
              Agile project development to streamline process, paperless workflow, Optimize operation, increase efficiency, automation...
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-10 rounded-xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <h3 className="text-xl font-semibold mb-4">
             Start-up Helpers & Enablers
            </h3>
            <div className="mb-6">
                <img src="/services_5.gif" className="mx-auto w-50 mb-6" />
              {/* <div className="w-16 h-16 bg-[#02a9f7]/10 rounded-full mx-auto"></div> */}
            </div>
            
            <p className="text-gray-600 text-sm leading-relaxed">
              As we are committed to help Start-up to grow, special offers to Proto, PoC & MVP application development, solution to scale...
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}