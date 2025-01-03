import React from "react";
import { Row, Col, Card } from "antd";
import "antd/dist/reset.css";
import { BASE_URL } from "../constants/Url";
import { useTranslation } from "react-i18next";

const AboutSchoolPage = () => {
    const { t } = useTranslation();
    return (
        <div style={{ padding: "40px 0px" }}>
            {/* About School Section */}
            <div className='esi-std-container'>
                <div className='md:grid grid-cols-5 gap-3 flex flex-col-reverse'>
                    <div className='max-w-[640px] pt-5 pb-5 sm:pb-10 col-span-3 flex flex-col gap-3'>
                        <div className='esi-content-title'>
                            {t("About School")}
                            <div className='esi-secondary-line'></div>
                        </div>
                        <div className='esi-content-title mt-6'>
                            {t("School Management System")}
                        </div>
                        <div className='flex flex-col gap-4 mt-3'>
                            <div className='esi-content' style={{ lineHeight: 2 }}>{t("A School Management System (SMS) is a comprehensive software solution designed to streamline and automate various administrative, academic, and financial tasks within educational institutions. It is a centralized platform that integrates multiple functions, enabling efficient communication, data management, and decision-making processes for administrators, teachers, students, and parents.")}</div>
                        </div>
                    </div>
                    <div className='col-span-2'>
                        <img src={BASE_URL + "/about-us/About1.jpg"} className='esi-image' alt='School' />
                    </div>
                </div>
            </div>
            {/* Our History Section */}
            <div style={{ marginTop: "60px", background: "#222", color: "#fff", padding: "40px" }}>
                <div className="esi-std-container">
                    <div className='esi-content-title'>
                        {t("Our History")}
                        <div className='esi-secondary-line'></div>
                    </div>
                    <Row gutter={[32, 32]}>
                        <Col xs={24} md={8}>
                            <Card style={{ backgroundColor: "transparent", border: "none" }}>
                                <p level={4} style={{ color: "#e0e0e0", fontSize: "1.2rem" }}>{t("Origin")}</p>
                                <p style={{ color: "#ccc", fontSize: "1rem" }}>
                                    iNiLabs School is a fully accredited, independent, international school in Dhaka, Bangladesh. Serving families from Dhaka's local and international communities, we successfully deliver a rigorous iNiLabs curriculum program for students from Early Childhood.
                                </p>
                            </Card>
                        </Col>
                        <Col xs={24} md={8}>
                            <Card style={{ backgroundColor: "transparent", border: "none" }}>
                                <p level={4} style={{ color: "#e0e0e0", fontSize: "1.2rem" }}>{t("Campus")}</p>
                                <p style={{ color: "#ccc", fontSize: "1rem" }}>
                                    iNiLabs School is a fully accredited, independent, international school in Dhaka, Bangladesh. Serving families from Dhaka's local and international communities, we successfully deliver a rigorous iNiLabs curriculum program for students from Early Childhood.
                                </p>
                            </Card>
                        </Col>
                        <Col xs={24} md={8}>
                            <Card style={{ backgroundColor: "transparent", border: "none" }}>
                                <p level={4} style={{ color: "#e0e0e0", fontSize: "1.2rem" }}>{t("Success")}</p>
                                <p style={{ color: "#ccc", fontSize: "1rem" }}>
                                    We achieve these goals through a challenging academic program enriched by a broad and highly diverse extra-curricular program, visual and performing arts, and extensive sports programs.
                                </p>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>

            {/* Our Vision Section */}
            <div style={{ padding: "40px 00px", marginTop: "40px" }}>
                <Row justify="center" className="esi-std-container">
                    <Col xs={24} md={24}>
                        <Card style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderRadius: "8px" }}>
                            <div className='esi-content-title'>
                                {t("Our Vision")}
                                <div className='esi-secondary-line'></div>
                            </div>
                            <p className="mt-4" style={{ fontSize: "1rem", lineHeight: 2 }}>
                                {t("Our vision is to nurture and empower students to reach their fullest potential and become responsible, innovative, and open-minded global citizens. We aim to create a transformative learning environment that fosters intellectual curiosity, critical thinking, creativity, and ethical values.")}
                            </p>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default AboutSchoolPage;




