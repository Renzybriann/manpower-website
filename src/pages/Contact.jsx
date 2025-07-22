/*
  File: src/pages/Contact.jsx (UPDATED)
  Description: Added a Facebook icon and link to the contact information section.
*/
import React from 'react';

export function Contact() {
  return (
    <section id="contact" className="bg-white">
      <div className="container mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">Get In Touch</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-500">Inquiring about Greenland? Have a question or want to work with us? We’d love to hear from you.</p>
        </div>
        <div className="max-w-lg mx-auto md:max-w-none md:grid md:grid-cols-2 md:gap-8">
          <div>
            <form action="https://formspree.io/f/YOUR_UNIQUE_ID" method="POST" className="grid grid-cols-1 gap-y-6">
              <div>
                <label htmlFor="full-name" className="sr-only">Full name</label>
                <input type="text" name="full-name" id="full-name" autoComplete="name" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md" placeholder="Full name" />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input id="email" name="email" type="email" autoComplete="email" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md" placeholder="Email" />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea id="message" name="message" rows="4" className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border border-gray-300 rounded-md" placeholder="Your inquiry about Greenland..."></textarea>
              </div>
              <div>
                <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="mt-12 md:mt-0 md:pl-8">
             <h3 className="text-xl font-bold text-gray-900">Contact Information</h3>
             <p className="mt-4 text-gray-600">Our team is based in the Philippines and specializes in Greenlandic placements.</p>
             <div className="mt-6 space-y-4">
                <p className="flex items-center text-gray-600"><svg className="flex-shrink-0 h-6 w-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>workingreenland@gmail.com</p>
                <p className="flex items-center text-gray-600"><svg className="flex-shrink-0 h-6 w-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>+63 917 123 4567</p>
                <p className="flex items-center text-gray-600"><svg className="flex-shrink-0 h-6 w-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>Ilulissat, Greenland</p>
                {/* --- NEW FACEBOOK LINK --- */}
                <p className="flex items-center text-gray-600">
                  <a href="https://www.facebook.com/profile.php?id=100089791193747" target="_blank" rel="noopener noreferrer" className="flex items-center hover:text-blue-600 transition-colors">
                    <svg className="flex-shrink-0 h-6 w-6 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M22.675 0h-21.35C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                    </svg>
                    Follow us on Facebook
                  </a>
                </p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}