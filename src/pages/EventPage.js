import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../constants/Url';
import { Card, Col, Row } from 'antd';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import { eventsData } from '../constants/TempData';
import { showFormatDate } from '../utils/Utils';
const { Meta } = Card;

const EventPage = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [events, setEvent] = useState([
        {
            title: "",
            date: "",
            description: "",
            image: "",
            code: "",
        }
    ]);

    useEffect(() => {
        fetchBlog();
    }, [])

    const fetchBlog = async () => {
        const res = eventsData;

        setEvent([...res])
    }
    const handleViewDetail = (item) => {
        navigate(`/events/${item.code}`, { state: { events: item } });
    }

    return (
        <div style={{ padding: "40px 0px" }}>
            <div className="p-3">
                {/* Section Title */}
                <div className="esi-std-container pb-5">
                    <div className="esi-content-title">
                        {t("Events")}
                        <div className="esi-secondary-line"></div>
                    </div>

                    {/* Teacher Cards */}
                    <Row gutter={[24, 24]} className='mt-6'>
                        {events.map((event, index) => (
                            <Col key={index} xs={24} sm={12} md={8}>
                                <Card
                                    hoverable
                                    cover={<img alt={event.title} src={BASE_URL + event.image} style={{ height: '200px', objectFit: 'cover' }} />}
                                >
                                    <Meta
                                        title={<h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1d1d1d' }}>{event.title}</h3>}
                                        description={
                                            <>
                                                <p style={{ margin: '8px 0', fontSize: '14px', color: '#888' }}>{showFormatDate(event.date)}</p>
                                                <p className='esi-news-card-description max-w-[100%] line-clamp-2 sm:line-clamp-3'>{event.description}</p>
                                                <p onClick={() => handleViewDetail(event)} style={{ color: '#e50a47' }}>
                                                    {t("View Event")} →
                                                </p>
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

export default EventPage;
