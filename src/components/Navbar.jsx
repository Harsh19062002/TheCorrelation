import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setCoursesDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleCoursesDropdown = () => {
    setCoursesDropdownOpen(!coursesDropdownOpen);
  };

  const activeStyle = "text-white border-b-2 border-white";
  const hoverStyle = "hover:text-white hover:shadow-lg hover:shadow-slate-500/20 transition-all duration-300";

  // Replace these with actual route paths for your individual pages
  const frontendLinks = [
    { label: "PostGraduation1", path: "/courses/PostGraduation1" },
    { label: "PostGraduation2", path: "/courses/PostGraduation2" },
  ];

  const backendLinks = [
    { label: "AppliedDataScience ", path: "/courses/AppliedDataScience" },
    { label: "MachineLearning ", path: "/courses/MachineLearning" },
    { label: "AppliedScience ", path: "/courses/AppliedScience" },
    {
      label: "AdvancedMachineLearning ",
      path: "/courses/AdvancedMachineLearning",
    },
    {
      label: "AdvancedArtificialIntelligence ",
      path: "/courses/AdvancedAI",
    },
  ];

  const devopsLinks = [
    { label: "Career Acceleration ", path: "/courses/CareerAcceleration" },
  ];

  return (
    <div className="w-full bg-slate-700 text-white shadow-md z-50 sticky top-0">
      <div className="navbar max-w-screen-xl mx-auto px-2 lg:px-8 relative flex items-center justify-between py-4">
        <div className="navbar-start pl-0">
          <NavLink to="/" className="text-xl font-bold">
            The Correlation
          </NavLink>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2">
          <ul className="hidden lg:flex space-x-8 items-center">
            <li>
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `${hoverStyle} ${isActive ? activeStyle : ""} py-1`
                }
              >
                Home
              </NavLink>
            </li>

            <li className="relative" ref={dropdownRef}>
              <button 
                onClick={toggleCoursesDropdown}
                className={`${hoverStyle} cursor-pointer py-1 ${coursesDropdownOpen ? activeStyle : ""}`}
              >
                Courses
              </button>

              {coursesDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 bg-slate-700 rounded shadow-lg p-4 flex space-x-8 text-white z-50 min-w-[20rem] max-w-[40rem] border border-slate-600">
                  <div>
                    <h3 className="font-bold mb-1">Post Graduation Program</h3>
                    <ul className="space-y-1">
                      {frontendLinks.map((item) => (
                        <li key={item.label}>
                          <NavLink 
                            to={item.path}
                            className={({ isActive }) =>
                              `${isActive ? "text-white font-medium border-b border-white" : "text-gray-300"} hover:text-white transition duration-300 block py-1`
                            }
                            onClick={() => setCoursesDropdownOpen(false)}
                          >
                            {item.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold mb-1">Certification courses</h3>
                    <ul className="space-y-1">
                      {backendLinks.map((item) => (
                        <li key={item.label}>
                          <NavLink 
                            to={item.path}
                            className={({ isActive }) =>
                              `${isActive ? "text-white font-medium border-b border-white" : "text-gray-300"} hover:text-white transition duration-300 block py-1`
                            }
                            onClick={() => setCoursesDropdownOpen(false)}
                          >
                            {item.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold mb-1">Career</h3>
                   
                    <ul className="space-y-1">
                      {devopsLinks.map((item) => (
                        <li key={item.label}>
                          <NavLink 
                            to={item.path}
                            className={({ isActive }) =>
                              `${isActive ? "text-white font-medium border-b border-white" : "text-gray-300"} hover:text-white transition duration-300 block py-1`
                            }
                            onClick={() => setCoursesDropdownOpen(false)}
                          >
                            {item.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </li>

            <li>
              <NavLink to="/blog" className={({ isActive }) => `${hoverStyle} ${isActive ? activeStyle : ""} py-1`}>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/career" className={({ isActive }) => `${hoverStyle} ${isActive ? activeStyle : ""} py-1`}>
                Career
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => `${hoverStyle} ${isActive ? activeStyle : ""} py-1`}>
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="hidden lg:flex">
          <NavLink
            to="/login"
            className={({ isActive }) => 
              `btn ${isActive ? "bg-slate-800" : "bg-slate-600"} hover:bg-slate-800 text-white border-none transition duration-300`
            }
          >
            Student Login
          </NavLink>
        </div>

        <div className="lg:hidden relative">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost text-white p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-5 p-2 shadow bg-slate-700 rounded-box w-64 text-white">
              <li><NavLink to="/" className={({ isActive }) => `${isActive ? "border-b border-white font-medium" : ""}`}>Home</NavLink></li>
              <li>
                <details>
                  <summary>Courses</summary>
                  <ul className="pl-4 mt-1 space-y-2">
                    {[["Frontend", frontendLinks], ["Backend", backendLinks], ["DevOps", devopsLinks]].map(([category, items]) => (
                      <li key={category}>
                        <details>
                          <summary>{category}</summary>
                          <ul className="pl-4 mt-1 space-y-1">
                            {items.map((item) => (
                              <li key={item.label}>
                                <NavLink to={item.path} onClick={() => setCoursesDropdownOpen(false)}>
                                  {item.label}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </details>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
              <li><NavLink to="/blog">Blog</NavLink></li>
              <li><NavLink to="/career">Career</NavLink></li>
              <li><NavLink to="/contact">Contact Us</NavLink></li>
              <li><NavLink to="/login">Student Login</NavLink></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
