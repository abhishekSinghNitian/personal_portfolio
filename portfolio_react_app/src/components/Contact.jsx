import React, { useState } from "react";
import { FaInstagramSquare, FaFacebookSquare, FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    alert("Form Submitted!");
    setFormData({
      name: "",
      email: "",
      contact: "",
      message: "",
    });
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 py-12 px-6 sm:px-8 lg:px-16">
        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-extrabold mb-8 text-center text-gray-800">
            Contact Me
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
              />
            </div>

            
            <div className="mb-6">
              <label
                htmlFor="contact"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Contact No.
              </label>
              <input
                type="tel"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-black mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-black"
                rows="4"
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-indigo-600 text-white font-semibold py-2 px-6 rounded-md hover:bg-indigo-700 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="container contact">
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="" className="items">
            <FaInstagramSquare className="icons" />
          </a>
          <a href="" className="items">
            <FaFacebookSquare className="icons" />
          </a>
          <a
            href="https://www.linkedin.com/in/abhishek-kumar-singh-687924247/"
            className="items"
          >
            <FaLinkedin className="icons" />
          </a>
          <a href="https://github.com/abhishekSinghNitian" className="items">
            <FaGithub className="icons" />
          </a>
          {/* <a href="" className="items">
            <IoIosMail className="icons" />
          </a> */}
        </div>
      </div>
    </>
  );
}

export default Contact;
