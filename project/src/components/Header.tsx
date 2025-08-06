import { Mail, Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      {/* Contact Strip */}
      <div className="bg-[#f3f4f6] text-gray-700 text-sm px-4 py-2 flex flex-col md:flex-row md:justify-between items-center gap-1 md:gap-0">
        <span className="flex items-center gap-2 text-xs md:text-sm">
          <Mail size={14} /> arjunspecialitydentalcare@gmail.com
        </span>

        {/* Phone numbers */}
        <span className="flex items-center gap-2 text-xs md:text-sm">
          <Phone size={14} className="text-[#38BDF8]" />
          <a href="tel:+919544662033" className="hover:text-blue-600 transition-colors">
            +91 9544662033
          </a>
          <span className="text-gray-400">/</span>
          <a href="tel:+917259744662" className="hover:text-blue-600 transition-colors">
            +91 7259744662
          </a>
        </span>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm py-2 md:py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between w-full">
            {/* Left: Logo + Name */}
            <div className="flex items-center gap-4">
              <img
                src="/logo.png"
                alt="Clinic Logo"
                className="h-14 md:h-14 w-auto rounded-xl object-contain"
              />
              <div className="text-center md:text-left">
                <h1 className="text-lg md:text-2xl font-bold text-gray-800 leading-tight">
                  ARJUN'S
                </h1>
                <h2 className="text-sm md:text-xl font-bold text-gray-600 leading-tight">
                  Multi Speciality Dental Care
                </h2>
              </div>
            </div>

            {/* Right: Desktop Nav + Button */}
            <div className="hidden md:flex items-center space-x-6">
              <nav className="flex items-center space-x-5">
                <a href="#home" className="text-sm text-gray-700 hover:text-[#7DD3FC] transition-colors">Home</a>
                <a href="#about" className="text-sm text-gray-700 hover:text-[#7DD3FC] transition-colors">About</a>
                <a href="#doctors" className="text-sm text-gray-700 hover:text-[#7DD3FC] transition-colors">Doctors</a>
                <a href="#treatments" className="text-sm text-gray-700 hover:text-[#7DD3FC] transition-colors">Treatments</a>
                <a href="#gallery" className="text-sm text-gray-700 hover:text-[#7DD3FC] transition-colors">Gallery</a>
                <a href="#contact" className="text-sm text-gray-700 hover:text-[#7DD3FC] transition-colors">Contact</a>
              </nav>
              <a
                href="#appointment"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#144ceb] text-white text-sm font-semibold px-4 py-2 rounded hover:bg-blue-800 transition-colors"
              >
                Book Appointment
              </a>
            </div>

            {/* Mobile: Menu Icon */}
            <div className="md:hidden">
              <button onClick={toggleMenu}>
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header with Close Icon */}
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <h2 className="text-base font-semibold text-gray-700">Menu</h2>
          <button onClick={toggleMenu}>
            <X size={22} />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col px-6 py-4 space-y-4 text-sm text-gray-700">
          {['home', 'about', 'doctors', 'treatments', 'gallery', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={toggleMenu}
              className="hover:text-blue-500 transition-colors capitalize"
            >
              {section}
            </a>
          ))}

          <a
            href="#appointment"
            onClick={(e) => {
              e.preventDefault();
              setMenuOpen(false);
              document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="mt-4 w-full text-center bg-[#144ceb] text-white font-semibold px-4 py-2 rounded hover:bg-blue-800 transition-colors"
          >
            Book Appointment
          </a>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
          onClick={toggleMenu}
        />
      )}
    </>
  );
};

export default Header;
