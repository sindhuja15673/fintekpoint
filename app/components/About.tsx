export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            About FintekPoint
          </h2>

          <p className="text-gray-600 leading-7 mb-4">
            FintekPoint is an IT services and consulting company focused on
            delivering scalable, secure, and performance-driven digital
            solutions. We help businesses modernize their technology
            infrastructure and build reliable enterprise applications.
          </p>

          <p className="text-gray-600 leading-7">
            Our team specializes in web development, enterprise systems,
            cloud deployment, and strategic IT consulting to support
            long-term business growth.
          </p>
        </div>

        {/* Right Highlight Box */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-gray-900">
            Why Choose Us
          </h3>

          <ul className="space-y-3 text-gray-600">
            <li>✔ Client-focused development approach</li>
            <li>✔ Scalable & secure architecture</li>
            <li>✔ Clean engineering practices</li>
            <li>✔ Long-term technology partnership</li>
          </ul>
        </div>

      </div>
    </section>
  );
}