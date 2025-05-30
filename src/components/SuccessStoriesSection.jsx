import React from 'react';

const SuccessStoriesSection = () => {
  return (
    <div>
      <section className="py-16 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600 text-center mb-12">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'PALAK GANGWANI',
                role: 'Data Scientist',
                company: 'Highnest Sustainable Design Pvt. Ltd.',
                testimonial:
                  "The Correlation's course was intense and challenging, but it was worth every moment. The hands-on projects and expert guidance have made me job-ready and confident.",
                image:
                  'https://images.pexels.com/photos/3777957/pexels-photo-3777957.jpeg',
              },
              {
                name: 'ROHIT NAGTODE',
                role: 'Data Scientist',
                company: 'Highnest Sustainable Design Pvt. Ltd.',
                testimonial:
                  'My perspective on the world transformed after joining TheCorrelation. Here, I learned to understand the world through data and perform comprehensive 360-degree analysis to uncover real insights.',
                image:
                  'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg',
              },
              {
                name: 'SAKSHI GUPTA',
                role: 'Data Scientist',
                company: 'Highnest Sustainable Design Pvt. Ltd.',
                testimonial:
                  "The Correlation's emphasis on practical experience made all the difference. I feel prepared to step into any data science role, thanks to the comprehensive training and real-world projects.",
                image:
                  'https://images.pexels.com/photos/3777944/pexels-photo-3777944.jpeg',
              },
            ].map((story, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover ring-2 ring-orange-400"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">{story.name}</h3>
                    <p className="text-gray-600 text-sm">{story.role}</p>
                    <p className="text-gray-500 text-xs">{story.company}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">{story.testimonial}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStoriesSection;
