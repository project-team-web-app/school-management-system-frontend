import React from 'react';
import { Row, Col, Button } from 'antd';
import { FacebookFilled, TwitterSquareFilled, LinkedinFilled, YoutubeFilled, GooglePlusSquareFilled } from '@ant-design/icons';
import { BASE_URL } from '../constants/Url';
import { useTranslation } from 'react-i18next';

const SchoolCommunity = () => {
  const { t } = useTranslation();
  const community = {
    image: "/about-us/social.jpg", // Replace with actual image path
  };
  return (
    <div
      style={{
        backgroundImage: `url(${BASE_URL + community.image})`, // Replace with your background image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '80px 20px',
        color: '#fff',
        textAlign: 'center',
        position: 'relative',
        marginTop: "60px"
      }}
    >
      {/* Orange overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: "linear-gradient(rgba(241, 97, 138, 0.13), rgba(229, 10, 71, 0.68))",
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '16px' }}>{t("The School Community")}</h2>
        <p style={{ fontSize: '18px', marginBottom: '40px' }}>{t("Share your school pride with the world!")}</p>

        {/* Social Icons */}
        <Row justify="center" gutter={16}>
          <Col>
            <Button
              shape="circle"
              size="large"
              icon={<FacebookFilled />}
              style={{ backgroundColor: '#4267B2', color: '#fff', fontSize: '20px' }}
            />
          </Col>
          <Col>
            <Button
              shape="circle"
              size="large"
              icon={<TwitterSquareFilled />}
              style={{ backgroundColor: '#1DA1F2', color: '#fff', fontSize: '20px' }}
            />
          </Col>
          <Col>
            <Button
              shape="circle"
              size="large"
              icon={<LinkedinFilled />}
              style={{ backgroundColor: '#0077B5', color: '#fff', fontSize: '20px' }}
            />
          </Col>
          <Col>
            <Button
              shape="circle"
              size="large"
              icon={<YoutubeFilled />}
              style={{ backgroundColor: '#FF0000', color: '#fff', fontSize: '20px' }}
            />
          </Col>
          <Col>
            <Button
              shape="circle"
              size="large"
              icon={<GooglePlusSquareFilled />}
              style={{ backgroundColor: '#DB4437', color: '#fff', fontSize: '20px' }}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SchoolCommunity;
