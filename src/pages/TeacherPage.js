import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { BASE_URL } from '../constants/Url';
import { useTranslation } from 'react-i18next';

const TeacherPage = () => {
    const { t } = useTranslation();
    const teachers = [
        {
            name: "Kong Kon",
            title: t('Instructor'),
            image: '/about-us/Teacher5.jpg',
            social: [FaFacebookF, FaTwitter, FaLinkedinIn],
        },
        {
            name: "Morn Chanda",
            title: t('Instructor'),
            image: '/about-us/Teacher4.jpg',
            social: [FaFacebookF, FaTwitter, FaLinkedinIn],
        },
        {
            name: 'Chham Dararaksmey',
            title: t('Lecturer'),
            image: '/about-us/Teacher.jpg', // Replace with actual image
            social: [FaFacebookF, FaTwitter, FaLinkedinIn],
        },
        {
            name: 'Chham Pichmaly',
            title: t('Lecturer'),
            image: '/about-us/Teacher1.jpg',
            social: [FaFacebookF, FaTwitter, FaLinkedinIn],
        },
        {
            name: 'Chham Kanika',
            title: t('Lecturer'),
            image: '/about-us/Teacher2.jpg',
            social: [FaFacebookF, FaTwitter, FaLinkedinIn],
        },
        {
            name: "Chham Daravituro",
            title: t('Lecturer'),
            image: '/about-us/Teacher3.jpg',
            social: [FaFacebookF, FaTwitter, FaLinkedinIn],
        },
    ];

    return (
        <div style={{ padding: "40px 0px" }}>
            <div className="p-3">
                {/* Section Title */}
                <div className="esi-std-container pb-5">
                    <div className="esi-content-title">
                        {t("Our Teachers")}
                        <div className="esi-secondary-line"></div>
                    </div>

                    {/* Teacher Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                        {teachers.map((teacher, index) => (
                            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
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
                                    <p className="text-gray-600">{teacher.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeacherPage;
