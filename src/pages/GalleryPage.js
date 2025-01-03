import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../constants/Url';
import { schoolGalleryData } from '../constants/TempData';
import { useTranslation } from 'react-i18next';

const GalleryPage = () => {
    const { t } = useTranslation();
    const [blogMain, setBlogMain] = useState([
        {
            name: "",
            cover: "",
        }
    ]);
    const [modalImage, setModalImage] = useState(null); // To handle modal

    const fetchMainBlog = async () => {
        const res = schoolGalleryData;
        setBlogMain([...res]);
    };

    useEffect(() => {
        fetchMainBlog();
    }, []);

    const handleImageClick = (image) => {
        setModalImage(BASE_URL + image); // Set modal image source
    };

    const handleCloseModal = () => {
        setModalImage(null); // Close the modal
    };
    const ImageModal = ({ imageSrc, onClose }) => {
        return (
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1000
                }}
                onClick={onClose}
            >
                <img
                    src={imageSrc}
                    alt={imageSrc}
                    style={{ maxWidth: "90%", maxHeight: "90%" }} // Removed borderRadius
                />
            </div>
        );
    };

    return (
        <div style={{ padding: "40px 0px" }}>
            <div className="p-3">
                {/* Section Title */}
                <div className="esi-std-container pb-5">
                    <div className="esi-content-title">
                        {t("School’s Gallery")}
                        <div className="esi-secondary-line"></div>
                    </div>

                    {/* Teacher Cards */}
                    <div
                        className='mt-6'
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", // Responsive columns
                        }}
                    >
                        {blogMain.map((item, index) => (
                            <div
                                key={index}
                                className="esi-news-card"
                                style={{
                                    position: "relative",
                                    overflow: "hidden",
                                    cursor: "pointer",
                                }}
                                onClick={() => handleImageClick(item.cover)} // Open modal on click
                            >
                                <img
                                    className="esi-news-card-image"
                                    src={BASE_URL + item.cover}
                                    alt={item.name}
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        display: "block",
                                        transition: "transform 0.3s",
                                    }}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Modal for viewing images */}
                    {modalImage && <ImageModal imageSrc={modalImage} onClose={handleCloseModal} />}
                </div>
            </div>
        </div>
    );
};

export default GalleryPage;
