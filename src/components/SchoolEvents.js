import React, { useEffect, useState } from 'react';
import { Row, Col, Card } from 'antd';
import { BASE_URL } from '../constants/Url';
import { useNavigate } from 'react-router';
import { eventsData } from '../constants/TempData';
import { showFormatDate } from '../utils/Utils';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const { Meta } = Card;

const SchoolEvents = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
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
        <div className='esi-std-container pt-5 pb-6' style={{ backgroundColor: 'white', paddingTop:"60px" }}>
            {/* Section Title */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div className="esi-content-title">
                    {t("School Events")}
                    <div className="esi-secondary-line"></div>
                </div>
                <Link to="/events" style={{ color: '#e50a47', fontWeight: 'bold', textDecoration: 'none' }}>
                    {t("View All Events")} →
                </Link>
            </div>

            {/* Events Grid */}
            <Row gutter={[24, 24]}>
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
                                        <p  onClick={() => handleViewDetail(event)}  style={{ color: '#e50a47' }}>
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
    );
};

export default SchoolEvents;
