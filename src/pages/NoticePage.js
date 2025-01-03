import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { noticeData } from '../constants/TempData';
import { showFormatDate } from '../utils/Utils';
const { Meta } = Card;

const NoticePage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [notice, setNotice] = useState([
        {
            title: "",
            date: "",
            description: "",
            code: "",
        }
    ]);

    useEffect(() => {
        fetchBlog();
    }, [])

    const fetchBlog = async () => {
        const res = noticeData;

        setNotice([...res])
    }
    const handleViewDetail = (item) => {
        navigate(`/notice/${item.code}`, { state: { notice: item } });
    }

    return (
        <div style={{ padding: "40px 0px" }}>
            <div className="p-3">
                {/* Section Title */}
                <div className="esi-std-container pb-5">
                    <div className="esi-content-title">
                        {t("Notice")}
                        <div className="esi-secondary-line"></div>
                    </div>

                    {/* Teacher Cards */}
                    <Row gutter={[24, 24]} className='mt-6'>
                        {notice.map((noti, index) => (
                            <Col key={index} xs={24} sm={12} md={8}>
                                <Card
                                    hoverable
                                >
                                    <Meta
                                        title={<h3 onClick={() => handleViewDetail(noti)} style={{ fontSize: '18px', fontWeight: 'bold', color: '#1d1d1d' }}>{noti.title}</h3>}
                                        description={
                                            <>
                                                <p className='esi-news-card-description max-w-[100%] line-clamp-4 sm:line-clamp-4'>{noti.description}</p>
                                                <p style={{ margin: '8px 0', fontSize: '14px', color: '#888' }}>{showFormatDate(noti.date)}</p>
                                            </>
                                        }
                                    />
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>

                {/* Call-to-Action Button */}
                <div className="text-center mt-10">
                    <button
                        className="px-6 py-3 text-white text-lg font-semibold rounded-lg shadow transition duration-300"
                        style={{ backgroundColor: '#e50a47' }}
                    >
                        {t("See More")}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NoticePage;
