import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Doctor {
  id:number;
  name: string;
  qualifications: string;
  specialization: string;
  image: string;
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    qualifications: "BDS,MDS",
    specialization: "DENTAL SURGEON",
    image: "/doctors/image1.webp"
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    qualifications: "BDS,MDS",
    specialization: "DENTAL SURGEON",
    image: "/doctors/image2.webp"
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    qualifications: "BDS,MDS",
    specialization: "DENTAL SURGEON",
    image: "/doctors/image3.webp"
  },
  {
    id: 4,
    name: "Dr. James Wilson",
    qualifications: "BDS,MDS",
    specialization: "DENTAL SURGEON",
    image: "/doctors/image4.webp"
  },
  {
    id: 5,
    name: "Dr. Priya Sharma",
    qualifications: "BDS,MDS",
    specialization: "DENTAL SURGEON",
    image: "/doctors/image5.webp"
  },
  {
    id: 6,
    name: "Dr. Robert Taylor",
    qualifications: "BDS,MDS",
    specialization: "DENTAL SURGEON",
    image: "/doctors/image6.webp"
  },
  {
    id: 7,
    name: "Dr. Lisa Thompson",
    qualifications: "BDS,MDS",
    specialization: "DENTAL SURGEON",
    image: "/doctors/image7.webp"
  },
  {
    id: 8,
    name: "Dr. Ahmed Hassan",
    qualifications: "BDS,MDS",
    specialization: "DENTAL SURGEON",
    image: "/doctors/image8.webp"
  },
  {
    id: 9,
    name: "Dr. Maria Garcia",
    qualifications: "BDS,MDS",
    specialization: "DENTAL SURGEON",
    image: "/doctors/image9.webp"
  },
  {
    id: 10,
    name: "Dr. David Kumar",
    qualifications: "BDS,MDS",
    specialization: "DENTAL SURGEON",
    image: "/doctors/image10.webp"
  }
];

const getVisibleCards = () => {
  if (typeof window === 'undefined') return 1;
  if (window.innerWidth >= 1280) return 4;
  if (window.innerWidth >= 1024) return 3;
  if (window.innerWidth >= 768) return 2;
  return 1;
};

const DoctorsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(getVisibleCards);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const maxIndex = doctors.length;

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Infinite Next/Previous
  const goToNext = () => {
    setCurrentIndex(prev => (prev + 1) % maxIndex);
  };

  const goToPrevious = () => {
    setCurrentIndex(prev => (prev - 1 + maxIndex) % maxIndex);
  };

  // Autoplay every 4s
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(goToNext, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
    setIsPaused(true);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    const current = e.targetTouches[0].clientX;
    setTouchEnd(current);
    if (touchStart != null) {
      const diff = current - touchStart;
      const maxDrag = window.innerWidth * 0.3;
      setDragOffset(Math.max(-maxDrag, Math.min(maxDrag, diff)));
    }
  };

  const onTouchEnd = () => {
    if (touchStart == null || touchEnd == null) {
      setIsDragging(false);
      return;
    }

    const distance = touchStart - touchEnd;
    if (distance > 50) goToNext();
    else if (distance < -50) goToPrevious();

    setIsDragging(false);
    setDragOffset(0);
    setTimeout(() => setIsPaused(false), 2000); // Resume autoplay
  };

  const cardWidth = 100 / visibleCards;

  return (
    <section id="doctors" className="py-16 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our
            <span className="text-[#7DD3FC]">&nbsp;Talented Doctors</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full" />
        </div>

        <div className="relative">
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-200 hover:shadow-xl -ml-6"
            aria-label="Previous doctors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-all duration-200 hover:shadow-xl -mr-6"
            aria-label="Next doctors"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button>

          <div className="overflow-hidden rounded-lg">
            <div
              className={`flex ${
                isDragging ? 'transition-none' : 'transition-transform duration-500 ease-in-out'
              }`}
              style={{
                transform: `translateX(calc(-${currentIndex * cardWidth}% + ${dragOffset}px))`
              }}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              onTouchCancel={onTouchEnd}
            >
              {doctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${cardWidth}%` }}
                  role="group"
                  aria-label={`${doctor.name}, ${doctor.specialization}`}
                >
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group h-full select-none">
                    <div className="relative overflow-hidden">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        draggable={false}
                        className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {doctor.name}
                      </h3>
                      <p className="text-blue-600 font-semibold text-sm mb-1">
                        {doctor.qualifications}
                      </p>
                      <p className="text-gray-600 text-sm font-medium">
                        {doctor.specialization}
                      </p>
                    </div>
                    <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxIndex }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 2000);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-blue-600 scale-110'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorsCarousel;
