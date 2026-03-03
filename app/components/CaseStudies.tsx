export default function CaseStudies() {
  return (
    <section id="cases" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">
            Case Studies
          </h2>
          <p className="text-gray-600 mt-4">
            Delivering measurable impact through tailored technology solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Project 1 */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-3">
              CraftLegal – Legal Document Automation Platform
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Developed a scalable SaaS platform to automate structured legal document generation.
            </p>
            <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
              <li>Schema-driven multi-step form engine</li>
              <li>Secure draft lifecycle with RLS</li>
              <li>Identity validation logic integration</li>
              <li>PDF & HTML document preview</li>
            </ul>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-3">
              Call Queue Dashboard – Real-Time Processing System
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Built a rate-limited multi-user queue system for high-volume call processing.
            </p>
            <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
              <li>Redis-based queue with Lua scripting</li>
              <li>Concurrency & rate limiting controls</li>
              <li>Real-time dashboard via Socket.IO</li>
              <li>CSV bulk ingestion pipeline</li>
            </ul>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-3">
              CourtShots – Booking Photography Platform
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Designed a dynamic photography booking platform with admin CMS.
            </p>
            <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
              <li>Supabase authentication & storage</li>
              <li>Role-based admin dashboard</li>
              <li>Automated email confirmations</li>
              <li>Live content updates without redeployment</li>
            </ul>
          </div>

          {/* Project 4 */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-3">
              Dynamic Services Website – CMS & Lead Management
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Engineered a fully dynamic business website with content and lead management.
            </p>
            <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
              <li>Database-driven service pages</li>
              <li>Admin CRUD operations</li>
              <li>Lead tracking workflow</li>
              <li>Automated email notifications</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}