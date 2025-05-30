import React from 'react'
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <div>
        <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">
              Transform Your Career with Expert Training
            </h1>
            <p className="text-xl mb-8">
              Master the skills that drive innovation in technology and data
              science
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                to="/courses"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition duration-300 shadow-lg hover:shadow-blue-500/30"
              >
                Explore Courses
              </Link>
              <Link
                to="/contact"
                className="bg-white text-slate-900 px-8 py-3 rounded-lg font-semibold transition duration-300 hover:bg-gray-100 shadow-lg"
              >
                Make Enquiry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero