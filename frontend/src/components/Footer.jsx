import React from 'react';

function Footer() {
  return (
    <footer className="bg-black bg-opacity-90 text-gray-200 py-4">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} TechCare. Все права защищены.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
