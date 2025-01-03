import { List } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import { BASE_URL } from '../constants/Url';
import { educationData } from '../constants/TempData';
import _ from 'lodash';
import VideoPlayIcon from '../assets/icons/VideoPlay';
import AppDownloadModal from '../components/AppDownloadModal';

export default function EducatePage() {
    const appDownloadRef = useRef();
    const [dataSource, setDataSource] = useState([
        {
            videoUrl: "",
            title: "",
            description: "",
            imageUrl: "",
        }
    ]);

    const fetchData = async () => {
        const res = educationData;

        setDataSource([...res]);
    }

    const handleOpenDownloadApp = (item) => {
        appDownloadRef.current?.showModal();
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className='esi-std-container esi-std-white-space'>
            <List
                className="mt-4"
                grid={{
                    gutter: { xs: 10, md: 20, lg: 30 },
                    xs: 1,
                    sm: 2,
                    md: 2,
                    lg: 3,
                    xl: 3,
                    xxl: 3,
                }}
                pagination={false}
                dataSource={dataSource}
                renderItem={(item) => (
                    <List.Item>
                        <div className='relative overflow-hidden'>
                            {
                                !_.isEmpty(item.videoUrl) &&
                                <div className='esi-education-icon-container'><VideoPlayIcon className='esi-video-icon' color='white' /></div>
                            }
                            <img className='esi-education-card-image' onClick={handleOpenDownloadApp} src={BASE_URL + item.imageUrl} alt={item.title} />
                        </div>
                        <div className='p-3 flex flex-col gap-2'>
                            <div className='esi-education-title line-clamp-1'>{item.title}</div>
                            <div className='esi-education-description line-clamp-2'>{item.description}</div>
                        </div>
                    </List.Item>
                )}
            ></List>

            <AppDownloadModal ref={appDownloadRef} />
        </div>
    )
}
