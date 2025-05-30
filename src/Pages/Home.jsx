import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award, Clock, Phone, BookCheck, Briefcase, GraduationCap } from 'lucide-react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Hero from '../components/Hero';
import CommitmentCard from '../components/CommitmentCard';
import Tools from '../components/Tools';
import ProcessSection from '../components/ProcessSection';
import BetterSection from '../components/BetterSection';
import LogicBoxSection from '../components/LogicBoxSection';
import FacultySection from '../components/FacultySection';
import SuccessStoriesSection from '../components/SuccessStoriesSection';
import PartnerBrands from '../components/PartnerBrands';
import ReachOutForm from '../components/ReachOutForm';
import courseContent from "../courseContent"; // adjust path
import { useNavigate } from "react-router-dom";


const Home = () => {

  const courses = Object.values(courseContent);
  const navigate = useNavigate();

  // Same generateLink function as in Navbar to generate course URL path
  const generateLink = (label) =>
    `/courses/${label.toLowerCase().replace(".", "").replace(" ", "-")}`;


  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Commitment Card */}
      <CommitmentCard />

      {/* Tools & Languages */}
      <Tools />

      {/* Process Section */}
      <ProcessSection/>

      {/* Why Better Section */}
      <BetterSection/>
      

      {/* Logic Box Section */}
      <LogicBoxSection/>


      <section className="py-16 bg-yellow-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-12">
          Our Popular Courses
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {courses.map((course, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full">
                <div className="mb-4">
                  <h3 className="text-2xl font-semibold text-orange-500 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {course.description}
                  </p>
                </div>

                <div className="flex gap-3 mt-auto">
                  <button
                    onClick={() => navigate(course.link)}
                    className="flex items-center gap-2 bg-orange-500 text-white text-sm px-4 py-2 rounded hover:bg-orange-600 transition"
                  >
                    <span>Explore</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>

                  <button
                    onClick={() => navigate("/contact")}
                    className="flex items-center gap-2 bg-gray-200 text-gray-800 text-sm px-4 py-2 rounded hover:bg-gray-300 transition"
                  >
                    <span>Enroll</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 4v16m8-8H4" />
                    </svg>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>



      {/* Faculty Section */}
      <FacultySection/>

      {/* Success Stories Section */}
      <SuccessStoriesSection/>


      {/* Trusted Patners Section */}
      <PartnerBrands/>


      {/* Contact Form Section */}
      <ReachOutForm/>
    </div>
  );
};

export default Home;
