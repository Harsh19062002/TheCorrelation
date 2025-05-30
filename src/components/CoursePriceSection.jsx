import React from 'react'
import { useState } from 'react';


const CoursePriceSection = () => {
    const [activeTab, setActiveTab] = useState("certificate");
  return (
    <div>
      <section className="py-12 bg-orange-50 text-gray-800">
  <div className="max-w-6xl mx-auto px-4">
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold bg-gradient-to-b from-orange-500 to-yellow-400 bg-clip-text text-transparent">
          Course Price
        </h2>
        <div className="space-x-4">
          <button
            className={`px-4 py-2 rounded-lg font-medium transition ${
              activeTab === "certificate"
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            onClick={() => setActiveTab("certificate")}
          >
            Certificate
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-medium transition ${
              activeTab === "combo"
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            onClick={() => setActiveTab("combo")}
          >
            Combo
          </button>
        </div>
      </div>

      {/* Certificate Cards */}
      {activeTab === "certificate" && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Beginner */}
          <div className="bg-gray-50 shadow rounded-2xl p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-yellow-400 mb-4">Beginner Course</h3>
            <div className="text-lg font-semibold mb-4">
              <span className="line-through text-red-500 mr-2">$129</span>
              <span className="text-orange-500 text-4xl font-bold">$99</span>
            </div>
            <ul className="space-y-2 mb-4 text-sm text-gray-700">
              <li>✔️ 10 Hours Video</li>
              <li>✔️ Certificate of Completion</li>
              <li>✔️ Lifetime Access</li>
            </ul>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
              Enroll Now
            </button>
          </div>

          {/* Intermediate */}
          <div className="bg-gray-50 shadow rounded-2xl p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-yellow-400 mb-4">Intermediate Course</h3>
            <div className="text-lg font-semibold mb-4">
              <span className="line-through text-red-500 mr-2">$179</span>
              <span className="text-orange-500 text-4xl font-bold">$149</span>
            </div>
            <ul className="space-y-2 mb-4 text-sm text-gray-700">
              <li>✔️ 20 Hours Video</li>
              <li>✔️ Certificate of Completion</li>
              <li>✔️ Lifetime Access</li>
              <li>✔️ Project Work</li>
            </ul>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
              Enroll Now
            </button>
          </div>

          {/* Advanced */}
          <div className="bg-gray-50 shadow rounded-2xl p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-yellow-400 mb-4">Advanced Course</h3>
            <div className="text-lg font-semibold mb-4">
              <span className="line-through text-red-500 mr-2">$249</span>
              <span className="text-orange-500 text-4xl font-bold">$199</span>
            </div>
            <ul className="space-y-2 mb-4 text-sm text-gray-700">
              <li>✔️ 40 Hours Video</li>
              <li>✔️ Certificate of Completion</li>
              <li>✔️ Lifetime Access</li>
              <li>✔️ Project + Interview Prep</li>
            </ul>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
              Enroll Now
            </button>
          </div>
        </div>
      )}

      {/* Combo Cards */}
      {activeTab === "combo" && (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Live Online */}
          <div className="bg-gray-50 shadow rounded-2xl p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-yellow-400 mb-4">Live Online</h3>
            <ul className="space-y-2 mb-4 text-sm text-gray-700">
              <li>✔️ Real-Time Interaction</li>
              <li>✔️ Flexible Scheduling</li>
              <li>✔️ Interactive Learning Experience</li>
              <li>✔️ 150+ Hours of Learning</li>
            </ul>
            <div className="text-lg font-semibold mb-4">
              <span className="line-through text-red-500 mr-2">Rs.23000</span>
              <span className="text-orange-500">Rs.19000</span>
            </div>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
              Enroll Now
            </button>
          </div>

          {/* Live Offline */}
          <div className="bg-gray-50 shadow rounded-2xl p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-yellow-400 mb-4">Live Offline</h3>
            <ul className="space-y-2 mb-4 text-sm text-gray-700">
              <li>✔️ In-Person Engagement</li>
              <li>✔️ Structured Environment</li>
              <li>✔️ Collaborative Learning</li>
              <li>✔️ 150+ Hours of Learning</li>
            </ul>
            <div className="text-lg font-semibold mb-4">
              <span className="line-through text-red-500 mr-2">Rs.35000</span>
              <span className="text-orange-500">Rs.31000</span>
            </div>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
              Enroll Now
            </button>
          </div>

          {/* Self-Paced */}
          <div className="bg-gray-50 shadow rounded-2xl p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-yellow-400 mb-4">Self-Paced</h3>
            <ul className="space-y-2 mb-4 text-sm text-gray-700">
              <li>✔️ Flexible Learning</li>
              <li>✔️ Comprehensive Resources</li>
              <li>✔️ Self-Assessment Tools</li>
              <li>✔️ 150+ Hours with 1-Year Access</li>
            </ul>
            <div className="text-lg font-semibold mb-4">
              <span className="line-through text-red-500 mr-2">Rs.27000</span>
              <span className="text-orange-500">Rs.23000</span>
            </div>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
              Enroll Now
            </button>
          </div>
        </div>
      )}
    </div>
  </div>
</section>

    </div>
  )
}

export default CoursePriceSection