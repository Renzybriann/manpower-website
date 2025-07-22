
import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} WorkInGL. All Rights Reserved.</p>
        <p className="text-sm text-gray-400 mt-2">Your Gateway to Professional Opportunities in Greenland</p>
        <div className="mt-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white mx-2">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}