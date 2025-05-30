import React from 'react';
import { Phone, BookCheck, Clock } from 'lucide-react';

const ProcessSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Our Process — How To Enroll
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-yellow-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <Phone className="w-12 h-12 text-orange-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-orange-600 mb-3">
              Book a Call
            </h3>
            <p className="text-gray-700">
              Schedule a personalized consultation to discuss your data science learning goals and needs.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-yellow-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <BookCheck className="w-12 h-12 text-orange-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-orange-600 mb-3">
              Career Counselling
            </h3>
            <p className="text-gray-700">
              Receive expert advice tailored to your career aspirations in data science and development.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-yellow-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 text-center">
            <Clock className="w-12 h-12 text-orange-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-orange-600 mb-3">
              Flexible Payment Option
            </h3>
            <p className="text-gray-700">
              Choose from various payment plans to suit your financial situation and preferences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
