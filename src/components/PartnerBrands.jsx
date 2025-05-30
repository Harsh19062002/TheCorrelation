import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const PartnerBrands = () => {
  const partnerLogos = [
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      alt: "Microsoft",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      alt: "Google",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      alt: "Amazon",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/7/76/Accenture.svg",
      alt: "Accenture",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/8/88/Infosys_logo.svg",
      alt: "Infosys",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/IBM_logo.svg",
      alt: "IBM",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/e/e9/TCS_NQT_Logo.svg",
      alt: "TCS",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/3/33/Deloitte.svg",
      alt: "Deloitte",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Wipro_Primary_Logo_Color_RGB.svg",
      alt: "Wipro",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Capgemini_201x_logo.svg",
      alt: "Capgemini",
    },
  ];

  return (
    <div>
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-orange-500 mb-10">
            Our Trusted Partners
          </h2>

          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            spaceBetween={30}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
          >
            {partnerLogos.map((logo, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center p-4 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-12 md:h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default PartnerBrands;
