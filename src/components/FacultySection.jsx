import React from 'react'

const FacultySection = () => {
  return (
    <div>
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-orange-500 text-center mb-12">
            Who will you Learn from
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Deepesh Wadhwani",
                role: "Director & Principal Faculty",
                image:
                  "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
              },
              {
                name: "Shivesh Kumar",
                role: "Senior Faculty",
                image:
                  "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg",
              },
              {
                name: "Manish Lohar",
                role: "Senior Faculty",
                image:
                  "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg",
              },
              {
                name: "Ayush Raj",
                role: "Senior Faculty",
                image:
                  "https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg",
              },
            ].map((faculty, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300">
                <img
                  src={faculty.image}
                  alt={faculty.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900">
                  {faculty.name}
                </h3>
                <p className="text-gray-600">{faculty.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default FacultySection;
