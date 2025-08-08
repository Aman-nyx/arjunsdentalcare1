import { useEffect, useRef, useState } from "react";

type ImageType = { label: string; url: string };

const Gallery = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const userInteractedRef = useRef(false);
  const [ok, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

  const images: ImageType[] = [
    { label: "Image 1", url: "https://raw.githubusercontent.com/Arjundentalcare/arjunmultispecialitydentalcare/master/gallery/image1.webp" },
    { label: "Image 2", url: "https://raw.githubusercontent.com/Arjundentalcare/arjunmultispecialitydentalcare/master/gallery/image2.webp" },
    { label: "Image 3", url: "https://raw.githubusercontent.com/Arjundentalcare/arjunmultispecialitydentalcare/master/gallery/image3.webp" },
    { label: "Image 4", url: "https://raw.githubusercontent.com/Arjundentalcare/arjunmultispecialitydentalcare/master/gallery/image4.webp" },
    { label: "Image 5", url: "https://raw.githubusercontent.com/Arjundentalcare/arjunmultispecialitydentalcare/master/gallery/image5.webp" },
    { label: "Image 6", url: "https://raw.githubusercontent.com/Arjundentalcare/arjunmultispecialitydentalcare/master/gallery/image6.webp" },
    { label: "Image 7", url: "https://raw.githubusercontent.com/Arjundentalcare/arjunmultispecialitydentalcare/master/gallery/image7.webp" },
    { label: "Image 8", url: "https://raw.githubusercontent.com/Arjundentalcare/arjunmultispecialitydentalcare/master/gallery/image8.webp" },
    { label: "Image 9", url: "https://raw.githubusercontent.com/Arjundentalcare/arjunmultispecialitydentalcare/master/gallery/image9.webp" },
  ];

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const item = container.children[index] as HTMLElement;
    if (!item) return;
    const itemWidth = item.offsetWidth;
    const scrollTo = item.offsetLeft - (container.offsetWidth - itemWidth) / 2;

    container.scrollTo({
      left: scrollTo,
      behavior: "smooth",
    });
  };

  const startAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % images.length;
        scrollToIndex(next);
        return next;
      });
    }, 1500);
  };

  const stopAutoScroll = () => {
    userInteractedRef.current = true;
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const resumeAutoScroll = () => {
    timeoutRef.current = setTimeout(() => {
      userInteractedRef.current = false;
      startAutoScroll();
    }, 3000);
  };

  useEffect(() => {
    if (!selectedImage) {
      startAutoScroll();
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [selectedImage]);

  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="bg-white py-16 relative">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-[#7DD3FC]">Gallery</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a look at our modern facility and the quality care we provide.
          </p>
        </div>

        {/* Mobile Auto-scroll Slider */}
        <div
          ref={scrollRef}
          className="flex sm:hidden gap-4 overflow-x-auto scroll-smooth px-4 py-6 snap-x snap-mandatory"
          onTouchStart={stopAutoScroll}
          onTouchEnd={resumeAutoScroll}
          onMouseDown={stopAutoScroll}
          onMouseUp={resumeAutoScroll}
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              className="snap-center flex-shrink-0 w-[250px] h-[250px] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img.url}
                alt={img.label}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Desktop Grid */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
          {images.map((img, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow aspect-square cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img.url}
                alt={img.label}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Image Popup */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative w-[90%] max-w-3xl">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-white text-3xl font-bold z-10"
            >
              &times;
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.label}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
