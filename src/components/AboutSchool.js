import React from "react";
import { Row, Col, Typography, Card } from "antd";
import "antd/dist/reset.css";
import { BASE_URL } from "../constants/Url";
import { useTranslation } from "react-i18next";

const { Title, Paragraph } = Typography;

const AboutSchool = () => {
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
                            {t("iNiLabs School")}
                        </div>
                        <div className='flex flex-col gap-4 mt-3'>
                            <div className='esi-content' style={{ lineHeight: 2 }}>{t("iNiLabs School is an independent, non-governmental organisation, established to provide high-quality education to local and expatriate communities in Bangladesh and United State of America. iNiLabs School is an independent, non-governmental organisation, established to provide high-quality education to local and expatriate communities in Bangladesh and United State of America.")}</div>
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
                                <Title level={4} style={{ color: "#e0e0e0" }}>Origin</Title>
                                <Paragraph style={{ color: "#ccc" }}>
                                    iNiLabs School is a fully accredited, independent, international school in Dhaka, Bangladesh. Serving families from Dhaka's local and international communities, we successfully deliver a rigorous iNiLabs curriculum program for students from Early Childhood.
                                </Paragraph>
                            </Card>
                        </Col>
                        <Col xs={24} md={8}>
                            <Card style={{ backgroundColor: "transparent", border: "none" }}>
                                <Title level={4} style={{ color: "#e0e0e0" }}>Campus</Title>
                                <Paragraph style={{ color: "#ccc" }}>
                                    iNiLabs School is a fully accredited, independent, international school in Dhaka, Bangladesh. Serving families from Dhaka's local and international communities, we successfully deliver a rigorous iNiLabs curriculum program for students from Early Childhood.
                                </Paragraph>
                            </Card>
                        </Col>
                        <Col xs={24} md={8}>
                            <Card style={{ backgroundColor: "transparent", border: "none" }}>
                                <Title level={4} style={{ color: "#e0e0e0" }}>Success</Title>
                                <Paragraph style={{ color: "#ccc" }}>
                                    We achieve these goals through a challenging academic program enriched by a broad and highly diverse extra-curricular program, visual and performing arts, and extensive sports programs.
                                </Paragraph>
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
                            <Paragraph className="mt-4">
                                Our mission is to empower students to fulfill their potential as responsible, innovative, and open-minded global citizens through the development of high-quality academic skills and social competencies.
                            </Paragraph>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default AboutSchool;




