import React, { useState } from "react";
import { useParams } from "react-router-dom";
import courseContent from "../courseContent";
import { toast, Toaster } from "react-hot-toast";
import { Player } from "@lottiefiles/react-lottie-player";
import "swiper/css";
import "swiper/css/pagination";
import Tools from "../components/Tools";
import CoursePriceSection from "../components/CoursePriceSection";
import PlacementOverview from "../components/PlacementOverview";
import Scholarship from "../components/Scholarship";

const CourseDetail = () => {
  const { subject } = useParams();
  const course = courseContent[subject];
  const [activeTab, setActiveTab] = useState("certificate");

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // Added missing showModal state here
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone } = formData;

    if (!name.trim() || !email.trim() || !phone.trim()) {
      toast.error("Please fill all the fields");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email");
      return;
    }

    setShowForm(false);
    toast.success("Brochure downloaded successfully!");

    setTimeout(() => {
      const brochureLink = course?.brochure || "/brochure.pdf";
      const link = document.createElement("a");
      link.href = brochureLink;
      link.download = brochureLink.split("/").pop();
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 300);

    setFormData({ name: "", email: "", phone: "" });
  };

  if (!course) {
    return (
      <p className="text-red-500 text-center mt-10 text-lg font-semibold">
        Course not found.
      </p>
    );
  }

  return (
    <div className="bg-orange-50 min-h-screen relative">
      <Toaster position="top-center" />

      {/* Hero Section */}
      <section className="px-4 py-12 md:px-12 lg:px-24 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <div className="space-y-4">
          <div className="flex gap-2">
            <span className="bg-orange-500 text-white px-3 py-1 text-sm rounded-full">
              Bestseller
            </span>
            <span className="bg-yellow-400 text-white px-3 py-1 text-sm rounded-full">
              Popular
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="bg-gradient-to-b from-orange-500 to-yellow-400 bg-clip-text text-transparent">
              {course.title}
            </span>
          </h2>

          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Program Overview
          </h3>

          <p className="text-gray-600">{course.description}</p>

          {/* Topics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {course.topics.map((topic, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow text-gray-800 font-medium"
              >
                ✅ {topic}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex gap-4 mt-6 flex-wrap">
            <a
              href={course.paymentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-sm font-medium transition-all"
            >
              Enroll Now
            </a>
            <button
              onClick={() => setShowForm(true)}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg text-sm font-medium transition-all"
            >
              Download Brochure
            </button>
          </div>
        </div>

        {/* Right */}
        <div>
          <img
            src={course.image}
            alt={course.title}
            className="w-full max-w-md mx-auto"
          />
        </div>
      </section>

      {/* Brochure Download Form Popup */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <form
            onSubmit={handleFormSubmit}
            className="bg-white w-[90%] max-w-md p-6 rounded-xl shadow-2xl space-y-4 relative"
          >
            <h3 className="text-xl font-semibold mb-4 text-orange-500">
              Download Brochure
            </h3>

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-800"
              >
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="E.g. John Doe"
                required
                className="w-full border border-yellow-400 text-black px-4 py-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-800"
              >
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="E.g. john@doe.com"
                required
                className="w-full border border-yellow-400 text-black px-4 py-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-800"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="E.g. +1 3004005000"
                required
                className="w-full border border-yellow-400 text-black px-4 py-2 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>

            <div className="flex justify-between items-center mt-4">
              <button
                type="submit"
                className="px-6 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition"
              >
                Submit
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="text-gray-600 hover:underline"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Scholarship Section */}
      <Scholarship />

      {/* Tools Section */}
      <Tools />

      {/* Placement Overview */}
      <PlacementOverview />

      {/* Course Price Section */}
      <CoursePriceSection />
    </div>
  );
};

export default CourseDetail;
