import React from "react";
import { Layout, Row, Col, Form, Input, Button, Typography } from "antd";
import { useTranslation } from "react-i18next";

const { Content } = Layout;
const { Text } = Typography;

const ContactPage = () => {
    const { t } = useTranslation();
    const handleSubmit = (values) => {
        console.log("Form values:", values);
    };

    return (
        <Layout style={{ backgroundColor: "white" }}>
            <div style={{ padding: "40px 0px" }}>
                <div className="esi-std-container pb-5">
                    <Content>
                        {/* Contact Section */}
                        <Row
                            gutter={[16, 16]}
                            style={{
                                backgroundColor: "#fff",
                                padding: "30px",
                                borderRadius: "8px",
                                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                            }}
                        >
                            <Col xs={24} md={12}>
                                <div className="esi-content-title mb-5">
                                    {t("Contact")}
                                    <div className="esi-secondary-line"></div>
                                </div>
                                <p style={{ fontSize: "1rem", lineHeight: 2 }}>{t("Our new campus in Phnom Penh is located in the prestigious and residentially exclusive Phnom Penh district, home to more than 700 students.")}</p>
                                <div style={{ marginTop: "20px" }}>
                                    <p>
                                        <Text strong>📍 {t("Address")}:</Text> Street 271, Phnom Penh, Cambodia,
                                    </p>
                                    <p>
                                        <Text strong>📞 {t("Phone")}:</Text> +855 93 668 718
                                    </p>
                                    <p>
                                        <Text strong>📧 {t("Email")}:</Text> dararaksmey@gmail.com
                                    </p>
                                </div>
                            </Col>
                            <Col xs={24} md={12}>
                                {/* Google Map Embed */}
                                <iframe
                                    title="Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.838217695455!2d104.90401671535444!3d11.543374547831353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109510f4ecf0f03%3A0x3e9d08aa40c7e03!2sStreet%20271%2C%20Phnom%20Penh%2C%20Cambodia!5e0!3m2!1sen!2skh!4v1700000000000!5m2!1sen!2skh"
                                    width="100%"
                                    height="250px"
                                    style={{ border: "0", borderRadius: "8px" }}
                                    allowFullScreen=""
                                    loading="lazy"
                                ></iframe>
                            </Col>
                        </Row>

                        {/* Message Us Section */}
                        <div
                            style={{
                                marginTop: "40px",
                                backgroundColor: "#fff",
                                padding: "30px",
                                borderRadius: "8px",
                                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                            }}
                        >
                            <p level={3} style={{ color: "#e50a47", fontSize: "24px" }}>
                                {t("Message Us")}
                            </p>
                            <Form
                                layout="vertical"
                                onFinish={handleSubmit}
                                style={{ marginTop: "20px" }}
                            >
                                <Row gutter={16}>
                                    <Col xs={24} md={12}>
                                        <Form.Item
                                            label={t("Name")}
                                            name="name"
                                            rules={[{ required: true, message: t("Enter your name") }]}
                                        >
                                            <Input size="large" placeholder={t("Enter your name")} />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} md={12}>
                                        <Form.Item
                                            label={t("Email")}
                                            name="email"
                                            rules={[
                                                { required: true, message: t("Enter your email") },
                                                { type: "email", message: t("Enter your email") },
                                            ]}
                                        >
                                            <Input size="large" placeholder={t("Enter your email")} />
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Form.Item
                                    label={t("Subject")}
                                    name="subject"
                                    rules={[
                                        { required: true, message: t("Enter the subject") },
                                    ]}
                                >
                                    <Input size="large" placeholder={t("Enter the subject")} />
                                </Form.Item>
                                <Form.Item
                                    label={t("Message")}
                                    name="message"
                                    rules={[
                                        { required: true, message: t("Enter your message") },
                                    ]}
                                >
                                    <Input.TextArea
                                        rows={5}
                                        placeholder={t("Enter your message")}
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        size="large"
                                        style={{
                                            backgroundColor: "#e50a47",
                                            borderColor: "#e50a47",
                                            marginTop:"1rem"
                                        }}
                                    >
                                        {t("Send Message")}
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </Content>
                </div>
            </div>
        </Layout>
    );
};

export default ContactPage;
