import { List } from 'antd'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../constants/Url';
import { useNavigate } from 'react-router';
import { showFormatDate } from '../utils/Utils';
import { useTranslation } from 'react-i18next';
import { newsData } from '../constants/TempData';
import { Link } from 'react-router-dom';

export default function BlogPage() {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const [blogs, setBlogs] = useState([
        {
            cover: "",
            title: "",
            description: "",
            company: "",
            publishedDate: "",
        }
    ]);

    useEffect(() => {
        fetchBlog();
    }, [])

    const fetchBlog = async () => {
        const res = newsData;

        setBlogs([...res])
    }

    const handleViewDetail = (item) => {
        navigate(`/blog/${item.code}`, { state: { news: item } });
    }

    return (
        <div style={{ padding: "40px 0px" }}>
            <div className='esi-std-container'>
                <div className='esi-content-title'>
                    {t("Blog")}
                    <div className='esi-secondary-line'></div>
                </div>
                <div className='esi-std-white-space'>
                    <List
                        className="mt-4"
                        grid={{
                            gutter: { xs: 10, md: 20, lg: 30 },
                            xs: 1,
                            sm: 1,
                            md: 1,
                            lg: 2,
                            xl: 2,
                            xxl: 2,
                        }}
                        pagination={false}
                        dataSource={blogs}
                        renderItem={(item) => (
                            <List.Item>
                                <div className="grid grid-cols-7" onClick={() => handleViewDetail(item)}>
                                    <div className="col-span-3 overflow-hidden rounded-[0.5rem]">
                                        <img className="esi-sub-news-card-image" style={{ cursor: "pointer" }} src={`${BASE_URL}${item.cover}`} alt={item.fileName} />
                                    </div>
                                    <div className='col-span-4 px-3 flex flex-col justify-between'>
                                        <div className='flex flex-col gap-1'>
                                            <div className="esi-news-card-title max-w-[100%] line-clamp-2">{item.title}</div>
                                            <div className='esi-news-card-dob'>{showFormatDate(item.publishedDate)}</div>
                                            <div className="esi-news-card-description max-w-[100%] line-clamp-2 sm:line-clamp-3">{item.description}</div>
                                        </div>
                                    </div>
                                </div>
                            </List.Item>
                        )}
                    ></List>
                </div>
                <div className="text-center mt-10">
                    <Link to="#!"
                        className="px-6 py-3 text-white text-lg font-semibold rounded-lg shadow transition duration-300"
                        style={{ backgroundColor: '#e50a47' }}
                    >
                        {t("See More")}
                    </Link>
                </div>
                <div className='h-[40px]'></div>
            </div>
        </div>
    )
}
