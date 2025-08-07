// this is the section at the bottom with emergency and appointment booking
import { Phone, Clock, MessageCircle } from 'lucide-react';

const Appointment = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        {/* Emergency Section */}
        <div className="bg-gray-800 text-white py-16 rounded-2xl mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white text-2xl font-bold">!</span>
            </div>
            
            <h3 className="text-4xl font-bold mb-4">
              <span className="text-red-400">EMERGENCY</span>
            </h3>
            <p className="text-xl mb-2">
              We're <span className="text-[#3B82F6]">OPEN 24/7</span>
            </p>
            <p className=" max-w-[300px] sm:max-w-[none] sm:w-auto text-lg text-gray-300 mb-8 flex items-center justify-center space-x-3 mx-auto sm:mx-0">
              Normal & Emergency Dental Care Available Anytime
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
              href="tel:+91 7259744662"
              className="w-full max-w-[300px] sm:max-w-[none] sm:w-auto"
              >
              <button
                type="button"
                className="ml-5 min-[376px]:ml-10 sm:ml-0 w-full max-w-[300px] sm:max-w-none sm:w-auto bg-red-600 hover:bg-red-700 text-white px-6 py-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-3"

              >
                <Phone className="w-5 h-5" />
                <div>
                <div className="text-sm">Emergency Hotline</div>
                <div className="font-bold">+91 7259744662</div>
                </div>
              </button>
              </a>

              <button className="w-full max-w-[300px] sm:max-w-[none] sm:w-auto bg-blue-500 hover:bg-blue-500 text-white px-6 py-4 rounded-lg font-medium transition-colors flex items-center justify-center space-x-3 mx-auto sm:mx-0">
                <Clock className="w-5 h-5" />
                <div>
                  <div className="text-sm">Available</div>
                  <div className="font-bold">24 Hours a Day</div>
                </div>
              </button>
            </div>
            
            <p id="appointment" className=" max-w-[300px] sm:max-w-[none] sm:w-auto text-gray-400 flex items-center justify-center space-x-3 mx-auto sm:mx-0">
              Pain relief • Broken teeth • Infections • Trauma • Emergency extractions
            </p>
          </div>
        </div>
        
        {/* Book Your Appointment Section */}
        <div  className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Book Your <span className="text-[#7DD3FC]">Appointment</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Schedule your visit with ease. Choose your preferred method to book an 
            appointment and we'll get back to you promptly.
          </p>
        </div>
        
        {/* Booking Options */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* WhatsApp Option */}
            <div className="bg-green-50 p-8 rounded-2xl text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Text Us on WhatsApp</h3>
            <p className="text-gray-600 mb-6">
              Send us a message on WhatsApp for quick appointment booking and instant 
              responses to your queries.
            </p>
            <a
              href="https://wa.me/917259744662"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium transition-colors mb-4 w-full">
              Text Us Now
              </button>
            </a>
            <div className="flex items-center justify-center text-sm text-gray-500">
              <Clock className="w-4 h-4 mr-2" />
              Response time: Usually within minutes
            </div>
            </div>
          
          {/* Call Option */}
          <div className="bg-blue-50 p-8 rounded-2xl text-center">
            <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Call Us Directly</h3>
            <p className="text-gray-600 mb-6">
              Speak with our friendly staff to schedule your appointment and discuss 
              any specific needs or concerns.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors mb-4 w-full">
              <a href="tel:919544662033" className="block">
                (+91) 9544662033
              </a>
            </button>
            <div className="flex items-center justify-center text-sm text-gray-500">
              <Clock className="w-4 h-4 mr-2" />
              Available 24/7 for appointments
            </div>
          </div>
        </div>
        
        {/* What to Expect */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Quick Response:</h4>
            <p className="text-gray-600 text-sm">
              We'll confirm your appointment within minutes
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Flexible Timing:</h4>
            <p className="text-gray-600 text-sm">
              Morning, afternoon, and evening slots available
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-800 mb-2">Emergency Priority:</h4>
            <p className="text-gray-600 text-sm">
              Urgent cases seen immediately
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;