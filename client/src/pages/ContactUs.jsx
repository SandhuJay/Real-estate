import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';


const ContactUs = () => {
  return (
    <div className="bg-gradient-to-r from-purple-400 to-blue-500 min-h-screen flex justify-center items-center pt-16">
      <div className="container mx-auto">
      <div className="max-w-4xl mx-auto  grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div className="bg-blue-50 hover:bg-blue-100 shadow-md rounded-lg overflow-hidden p-6 flex items-center transition duration-300">
            <FaEnvelope className="text-blue-500 mr-4" size={24} />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Email Us</h3>
              <p className="text-gray-600">contact@realestateagency.com</p>
            </div>
          </div>
          <div className="bg-blue-50 hover:bg-blue-100 shadow-md rounded-lg overflow-hidden p-6 flex items-center transition duration-300">
            <FaPhoneAlt className="text-blue-500 mr-4" size={24} />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Call Us</h3>
              <p className="text-gray-600">+1 (123) 456-7890</p>
            </div>
          </div>
          </div> 
          <div className="bg-blue-50 hover:bg-blue-100 shadow-md rounded-lg overflow-hidden p-6 flex flex-col md:flex-row items-center justify-between transition duration-300 max-w-4xl mx-auto mt-8"><FaMapMarkerAlt className="text-blue-500 mr-4" size={24} />
  <div className="md:w-1/2 md:mr-6">
    <h3 className="text-lg font-semibold text-gray-800">Visit Us</h3>
    <p className="text-gray-600 mb-4">1234 Real Estate Avenue<br />City, State, ZIP</p>
  </div>
  <div className="md:w-1/2 mt-4 md:mt-0">
    <div className="bg-white hover:bg-gray-100 shadow-md rounded-lg overflow-hidden transition duration-300">
      <iframe
        className="w-full aspect-w-16 aspect-h-9"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28063937.131660763!2d93.01018305625001!3d30.837010039612252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1713894039326!5m2!1sen!2sin"
        style={{ border: 0}}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</div>
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-10">
          <div className="py-8 px-10">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">For More Enquiry</h2>
            <p className="text-gray-600 mb-6">Have questions or want to inquire about our services? Fill out the form below and we'll get back to you as soon as possible.</p>
            <form>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-600 mb-1">Name</label>
                <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your name" />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-600 mb-1">Email</label>
                <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your email" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-600 mb-1">Message</label>
                <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" placeholder="Enter your message"></textarea>
              </div>
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md transition duration-300">Send Message</button>
            </form>
          </div>
        </div>
      
         


      </div>
    </div>
  );
};

export default ContactUs;
