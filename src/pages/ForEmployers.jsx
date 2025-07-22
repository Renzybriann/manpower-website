/*
  File: src/pages/ForEmployers.jsx
  Description: Content tailored to employers operating in Greenland.
*/
export function ForEmployers() {
  const benefits = [
    "Access a dedicated pool of candidates ready for Greenland's unique work environment.",
    "Navigate Greenlandic labor laws and hiring compliance with our expert guidance.",
    "Reduce your time-to-hire for positions in Nuuk, Sisimiut, and across the country.",
    "Partner with a consultant that understands your operational needs in Greenland."
  ];

  return (
    <section id="employers" className="bg-white">
      <div className="container mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">For Employers in Greenland</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">Build Your Greenlandic Team with Confidence.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Greenland-Focused Process</h3>
            <ol className="list-decimal list-inside space-y-4 text-gray-600">
              <li><span className="font-semibold">Consultation:</span> We learn your specific needs for your Greenland-based operations.</li>
              <li><span className="font-semibold">Targeted Sourcing:</span> We find candidates with the right skills and readiness for life in Greenland.</li>
              <li><span className="font-semibold">Compliant Placement:</span> We manage the hiring and visa process according to Greenland's regulations.</li>
              <li><span className="font-semibold">Integration Support:</span> We ensure your new hires have a smooth transition.</li>
            </ol>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Benefits for Your Business</h3>
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <svg className="flex-shrink-0 h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  <span className="ml-3 text-gray-600">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-center mt-16">
          <a href="#contact" className="px-10 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors">
            Request a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}