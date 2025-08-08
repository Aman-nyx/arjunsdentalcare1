import { Clock, Star } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side: Images */}
          <div className="space-y-6">
            <div className="w-full h-[520px] overflow-hidden rounded-2xl shadow-lg">
              <img 
                src="https://images.pexels.com/photos/4269694/pexels-photo-4269694.jpeg?auto=compress&cs=tinysrgb&w=900" 
                alt="Professional dentist" 
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="w-full h-[520px] overflow-hidden rounded-2xl shadow-lg">
              <img 
                src="https://raw.githubusercontent.com/Aman-nyx/arjunsdentalcare1/main/gallery/image8.webp" 
                alt="Modern dental clinic interior" 
                className="w-full h-full object-cover object-[center_30%]"
              />
            </div>
          </div>

          {/* Right side: Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              About Our <span className="text-[#7DD3FC]">Dental Clinic</span>
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our clinic combines 
              cutting-edge technology with compassionate treatment. We're 
              committed to providing comprehensive dental services in a 
              comfortable, modern environment that puts our patients at ease.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our team of experienced professionals works together to ensure 
              every patient receives personalized care tailored to their unique 
              needs. From routine cleanings to complex procedures, we're here 
              for you 24/7.
            </p>

            {/* Clinic Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center bg-gray-50 p-6 rounded-lg">
                <Clock className="w-8 h-8 text-[#7DD3FC] mx-auto mb-2" />
                <h3 className="text-2xl font-bold text-gray-800">24/7</h3>
                <p className="text-gray-600">Emergency Care</p>
              </div>

              <div className="text-center bg-gray-50 p-6 rounded-lg">
                <Star className="w-8 h-8 text-[#7DD3FC] mx-auto mb-2" />
                <h3 className="text-2xl font-bold text-gray-800">4.9/5</h3>
                <p className="text-gray-600">Patient Rating</p>
              </div>
            </div>

            {/* Patient Reviews */}
            <div className="mt-8 bg-gray-100 p-6 rounded-lg">
              <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center">
                &nbsp;&nbsp; What Our Patients Say
              </h4>
              <div className="space-y-4">

                {/* Review - Pramod Nair */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                      P
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Pramod Nair</p>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    "We were looking for dental doctors for our son at night and had given up hope until we discovered this specialty care, which is open 24 hours a day, seven days a week. We were happy with the care offered, which provided my son with significant relief from his tooth ache. Otherwise, it would have been a nightmare. Thank you so much!"
                  </p>
                </div>

                {/* Review - Nithya Sanu */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                      N
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Nithya Sanu</p>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    "I had severe tooth pain late at night and visited the clinic around midnight. Dr. Arjun was incredibly helpful, he gave me an injection and prescribed tablets that relieved my pain, allowing me to finally sleep. The next day, Doctor arranged for an extraction. Special thanks to Dr. Ramya for performing a smooth and painless extraction. I truly appreciate the care and professionalism shown by the team. I highly recommend this clinic to anyone seeking reliable and compassionate dental care."
                  </p>
                </div>

                {/* Review - Arya M.R */}
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">
                      A
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Arya M.R</p>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm">
                    "This was by far the best experience I have had. The doctor explains everything and gives you options. Everyone that I interacted with was amazing."
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
