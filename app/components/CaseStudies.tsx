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
              Craft Legal – Case Management Platform
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Developed a secure legal case tracking system with
              role-based access and real-time updates.
            </p>
            <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
              <li>Client portal for case status tracking</li>
              <li>Secure authentication & authorization</li>
              <li>REST API integration</li>
              <li>Production deployment & optimization</li>
            </ul>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-3">
              Workflow Automation System
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Built internal document workflow automation to
              streamline business operations.
            </p>
            <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
              <li>Automated approval processes</li>
              <li>Document upload & management</li>
              <li>Database optimization</li>
              <li>Reduced manual processing time</li>
            </ul>
          </div>

          {/* Project 3 */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-3">
              Reporting & Analytics Dashboard
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Designed dynamic dashboards to visualize financial
              and operational data.
            </p>
            <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
              <li>Real-time reporting interface</li>
              <li>Advanced filtering & search</li>
              <li>Data visualization components</li>
              <li>Performance optimization</li>
            </ul>
          </div>

          {/* Project 4 */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
            <h3 className="font-semibold text-lg mb-3">
              Infrastructure & Deployment Optimization
            </h3>
            <p className="text-gray-600 text-sm mb-3">
              Managed production infrastructure and improved
              deployment workflows.
            </p>
            <ul className="list-disc ml-5 text-gray-600 text-sm space-y-1">
              <li>CI/CD pipeline setup</li>
              <li>Cloud hosting configuration</li>
              <li>Application performance tuning</li>
              <li>Security best practices implementation</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}