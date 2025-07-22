
export function About() {
  return (
    <section id="about" className="bg-white">
      <div className="container mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Your Greenland Recruitment Specialists
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">
            Learn about our dedication to fostering growth in Greenland's unique job market.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our mission is to be the premier bridge connecting talented professionals from the Philippines and beyond to the growing industries of Greenland. We are committed to facilitating smooth, compliant, and successful placements that benefit both the employee and the employer.
            </p>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h3>
            <p className="text-gray-600 leading-relaxed">
              Founded with a passion for connecting talent with unique opportunities, we saw the immense potential in Greenland's developing economy. We dedicated ourselves to mastering the complexities of Greenlandic labor laws and immigration policies to become the most reliable partner for anyone looking to hire or work in this incredible country.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://images.pexels.com/photos/8318508/pexels-photo-8318508.jpeg" 
              alt="A graphic representing a bridge to Greenland" 
              className="rounded-lg shadow-2xl w-full h-auto"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x450/e2e8f0/333?text=Image+Not+Found'; }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}