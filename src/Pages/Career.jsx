import React from 'react';

const Career = () => {
  return (
    <section className="bg-orange-50 px-4 py-12 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-4">
          <div className="flex gap-2">
            <span className="bg-orange-500 text-white px-3 py-1 text-sm rounded-full">Bestseller</span>
            <span className="bg-yellow-400 text-white px-3 py-1 text-sm rounded-full">Popular</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="bg-gradient-to-b from-orange-500 to-yellow-400 bg-clip-text text-transparent">
              Post Graduate Program
            </span>
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
            in Applied Data Science
          </h3>
          <p className="text-gray-600">
            Advance your career with TheCorrelation’s top-rated Data Science Program. Master 14+ tools &amp; technologies and earn a prestigious certification equivalent to a 1-year PG Diploma.
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div>
              <h4 className="text-sm font-medium text-gray-500">Type</h4>
              <p className="text-lg font-bold">PG Program</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500">Mode</h4>
              <p className="text-lg font-bold">Offline/Hybrid</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500">Duration</h4>
              <p className="text-lg font-bold">1 year / 12 months</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 mt-6 flex-wrap">
            <a
              href="#enroll"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-sm font-medium transition-all"
            >
              Enroll Now
            </a>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg text-sm font-medium transition-all">
              Download Brochure
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://thecorrelation.co.in/wp-content/uploads/2024/07/Group-20.png"
            alt="Program Graphic"
            className="w-full max-w-md md:max-w-lg lg:max-w-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Career;
