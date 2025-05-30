import React from 'react';
import { toast, Toaster } from 'react-hot-toast';

const ReachOutForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    console.log('Form Submitted:', Object.fromEntries(data.entries()));
    toast.success("Thanks for reaching out! We’ll get back to you shortly.");
    form.reset();
  };

  return (
    <div>
      <Toaster position="top-center" reverseOrder={false} />
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Right: Guidance Text */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-4">
              Reach out ——
            </h2>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Still Confused? <br />
              Get Guidance Now!
            </h3>
            <p className="text-gray-600 text-lg">
              Book a counseling session now. Fill out our form to begin your journey toward clarity.
              Start taking steps to a brighter, clearer future today.
            </p>
          </div>

          {/* Left: Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-yellow-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition space-y-6 order-2 md:order-1"
          >
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-1 font-medium">
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                placeholder="E.g. John Doe"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 mb-1 font-medium">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                placeholder="E.g. john@doe.com"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-gray-700 mb-1 font-medium">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                placeholder="E.g. +1 3004005000"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ReachOutForm;
