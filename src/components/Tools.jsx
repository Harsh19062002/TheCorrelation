import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Tools = () => {
  return (
    <div>
      <section className="py-16 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600 text-center mb-12">
            Programming Languages and Tools Covered
          </h2>

          <Swiper
            modules={[Autoplay]}
            slidesPerView={3}
            spaceBetween={30}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 3 },
              640: { slidesPerView: 4 },
              768: { slidesPerView: 5 },
              1024: { slidesPerView: 6 },
            }}
          >
            {[
              {
                src: 'https://raw.githubusercontent.com/github/explore/master/topics/python/python.png',
                alt: 'Python',
              },
              {
                src: 'https://raw.githubusercontent.com/github/explore/master/topics/javascript/javascript.png',
                alt: 'JavaScript',
              },
              {
                src: 'https://raw.githubusercontent.com/github/explore/master/topics/react/react.png',
                alt: 'React',
              },
              {
                src: 'https://raw.githubusercontent.com/github/explore/master/topics/nodejs/nodejs.png',
                alt: 'Node.js',
              },
              {
                src: 'https://raw.githubusercontent.com/github/explore/master/topics/html/html.png',
                alt: 'HTML',
              },
              {
                src: 'https://raw.githubusercontent.com/github/explore/master/topics/css/css.png',
                alt: 'CSS',
              },
              {
                src: 'https://raw.githubusercontent.com/github/explore/master/topics/git/git.png',
                alt: 'Git',
              },
              {
                src: 'https://raw.githubusercontent.com/github/explore/master/topics/mongodb/mongodb.png',
                alt: 'MongoDB',
              },
              {
                src: 'https://raw.githubusercontent.com/github/explore/master/topics/mysql/mysql.png',
                alt: 'MySQL',
              },
              {
                src: 'https://raw.githubusercontent.com/github/explore/master/topics/github/github.png',
                alt: 'GitHub',
              },
            ].map((tool, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center justify-center p-4 bg-white rounded-lg hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <img src={tool.src} alt={tool.alt} className="h-16 mb-2" />
                  <p className="text-sm text-center text-gray-700 font-semibold">
                    {tool.alt}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Tools;
