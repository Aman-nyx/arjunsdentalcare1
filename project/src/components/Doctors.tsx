import React from 'react';

const Doctor: React.FC = () => {
  return (
    <section
      id="doctor-highlight"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#e0f2fe] to-[#bae6fd]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet <span className="text-[#38BDF8]">Our Expert</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full" />
        </div>

        {/* Doctor Card */}
        <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden grid md:grid-cols-2">
          {/* Image Section */}
          <div className="relative">
            <img
              src="/doctors/image1.webp"
              alt="Dr. Arjun A R"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Text Content */}
          <div className="p-8 flex flex-col justify-center">
            <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold mb-3 w-fit">
              Endodontics Specialist
            </span>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">Dr. Arjun A R</h3>
            <p className="text-blue-600 font-semibold text-sm mb-2">
              BDS, MDS (Conservative Dentistry & Endodontics)
            </p>
            <p className="text-gray-700 text-base font-medium leading-relaxed">
              With over 9 years of experience, Dr. Arjun excels in advanced endodontic treatments,
              ensuring precise and pain-free dental care. Doctor has successfully handled many procedures including root canal treatments, restorative work, and emergency care.
            </p>
            <div className="h-1 mt-4 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 hover:scale-x-100 transition-transform duration-300 origin-left" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctor;
