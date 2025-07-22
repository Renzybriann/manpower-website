import React, { useState } from 'react';

export function Navbar({ navigateTo }) {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { title: "Home", path: "#home" },
    { title: "About Us", path: "#about" },
    { title: "Services", path: "#services" },
    { title: "For Employers", path: "#employers" },
    { title: "For Job Seekers", path: "#jobseekers" },
    { title: "Contact", path: "#contact" },
  ];

  const handleNavClick = (path) => {
    setIsOpen(false);
    navigateTo('home');
    setTimeout(() => {
        const element = document.querySelector(path);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, 100);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
            <a onClick={() => handleNavClick('#home')} className="flex items-center cursor-pointer">
                <img src="/logo.svg" alt="WorkInGL Logo" className="h-8 mr-2" />
                <span className="text-xl font-bold text-gray-800">WorkInGL</span>
            </a>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500 md:hidden">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                {isOpen ? (
                  <path fillRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                ) : (
                  <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                )}
              </svg>
            </button>
        </div>
        <div className={`md:flex items-center ${isOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col md:flex-row md:mx-6">
            {navLinks.map(link => (
              <a key={link.title} onClick={() => handleNavClick(link.path)} className="my-1 text-sm text-gray-700 font-medium hover:text-blue-500 md:mx-4 md:my-0 cursor-pointer">
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}