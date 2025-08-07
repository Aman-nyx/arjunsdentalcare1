import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Clinic Info Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
  <img src="/logo.png" alt="Clinic Logo" className="w-12 h-14 object-contain" />
</div>

              <div>
                <h3 className="text-xl font-bold">ARJUN'S</h3>
                <p className="text-sm text-gray-400">multiSpeciality Dental Care</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Providing exceptional dental care with compassion and expertise. Your smile is our priority, available 24/7 for all your dental needs.
            </p>
            <div className="flex items-center text-[#7DD3FC]">
              <Clock className="w-4 h-4 mr-2" />
              <span className="font-medium">Open 24/7</span>
            </div>
          </div>

          {/* Contact Us Section */}
          <div className="lg:col-span-1">
            <h4 className="text-xl font-bold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#7DD3FC] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">Tc 7/2088  UARRA-22 </p>
                  <p className="text-gray-300">Ulloor-Akkulam Road, Medical College </p>
                  <p className="text-gray-300">Thiruvananthapuram, Kerala 695011</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#7DD3FC] flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+91 9544662033</p>
                  <p className="text-gray-300">+91 7259744662</p>
                  <p className="text-[#7DD3FC] text-sm">24/7 Emergency Line</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#7DD3FC] flex-shrink-0" />
                <a href="mailto:arjunspecialitydentalcare@gmail.com" className="text-gray-300 hover:text-[#7DD3FC] transition-colors">
                  arjunspecialitydentalcare@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="lg:col-span-2">
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <a href="#home" className="block text-gray-300 hover:text-[#7DD3FC] transition-colors">
                  Home
                </a>
                <a href="#about" className="block text-gray-300 hover:text-[#7DD3FC] transition-colors">
                  About
                </a>
                <a href="#doctors" className="block text-gray-300 hover:text-[#7DD3FC] transition-colors">
                  Doctors
                </a>
                <a href="#treatments" className="block text-gray-300 hover:text-[#7DD3FC] transition-colors">
                  Treatments
                </a>
              </div>
              <div className="space-y-3">
                <a href="#gallery" className="block text-gray-300 hover:text-[#7DD3FC] transition-colors">
                  Gallery
                </a>
                <a href="#appointment" className="block text-gray-300 hover:text-[#7DD3FC] transition-colors">
                  Appointment
                </a>
                <a href="#contact" className="block text-gray-300 hover:text-[#7DD3FC] transition-colors">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        {/* Bottom Border */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Arjun's Multispeciality Dental Care. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;