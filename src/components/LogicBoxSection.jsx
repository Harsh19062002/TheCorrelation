import React from 'react'

const LogicBoxSection = () => {
  return (
    <div>
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-orange-500 text-center mb-8">
              The Logic Box
            </h2>
            <p className="text-center text-lg text-gray-700 mb-8">
              Unlock your potential with our Logic Box! Includes five essential
              data science books, a task-tracking notebook, a stationery pouch,
              lemon tea and a chic mug. Boost your productivity and elevate your
              daily experience!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  2 Years +
                </div>
                <div className="text-gray-600">Drop Covered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  100%
                </div>
                <div className="text-gray-600">Hikes Received</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  100%
                </div>
                <div className="text-gray-600">Domain Switches</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LogicBoxSection
