import React from "react";
import { Layout, Typography, Divider, Breadcrumb } from "antd";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
const { Content } = Layout;
const { Title, Paragraph } = Typography;

const PrivacyPolicyPage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    return (
        <Layout style={{ background: "#fff", }}>
            <div style={{ padding: "40px 0px" }}>
                <div className="esi-std-container pb-5">
                    <Content>
                        <Breadcrumb style={{ marginBottom: "20px" }}>
                            <Breadcrumb.Item><span style={{ color: "#e50a47", cursor: "pointer", fontSize:"1rem" }} onClick={() => navigate('/')}>{t("Home")}</span></Breadcrumb.Item>
                            <Breadcrumb.Item><span style={{fontSize:"1rem"}}>{t("Privacy Policy")}</span></Breadcrumb.Item>
                        </Breadcrumb>

                        <div
                            style={{
                                padding: "30px",
                                borderRadius: "8px",
                            }}
                        >
                            {/* Page Title */}
                            <p level={2} style={{ color: "#e50a47", textAlign: "center", fontSize:"30px", fontWeight:600 }}>
                                {t("Privacy Policy")}
                            </p>

                            {/* Section Divider */}
                            <Divider style={{ borderColor: "#e50a47" }} />

                            {/* Privacy Policy Content */}
                            <Typography>
                                <Paragraph>
                                    The protection and security of your data is one of our main priorities. We want to inform you about the
                                    data you provide when visiting the site <strong>www.school.edu.kh</strong>, and how we collect, process, and use it.
                                </Paragraph>

                                <Paragraph>
                                    We collect, process, and use the personal data of visitors to our site to improve the usability,
                                    efficiency, and security of our website, thereby providing visitors with the best experience.
                                </Paragraph>

                                <Title level={4}>Purpose of Data Collection</Title>
                                <Paragraph>
                                    We collect, process, and store your data to process your requests. Whether you are interested in a vacancy
                                    at School Express, need software services, or wish to contact us, we ensure that the information provided is handled securely.
                                </Paragraph>

                                <Paragraph>
                                    <strong>1. Your Information That We Can Collect, Process, and Use</strong>
                                </Paragraph>
                                <ul>
                                    <li>
                                        <Paragraph>
                                            School Express does not collect any personal data (name/address/telephone/email) without your permission and
                                            does not require such information to access its website.
                                        </Paragraph>
                                    </li>
                                    <li>
                                        <Paragraph>
                                            When you fill out a contact form, you agree to allow School Express to collect and process the following data:
                                            <ul>
                                                <li>Full name, email address, and phone number</li>
                                                <li>Reason for your request</li>
                                            </ul>
                                        </Paragraph>
                                    </li>
                                </ul>

                                <Title level={4}>2. Use of Cookies and Web Server Data</Title>
                                <Paragraph>
                                    As you browse the website, some non-personal information may be passively collected. School Express may collect
                                    information about your computer and internet connection, including your IP address, operating system, and browser type.
                                </Paragraph>

                                <Title level={4}>Transfer of Data to Third Parties</Title>
                                <Paragraph>
                                    All data collected on this website are emailed only to the relevant department of School Express. The data you provide
                                    through the contact form or email are shared with third parties only if you consent. By submitting forms on this website,
                                    you agree that we may transfer this information to third parties for the completion of tasks related to processing your
                                    request.
                                </Paragraph>
                            </Typography>
                        </div>
                    </Content>
                </div>
            </div>
        </Layout>
    );
};

export default PrivacyPolicyPage;
