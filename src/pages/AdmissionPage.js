import React from "react";
import { Layout, Row, Col, Form, Input, Button, Select, DatePicker, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const { Content } = Layout;

const AdmissionPage = () => {
    const { t } = useTranslation();
    const handleResultSubmit = (values) => {
        console.log("Get Result values:", values);
    };

    const handleApplicationSubmit = (values) => {
        console.log("Application Form values:", values);
    };

    // upload picture
    const props = {
        action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
        listType: 'picture',
        beforeUpload(file) {
          return new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
              const img = document.createElement('img');
              img.src = reader.result;
              img.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = img.naturalWidth;
                canvas.height = img.naturalHeight;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);
                ctx.fillStyle = 'red';
                ctx.textBaseline = 'middle';
                ctx.font = '33px Arial';
                ctx.fillText('Ant Design', 20, 20);
                canvas.toBlob((result) => resolve(result));
              };
            };
          });
        },
      };

    // upload document
    const propNews = {
        action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload', // Replace with your upload API endpoint
        accept: '.pdf,.doc,.docx', // Accept only PDF and Word documents
        beforeUpload(file) {
          return new Promise((resolve) => {
            // Perform any file validations or transformations if needed
            const isAllowedType = file.type === 'application/pdf' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document';
            if (!isAllowedType) {
              alert('You can only upload PDF or DOCX files!');
              return;
            }
            resolve(file); // Proceed with the upload
          });
        },
        maxCount: 1, // Allow only one file at a time
      };

    return (
        <Layout>
            <div style={{ padding: "40px 0px", backgroundColor:"white" }}>
                <div className="esi-std-container pb-5">
                    <Content>
                        <div className="esi-content-title mb-5">
                            {t("Admission")}
                            <div className="esi-secondary-line"></div>
                        </div>
                        <p style={{fontSize:"16px"}}>
                            {t("If you have any questions, please don't hesitate to get in touch via")}
                        </p>
                        <p style={{fontSize:"16px"}}><span style={{fontWeight:600}}>+855 93 668 718</span> or <span style={{fontWeight:600}}>dararaksmey@gmail.com</span></p>

                        {/* Get Result Section */}
                        <div
                            style={{
                                marginTop: "20px",
                                backgroundColor: "#fff",
                                padding: "30px",
                                borderRadius: "8px",
                                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                            }}
                        >
                            <p level={3} style={{ color: "#e50a47", fontSize:"24px", fontWeight:600 }}>
                                {t("Get Result")}
                            </p>
                            <Form layout="vertical" onFinish={handleResultSubmit}>
                                <Row gutter={16}>
                                    <Col xs={24} md={12}>
                                        <Form.Item
                                            label={t("Admission ID")}
                                            name="admissionId"
                                            rules={[
                                                { required: true, message: t("Enter Admission ID") },
                                            ]}
                                        >
                                            <Input size="large" placeholder={t("Enter Admission ID")} />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} md={12}>
                                        <Form.Item
                                            label={t("Phone No")}
                                            name="phone"
                                            rules={[
                                                { required: true, message: t("Enter Phone Number") },
                                            ]}
                                        >
                                            <Input size="large" placeholder={t("Enter Phone Number")} />
                                        </Form.Item>
                                    </Col>
                                </Row>
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
                                        {t("Submit")}
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>

                        {/* Apply as a Student Section */}
                        <div
                            style={{
                                marginTop: "40px",
                                backgroundColor: "#fff",
                                padding: "30px",
                                borderRadius: "8px",
                                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                            }}
                        >
                            <p level={3} style={{ color: "#e50a47", fontSize:"24px", fontWeight:600 }}>
                                {t("Apply as a Student")}
                            </p>
                            <Form layout="vertical" onFinish={handleApplicationSubmit}>
                                <Row gutter={16}>
                                    <Col xs={24} md={12}>
                                        <Form.Item
                                            label={t("Full Name")}
                                            name="fullName"
                                            rules={[
                                                { required: true, message: t("Enter Full Name") },
                                            ]}
                                        >
                                            <Input size="large" placeholder={t("Enter Full Name")} />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} md={12}>
                                        <Form.Item
                                            label={t("Apply Class")}
                                            name="applyClass"
                                            rules={[
                                                { required: true, message: t("Select Class") },
                                            ]}
                                        >
                                            <Select placeholder={t("Select Class")} size="large">
                                                <Select.Option value="One">One</Select.Option>
                                                <Select.Option value="Two">Two</Select.Option>
                                                <Select.Option value="Three">Three</Select.Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} md={12}>
                                        <Form.Item
                                            label={t("Date of Birth")}
                                            name="dob"
                                            rules={[
                                                { required: true, message: t("Select your date of birth") },
                                            ]}
                                        >
                                            <DatePicker
                                                size="large"
                                                placeholder={t("Select your date of birth")}
                                                style={{ width: "100%" }}
                                                format={{
                                                    format: 'YYYY-MM-DD',
                                                    type: 'mask',
                                                }}
                                            />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} md={12}>
                                        <Form.Item
                                            label={t("Religion")}
                                            name="religion"
                                            rules={[
                                                { required: true, message: t("Enter Religion") },
                                            ]}
                                        >
                                            <Input size="large" placeholder={t("Enter Religion")} />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} md={12}>
                                        <Form.Item
                                            label={t("Gender")}
                                            name="gender"
                                            rules={[
                                                { required: true, message: t("Select Gender") },
                                            ]}
                                        >
                                            <Select placeholder={t("Select Gender")} size="large">
                                                <Select.Option value="Male">{t("Male")}</Select.Option>
                                                <Select.Option value="Female">{t("Female")}</Select.Option>
                                            </Select>
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} md={12}>
                                        <Form.Item
                                            label={t("Phone")}
                                            name="phone"
                                            rules={[
                                                { required: true, message: t("Enter Phone Number")},
                                            ]}
                                        >
                                            <Input size="large" placeholder={t("Enter Phone Number")} />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} md={12}>
                                        <Form.Item
                                            label={t("Email")}
                                            name="email"
                                            rules={[
                                                { required: true, message: t("Enter your email") },
                                                { type: "email", message: t("Please enter a valid email") },
                                            ]}
                                        >
                                            <Input size="large" placeholder={t("Enter your email")} />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} md={12}>
                                        <Form.Item
                                            label={t("Country")}
                                            name="country"
                                            rules={[
                                                { required: true, message: t("Enter Country") },
                                            ]}
                                        >
                                            <Input size="large" placeholder={t("Enter Country") }/>
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} md={12}>
                                        <Form.Item
                                            label={t("Address")}
                                            name="address"
                                            rules={[
                                                { required: true, message: t("Enter Address") },
                                            ]}
                                        >
                                            <Input size="large" placeholder={t("Enter Address")} />
                                        </Form.Item>
                                    </Col>
                                    <Col xs={24} md={12}>
                                        <Form.Item
                                            label={t("Photo")}
                                            name="photo"
                                            // valuePropName="fileList"
                                            rules={[
                                                { required: true, message: t("Please upload a photo" )},
                                            ]}
                                        >
                                            <Upload {...props} maxCount={1}>
                                                <Button size="large" icon={<UploadOutlined />}>{t("Upload Photo")}</Button>
                                            </Upload>
                                        </Form.Item>
                                    </Col>
                                    <Col xs={12}>
                                        <Form.Item
                                            label={t("Upload Document")}
                                            name="document"
                                            // valuePropName="fileList"
                                            rules={[
                                                { required: true, message: t("Please upload a document") },
                                            ]}
                                        >
                                            <Upload {...propNews} maxCount={1}>
                                                <Button size="large" icon={<UploadOutlined />}>{t("Upload Document")}</Button>
                                            </Upload>
                                        </Form.Item>
                                    </Col>
                                </Row>
                                <Form.Item>
                                    <Button
                                        type="primary"
                                        htmlType="submit"
                                        style={{
                                            backgroundColor: "#e50a47",
                                            borderColor: "#e50a47",
                                            marginTop:"1rem"
                                        }}
                                        size="large"
                                    >
                                        {t("Apply")}
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

export default AdmissionPage;
