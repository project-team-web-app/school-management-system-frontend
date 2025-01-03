import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constants/Url";
import { schoolGalleryData } from "../constants/TempData";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

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

const Gallery = () => {
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

    return (
        <div className="esi-std-container pt-6 pb-6" style={{ paddingTop: "60px", paddingBottom: "60px" }}>
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                <div className="esi-content-title">
                    {t("School’s Gallery")}
                    <div className="esi-secondary-line"></div>
                </div>
                <Link to="/gallery" style={{ color: "#e50a47", fontWeight: "bold", textDecoration: "none" }}>
                    {t("See More")} →
                </Link>
            </div>

            {/* Gallery Grid */}
            <div
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
                            alt={item.name} // Ensure "item.name" doesn't contain redundant words like 'image' or 'photo'
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
    );
};

export default Gallery;
