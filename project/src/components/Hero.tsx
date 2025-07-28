const Hero = () => {
  return (
    <section id="home" className="bg-white flex flex-col relative">
      {/* Image */}
      <div className="w-full h-[300px] sm:h-[500px] lg:h-screen relative">
        <img
          src="/heropic.png"
          alt="Dental Team"
          className="w-full h-full object-contain sm:object-cover"
        />
        {/* Overlapping text for sm and up */}
        <div className="hidden sm:flex absolute inset-0 items-center justify-start px-16 -mt-2">
          <div className="bg-white bg-opacity-85 p-8 rounded-xl shadow-lg max-w-2xl text-center">
            <h1 className="text-5xl font-bold text-gray-800 mb-4 leading-tight">
              Your Smile, Our <br />
              <span className="text-[#7DD3FC]">Priority</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Experience exceptional dental care with our team of expert dentists.
              We provide comprehensive treatment in a comfortable, modern environment
              available 24/7 for all your dental needs.
            </p>
            <button
              onClick={() =>
                document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })
              }
              aria-label="Book a dental appointment"
              className="bg-[#144ceb] hover:bg-[#38BDF8] text-white px-8 py-3 rounded-lg font-medium transition-colors"
            >
              Book Appointment Now
            </button>
          </div>
        </div>
      </div>
      {/* Separate text for mobile only */}
      <div className="container mx-auto px-4 py-8 flex items-center justify-center sm:hidden">
        <div className="bg-white bg-opacity-85 p-6 rounded-xl shadow-lg max-w-2xl text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 leading-tight">
            Your Smile, Our <br />
            <span className="text-[#7DD3FC]">Priority</span>
          </h1>
          <p className="text-base text-gray-600 mb-6 leading-relaxed">
            Experience exceptional dental care with our team of expert dentists.
            We provide comprehensive treatment in a comfortable, modern environment
            available 24/7 for all your dental needs.
          </p>
          <button
            onClick={() =>
              document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })
            }
            aria-label="Book a dental appointment"
            className="bg-[#144ceb] hover:bg-[#38BDF8] text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Book Appointment Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
