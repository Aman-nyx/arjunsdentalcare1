import { useEffect, useRef, useState } from "react";

type ImageType = { label: string; url: string };

const Gallery = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

  const images: ImageType[] = [
    { label: "Image 1", url: "/gallery/image1.webp" },
    { label: "Image 2", url: "/gallery/image2.webp" },
    { label: "Image 3", url: "/gallery/image3.webp" },
    { label: "Image 4", url: "/gallery/image4.webp" },
    { label: "Image 5", url: "/gallery/image5.webp" },
    { label: "Image 6", url: "/gallery/image6.webp" },
    { label: "Image 7", url: "/gallery/image7.webp" },
    { label: "Image 8", url: "/gallery/image8.webp" },
    { label: "Image 9", url: "/gallery/image9.webp" },
  ];
  useEffect(() => {
    if (!selectedImage) {
      intervalRef.current = window.setInterval(() => {
        if (scrollRef.current) {
          const container = scrollRef.current;
          const item = container.children[currentIndex] as HTMLElement;
          if (!item) return;
          const itemWidth = item.offsetWidth;
          const scrollTo =
            item.offsetLeft - (container.offsetWidth - itemWidth) / 2;

          container.scrollTo({
            left: scrollTo,
            behavior: "smooth",
          });

          setCurrentIndex((prev) => (prev + 1) % images.length);
        }
      }, 3000);
    }

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentIndex, selectedImage]);

  const closePopup = () => {
    setSelectedImage(null);
    // Resume auto-scroll
    setCurrentIndex((prev) => prev);
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

        {/* Mobile Slider */}
        <div
          ref={scrollRef}
          className="flex sm:hidden gap-4 overflow-x-auto scroll-smooth px-4 py-6 snap-x snap-mandatory"
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
// This code defines a Gallery component that displays a collection of images in a responsive layout.
// It includes a mobile slider for smaller screens and a grid layout for larger screens.
// The component also features an auto-scroll functionality that cycles through the images every 3 seconds.
// When an image is clicked, it opens a popup displaying the image in a larger view.
// The popup can be closed by clicking a close button, which also resumes the auto-scroll functionality.
// The images are sourced from a random image API, and the component is styled using Tailwind CSS classes for a modern look.
// The gallery is designed to be user-friendly, with smooth transitions and a clean layout that highlights the images effectively.