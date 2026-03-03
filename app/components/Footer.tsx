export default function Footer() {
  return (
    <footer className="bg-[#001a31] text-gray-300 pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold text-white mb-4">
            <span className="text-[#02a9f7]">FINTEK</span>POINT
          </h2>
          <p className="text-sm leading-6">
            FintekPoint is an IT services and consulting company delivering
            scalable web, cloud, and enterprise technology solutions to
            modern businesses.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Web Application Development</li>
            <li>Enterprise Software Solutions</li>
            <li>Cloud & DevOps</li>
            <li>UI/UX Engineering</li>
            <li>IT Consulting</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <p className="text-sm mb-2">info@fintekpoint.com</p>
          <p className="text-sm mb-2">+1 763 777 1075</p>
          <p className="text-sm">
            USA & India Operations
          </p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-600 mt-12 pt-6 text-center text-sm">
        © {new Date().getFullYear()} FintekPoint. All rights reserved.
      </div>
    </footer>
  );
}