import _ from 'lodash';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router'
import NotFoundPage from './NotFoundPage';
import "../styles/NewsDetailPage.css";
import { showFormatDate } from '../utils/Utils';
import { BASE_URL } from '../constants/Url';

export default function EventDetailPage() {
  const [data, setData] = useState({
    title: "",
    date: "",
    description: "",
    image: "",
    code: "",
  });
  const [notFound, setNotFound] = useState(false);
  const { code } = useParams();
  const location = useLocation();
  console.log("envn", location)

  useEffect(() => {
    const fetchData = () => {
      const param = { code: code }
      //fetch Data here

      if (!_.isEmpty(location) && !_.isEmpty(location.state) && !_.isEmpty(location.state.events)) {
        setData(location.state.events);
      } else {
        setNotFound(true);
      }
    }

    fetchData();
  }, [location, code])

  return (
    <div className='esi-std-container'>
      {
        notFound ?
          <NotFoundPage />
          :
          <div style={{ padding: "40px 0px" }}>
            <div className='esi-std-white-space flex flex-col gap-3'>
              {data.image && <img className='news-image' src={BASE_URL + data.image} alt={data.title} />}
              <h1 className='news-title'>{data && data.title}</h1>
              <div className='news-published-date'>{!_.isEmpty(data?.date) && showFormatDate(data.date)}</div>
              <div className='news-summary'>{data && data.description}</div>
              <div className='flex items-center justify-between'>
              </div>
            </div>
          </div>
      }

      <div className='esi-std-white-space'></div>
    </div>
  )
}
