import React from 'react';
import { FaGraduationCap, FaBook, FaPen, FaFileAlt } from 'react-icons/fa'; // Using react-icons

const Features = () => {
  return (
    <div className="bg-white-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        
        {/* Card 1 */}
        <div className="bg-indigo-900 text-white overflow-hidden shadow-lg hover:bg-indigo-800 transition duration-300 ease-in-out feature-card">
          <div className="p-6 text-center">
            <FaGraduationCap className="text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Education in English</h3>
            <p className="text-sm">
              Cambridge International Programmed and qualified native English's speaking teachers.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-orange-600 text-white overflow-hidden shadow-lg hover:bg-orange-500 transition duration-300 ease-in-out feature-card">
          <div className="p-6 text-center">
            <FaBook className="text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Education in English</h3>
            <p className="text-sm">
              Cambridge International Programmed and qualified native English's speaking teachers.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-indigo-900 text-white overflow-hidden shadow-lg hover:bg-indigo-800 transition duration-300 ease-in-out feature-card">
          <div className="p-6 text-center">
            <FaPen className="text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Education in English</h3>
            <p className="text-sm">
              Cambridge International Programmed and qualified native English's speaking teachers.
            </p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-orange-600 text-white overflow-hidden shadow-lg hover:bg-orange-500 transition duration-300 ease-in-out feature-card">
          <div className="p-6 text-center">
            <FaFileAlt className="text-4xl mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2">Education in English</h3>
            <p className="text-sm">
              Cambridge International Programmed and qualified native English's speaking teachers.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Features;
