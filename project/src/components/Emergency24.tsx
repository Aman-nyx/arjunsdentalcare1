//this is the top section right after hero.
const Emergency24 = () => { 
  return (
    <section className="bg-[#3B82F6] py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 rounded-full bg-[#3B82F6] flex items-center justify-center">
              <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center">
                <img 
                  src="/below hero/24.webp" 
                  alt="24/7 Emergency Service" 
                  className="w-24 h-24 object-cover rounded-full ml-1"
                />
              </div>
            </div>
          </div>
          
          <h2 className="text-6xl font-bold text-white mb-4">
            OPEN <span className="text-[#FCD34D]">24/7</span>
          </h2>
          
          <p className="text-xl text-white mb-12">
            Normal & Emergency Dental Care
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-[#3B82F6] flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                  <img 
                    src="/below hero/emergency.webp" 
                    alt="Emergency Ready" 
                    className="w-12 h-12 object-cover rounded-full"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Emergency Ready</h3>
              <p className="text-white/90">
                Immediate care for dental emergencies, pain relief, 
                and urgent treatments
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-[#3B82F6] flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                  <img 
                    src="/below hero/care.webp" 
                    alt="Compassionate Care" 
                    className="w-14 h-14 object-contain rounded-full"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Compassionate Care</h3>
              <p className="text-white/90">
                Gentle, patient-focused treatment with comfort 
                and care as our priority
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 rounded-full mx-auto mb-4 bg-[#3B82F6] flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                  <img 
                    src="/below hero/always.webp" 
                    alt="Always Available" 
                    className="w-14 h-14 object-contain rounded-full"
                  />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Always Available</h3>
              <p className="text-white/90">
                Round-the-clock availability for both routine and 
                emergency dental services
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Emergency24;