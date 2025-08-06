import { MapPin, Phone } from 'lucide-react';

const Map = () => {
  return (
    <section id="contact" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Visit Our <span className="text-[#7DD3FC]">Clinic</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conveniently located in the heart of the city with easy parking and public transport access.
          </p>
        </div>

<div className="grid lg:grid-cols-2 gap-8">
  {/* Map Section */}
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
    <div className="h-96 bg-gray-200 relative">
      {/* Replace this div with your Google Maps embed code */}
      <div className="relative w-full h-96 rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.695227277059!2d76.92552655935287!3d8.5289406926814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05b9831ca96723%3A0x52d489c7d1700eeb!2sArjun&#39;s%20Multi%20Speciality%20Dental%20Care!5e0!3m2!1sen!2sin!4v1753606101204!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </div>
  </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#7DD3FC]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Our Address</h3>
                  <p className="text-gray-600">UARRA-22</p>
                  <p className="text-gray-600">tc/7,2008, Ulloor-Akkulam Rd</p>
                  <p className="text-gray-600">Thiruvananthapuram, Kerala, 695011</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Contact Information</h3>
                  <p className="text-gray-600">
                    <span className="font-medium">Phone:</span> 
                    <a href="tel:919495974446" className="ml-1 hover:text-blue-600 transition-colors">
                    (+91) 9495974446
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Emergency:</span> 
                    <a href="tel:91725974462" className="ml-1 hover:text-blue-600 transition-colors">
                      (+91) 7259744662
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Email:</span> 
                    <a href="mailto:arjunspecialitydentalcare@gmail.com" className="ml-1 hover:text-blue-600 transition-colors">
                      arjunspecialitydentalcare@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div> {/* End Contact Info column */}
        </div> {/* End grid */}
      </div> {/* End container */}
    </section>
  );
};

export default Map;
