import React from 'react';

const SuccessStoriesSection = () => {
  return (
    <section className="py-16 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600 text-center mb-12">
          Success Stories
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: 'Palak Gangwani',
              role: 'Student',
              testimonial:
                "If you're passionate about data science, TheCorrelation is the perfect place to kickstart your academic and professional journey. The welcoming atmosphere makes you feel right at home, and the supportive community helps you pave the way for success. With hands-on workshops and expert guidance, you'll gain the skills and confidence needed to achieve your goals in the world of data science.",
              image: 'https://images.pexels.com/photos/3777957/pexels-photo-3777957.jpeg',
            },
            {
              name: 'Rohit Nagtode',
              role: 'Student',
              testimonial:
                'Joining TheCorrelation has transformed how I view the world. I learned to use data for a comprehensive, 360-degree analysis, uncovering true insights beyond surface-level information. This data-driven approach has made me more analytical and informed, providing a deeper understanding of complex issues. The skills and knowledge gained here have been invaluable, enhancing my ability to think critically and make informed decisions.',
              image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg',
            },
            {
              name: 'Shivam Acharya',
              role: 'Student',
              testimonial:
                'My experience at TheCorrelation has been amazing. The instructors are knowledgeable and supportive, making complex concepts easy to grasp. The institute provides a great learning environment with practical workshops that enhance understanding and skills.',
              image: 'https://images.pexels.com/photos/3777912/pexels-photo-3777912.jpeg',
            },
            {
              name: 'Fiza Khan',
              role: 'Student',
              testimonial:
                'After coming to this place I came to know what it feels like to see the world as a data scientist pursuing the art of understanding the real world through great faculty.',
              image: 'https://images.pexels.com/photos/3777952/pexels-photo-3777952.jpeg',
            },
            {
              name: 'Akash Goel',
              role: 'Student',
              testimonial:
                'It was wonderful to be a part of the journey of being a Data Scientist.',
              image: 'https://images.pexels.com/photos/3777948/pexels-photo-3777948.jpeg',
            },
            {
              name: 'Sakshi Gupta',
              role: 'Student',
              testimonial:
                "In my experience, TheCorrelation's data science program provides thorough training that sets you up for a successful career. The supportive instructors and practical workshops make complex topics easy to grasp. I'm truly grateful for the opportunity to learn here and grow.",
              image: 'https://images.pexels.com/photos/3777944/pexels-photo-3777944.jpeg',
            },
          ].map((story, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition border border-gray-200"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-orange-400"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{story.name}</h3>
                  <p className="text-sm text-gray-600">{story.role}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm leading-relaxed">{story.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStoriesSection;
