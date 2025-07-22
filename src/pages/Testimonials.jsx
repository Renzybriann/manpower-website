/*
  File: src/pages/Testimonials.jsx
  Description: Testimonials updated to be specific to Greenland placements.
*/
export function Testimonials() {
  const testimonials = [
    {
      quote: "Finding qualified staff for our operations in Nuuk was a constant challenge. Manpower Inc. understood our needs and handled the entire international recruitment and visa process flawlessly.",
      name: "Lars Jensen",
      title: "Operations Manager, Greenlandic Imports"
    },
    {
      quote: "I always dreamed of working in Greenland but the process seemed impossible. They guided me every step of the way, from the job offer to my work permit. I'm now starting my new life in Ilulissat!",
      name: "Maria Santos",
      title: "Hotel Manager"
    }
  ];
  
  return (
    <section id="testimonials" className="bg-blue-50">
      <div className="container mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">What Our Clients Say</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
              <div className="text-right">
                <p className="font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
