import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { Carousel } from 'antd';
import { BASE_URL } from '../constants/Url';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Teachers = () => {
    const { t } = useTranslation();
    const teachers = [
        {
            name: "Kong Kon",
            title: 'Instructor',
            image: '/about-us/Teacher5.jpg',
            social: [FaFacebookF, FaTwitter, FaLinkedinIn],
        },
        {
            name: "Morn Chanda",
            title: 'Instructor',
            image: '/about-us/Teacher4.jpg',
            social: [FaFacebookF, FaTwitter, FaLinkedinIn],
        },
        {
            name: 'Chham Dararaksmey',
            title: 'Lecturer',
            image: '/about-us/Teacher.jpg', // Replace with actual image
            social: [FaFacebookF, FaTwitter, FaLinkedinIn],
        },
        {
            name: 'Chham Pichmaly',
            title: 'Lecturer',
            image: '/about-us/Teacher1.jpg',
            social: [FaFacebookF, FaTwitter, FaLinkedinIn],
        },
        {
            name: 'Chham Kanika',
            title: 'Lecturer',
            image: '/about-us/Teacher2.jpg',
            social: [FaFacebookF, FaTwitter, FaLinkedinIn],
        },
        {
            name: "Chham Daravituro",
            title: 'Lecturer',
            image: '/about-us/Teacher3.jpg',
            social: [FaFacebookF, FaTwitter, FaLinkedinIn],
        },
    ];

    return (
        <div className="p-6 bg-gray-100">
            {/* Section Title */}
            <div className="esi-std-container pb-5">
                <div className="esi-content-title">
                    {t("Our Teachers")}
                    <div className="esi-secondary-line"></div>
                </div>

                {/* Ant Design Carousel */}
                <Carousel
                    autoplay
                    dots={false}
                    slidesToShow={4}
                    draggable
                    responsive={[
                        { breakpoint: 640, settings: { slidesToShow: 1 } },
                        { breakpoint: 1024, settings: { slidesToShow: 4 } },
                    ]}
                >
                    {teachers.map((teacher, index) => (
                        <div key={index} className="pr-2 pl-2  pt-4 pb-4" style={{ paddingRight: "1rem" }}>
                            <div className="bg-white rounded-lg overflow-hidden transition-transform hover:scale-105">
                                {/* Teacher Image */}
                                <div className="relative group">
                                    <img
                                        src={BASE_URL + teacher.image}
                                        alt={teacher.name}
                                        className="w-full h-64 object-cover"
                                    />
                                    {teacher.social.length > 0 && (
                                        <div className="absolute inset-0 bg-pink-500 bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="flex space-x-4">
                                                {teacher.social.map((Icon, i) => (
                                                    <Icon
                                                        key={i}
                                                        className="text-white text-lg cursor-pointer hover:text-gray-300"
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Teacher Info */}
                                <div className="text-center p-4">
                                    <h3 className="text-xl font-semibold text-gray-800">{teacher.name}</h3>
                                    <p className="text-gray-600">{t(teacher.title)}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
            {/* Call-to-Action Button */}
            <div className="text-center mt-10 mb-10">
                <Link to="/teachers"
                    className="px-6 py-3 text-white text-lg font-semibold rounded-lg shadow transition duration-300"
                    style={{ backgroundColor: '#e50a47' }}
                >
                    {t("See Our All Certified Teachers")}
                </Link>
            </div>
        </div>
    );
};

export default Teachers;
