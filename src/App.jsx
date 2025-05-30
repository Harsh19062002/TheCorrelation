import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Courses from "./Pages/Courses";
import StudentLogin from "./Pages/StudentLogin";
import Contact from './Pages/Contact';
import Footer from './components/Footer';
import Blog from "./Pages/Blog";
import Career from "./Pages/Career";
import CourseDetail from "./Pages/CourseDetail";
import PostGraduation1 from './Pages/PostGraduation1';
import PostGraduation2 from './Pages/PostGraduation2'
import AppliedDataScience from "./Pages/AppliedDataScience";
import AppliedScience from "./Pages/AppliedScience";
import CareerAcceleration from "./Pages/CareerAcceleration";
import DataAnalytics from "./Pages/DataAnalytic";
import MachineLearning from "./Pages/MachineLearning";
import AdvancedAI from "./Pages/AdvancedAI";
import AdvancedMachineLearning from "./Pages/AdvancedMachineLearning";
 



const App = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<StudentLogin />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/career" element={<Career />} />
        <Route path="/courses/PostGraduation1" element={<PostGraduation1 />} />
        <Route path="/courses/PostGraduation2" element={<PostGraduation2 />} />
        <Route
          path="/courses/AppliedDataScience"
          element={<AppliedDataScience />}
        />
        <Route path="/courses/AdvancedAI" element={<AdvancedAI />} />
        <Route
          path="/courses/AdvancedMachineLearning"
          element={<AdvancedMachineLearning />}
        />

        <Route path="/courses/AppliedScience" element={<AppliedScience />} />
        <Route
          path="/courses/CareerAcceleration"
          element={<CareerAcceleration />}
        />
        <Route path="/courses/DataAnalytics" element={<DataAnalytics />} />
        <Route path="/courses/MachineLearning" element={<MachineLearning />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
