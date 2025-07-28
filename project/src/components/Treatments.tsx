import React, { useState } from 'react';
import { Smile, Heart, Scissors, Shield, RotateCcw, Zap, Move, Baby, Wrench, Activity, X } from 'lucide-react';

interface Treatment {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  detailedInfo: {
    overview: string;
    benefits: string[];
    procedure: string;
    duration: string;
    recovery: string;
  };
}

const Treatments = () => {
  const [selectedTreatment, setSelectedTreatment] = useState<Treatment | null>(null);

  const treatments: Treatment[] = [
    {
      id: 'cosmetic',
      title: 'Cosmetic Dentistry',
      description: 'Enhance the aesthetics of your smile',
      icon: <Smile className="w-8 h-8" />,
      color: 'text-pink-500',
      detailedInfo: {
        overview: 'Cosmetic dentistry focuses on improving the appearance of your teeth, gums, and overall smile. Our advanced techniques can transform your smile and boost your confidence.',
        benefits: [
          'Enhanced smile aesthetics',
          'Improved self-confidence',
          'Better oral health',
          'Long-lasting results',
          'Natural-looking outcomes'
        ],
        procedure: 'Our cosmetic procedures include teeth whitening, veneers, bonding, and smile makeovers. Each treatment is customized to your specific needs and desired outcomes.',
        duration: '1-3 visits depending on the procedure',
        recovery: 'Minimal downtime with most procedures. Some sensitivity may occur initially but resolves quickly.'
      }
    },
    {
      id: 'implants',
      title: 'Dental Implants',
      description: 'Permanent tooth replacement solutions',
      icon: <Heart className="w-8 h-8" />,
      color: 'text-red-500',
      detailedInfo: {
        overview: 'Dental implants are the gold standard for replacing missing teeth. They provide a permanent, natural-looking solution that functions just like your original teeth.',
        benefits: [
          'Permanent tooth replacement',
          'Natural look and feel',
          'Preserves jawbone health',
          'No impact on adjacent teeth',
          'Long-term durability'
        ],
        procedure: 'The implant process involves placing a titanium post into the jawbone, allowing it to integrate, then attaching a custom crown.',
        duration: '3-6 months for complete treatment',
        recovery: '1-2 weeks initial healing, 3-6 months for full integration'
      }
    },
    {
      id: 'smile-design',
      title: 'Smile Designing',
      description: 'Personalized smile makeovers',
      icon: <Scissors className="w-8 h-8" />,
      color: 'text-purple-500',
      detailedInfo: {
        overview: 'Smile designing is a comprehensive approach to creating your perfect smile using advanced digital technology and artistic expertise.',
        benefits: [
          'Customized smile design',
          'Digital preview before treatment',
          'Comprehensive approach',
          'Artistic and functional results',
          'Boosted confidence'
        ],
        procedure: 'We use digital imaging to design your new smile, then implement the plan using various cosmetic procedures.',
        duration: '2-4 visits over 2-6 weeks',
        recovery: 'Varies by procedures included in the design plan'
      }
    },
    {
      id: 'gum-surgery',
      title: 'Gum Surgeries',
      description: 'Treat bleeding or receding gums',
      icon: <Shield className="w-8 h-8" />,
      color: 'text-green-500',
      detailedInfo: {
        overview: 'Gum surgery addresses various periodontal issues including gum disease, recession, and aesthetic concerns to restore healthy gums.',
        benefits: [
          'Improved gum health',
          'Reduced bleeding and inflammation',
          'Enhanced smile aesthetics',
          'Prevention of tooth loss',
          'Better oral hygiene'
        ],
        procedure: 'Various surgical techniques including grafting, pocket reduction, and regenerative procedures tailored to your specific condition.',
        duration: '1-2 hours per procedure',
        recovery: '1-2 weeks with proper care and follow-up'
      }
    },
    {
      id: 'restorative',
      title: 'Restorative Dentistry',
      description: 'Fillings, crowns & tooth repairs',
      icon: <RotateCcw className="w-8 h-8" />,
      color: 'text-blue-500',
      detailedInfo: {
        overview: 'Restorative dentistry focuses on repairing and restoring damaged teeth to their natural function and appearance.',
        benefits: [
          'Restored tooth function',
          'Pain relief',
          'Prevention of further damage',
          'Natural appearance',
          'Long-lasting solutions'
        ],
        procedure: 'Includes fillings, crowns, bridges, and other restorative treatments using the latest materials and techniques.',
        duration: '1-3 visits depending on complexity',
        recovery: 'Minimal discomfort, normal function within 24-48 hours'
      }
    },
    {
      id: 'root-canal',
      title: 'Root Canal Treatment',
      description: 'Pain-free treatment for infected teeth',
      icon: <Zap className="w-8 h-8" />,
      color: 'text-yellow-500',
      detailedInfo: {
        overview: 'Modern root canal treatment is a comfortable procedure that saves infected teeth and eliminates pain while preserving your natural tooth.',
        benefits: [
          'Saves natural tooth',
          'Eliminates infection and pain',
          'Prevents spread of infection',
          'Cost-effective solution',
          'High success rate'
        ],
        procedure: 'We remove infected tissue, clean and disinfect the root canals, then seal the tooth with a filling or crown.',
        duration: '1-2 appointments',
        recovery: 'Mild discomfort for 2-3 days, manageable with over-the-counter pain medication'
      }
    },
    {
      id: 'orthodontic',
      title: 'Orthodontic Treatment',
      description: 'Braces & aligners for smile correction',
      icon: <Move className="w-8 h-8" />,
      color: 'text-indigo-500',
      detailedInfo: {
        overview: 'Orthodontic treatment straightens teeth and corrects bite issues using modern braces or clear aligners for a perfect smile.',
        benefits: [
          'Straighter teeth',
          'Improved bite function',
          'Enhanced facial aesthetics',
          'Better oral hygiene',
          'Increased confidence'
        ],
        procedure: 'Treatment options include traditional braces, clear braces, and invisible aligners customized to your needs.',
        duration: '12-24 months average treatment time',
        recovery: 'Initial adjustment period of 1-2 weeks, regular adjustments every 4-6 weeks'
      }
    },
    {
      id: 'kids-dentistry',
      title: 'Kids Dentistry',
      description: 'Gentle dental care for children',
      icon: <Baby className="w-8 h-8" />,
      color: 'text-orange-500',
      detailedInfo: {
        overview: 'Pediatric dentistry provides specialized care for children in a fun, comfortable environment that makes dental visits enjoyable.',
        benefits: [
          'Child-friendly environment',
          'Preventive care focus',
          'Early problem detection',
          'Positive dental experiences',
          'Education for good habits'
        ],
        procedure: 'Comprehensive care including cleanings, fluoride treatments, sealants, and gentle treatment of cavities.',
        duration: '30-60 minutes per visit',
        recovery: 'No recovery needed for routine care, minimal discomfort with treatments'
      }
    },
    {
      id: 'wisdom-tooth',
      title: 'Wisdom Tooth Removal',
      description: 'Safe and effective molar extractions',
      icon: <Wrench className="w-8 h-8" />,
      color: 'text-gray-600',
      detailedInfo: {
        overview: 'Wisdom tooth extraction is performed when these teeth cause problems or don\'t have enough space to emerge properly.',
        benefits: [
          'Relief from pain and pressure',
          'Prevention of crowding',
          'Reduced infection risk',
          'Improved oral hygiene',
          'Prevention of damage to adjacent teeth'
        ],
        procedure: 'Surgical removal performed under local anesthesia or sedation for comfort, with careful post-operative care.',
        duration: '30-60 minutes per extraction',
        recovery: '3-7 days with proper care, swelling peaks at 48-72 hours'
      }
    },
    {
      id: 'laser-dentistry',
      title: 'Laser Dentistry',
      description: 'Advanced, pain-free laser treatments',
      icon: <Activity className="w-8 h-8" />,
      color: 'text-cyan-500',
      detailedInfo: {
        overview: 'Laser dentistry uses advanced laser technology for precise, comfortable treatments with faster healing and minimal discomfort.',
        benefits: [
          'Minimally invasive procedures',
          'Reduced bleeding and swelling',
          'Faster healing times',
          'Greater precision',
          'Often no anesthesia needed'
        ],
        procedure: 'Laser technology is used for gum treatment, cavity preparation, teeth whitening, and soft tissue procedures.',
        duration: 'Varies by procedure, often shorter than traditional methods',
        recovery: 'Faster healing with less discomfort compared to traditional methods'
      }
    }
  ];

  const openModal = (treatment: Treatment) => {
    setSelectedTreatment(treatment);
  };

  const closeModal = () => {
    setSelectedTreatment(null);
  };

  return (
    <>
      <section id="treatments" className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-[#7DD3FC]">Treatments</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Comprehensive dental services using the latest technology and techniques to 
              ensure the best possible outcomes for our patients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {treatments.map((treatment) => (
              <div key={treatment.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                <div className={`${treatment.color} mb-4 flex justify-center`}>
                  {treatment.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{treatment.title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{treatment.description}</p>
                <button 
                  onClick={() => openModal(treatment)}
                  className="text-[#3B82F6] hover:text-[#2563EB] font-medium text-sm transition-colors inline-flex items-center"
                >
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedTreatment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className={selectedTreatment.color}>
                    {selectedTreatment.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{selectedTreatment.title}</h3>
                </div>
                <button 
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Overview</h4>
                  <p className="text-gray-600 leading-relaxed">{selectedTreatment.detailedInfo.overview}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Benefits</h4>
                  <ul className="space-y-2">
                    {selectedTreatment.detailedInfo.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#7DD3FC] rounded-full"></div>
                        <span className="text-gray-600">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Procedure</h4>
                  <p className="text-gray-600 leading-relaxed">{selectedTreatment.detailedInfo.procedure}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Duration</h4>
                    <p className="text-gray-600">{selectedTreatment.detailedInfo.duration}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Recovery</h4>
                    <p className="text-gray-600">{selectedTreatment.detailedInfo.recovery}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Treatments;