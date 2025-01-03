import { Carousel } from 'antd'
import React from 'react'
import { BASE_URL } from '../constants/Url'
import { useTranslation } from 'react-i18next';
import BeautyIcon from '../assets/icons/Beauty';
import CleaningIcon from '../assets/icons/Cleaning';
import MenSalonIcon from '../assets/icons/MenSalon';
import Features from '../components/Features';
import Teachers from '../components/Teachers';
import SchoolEvents from '../components/SchoolEvents';
import SchoolCommunity from '../components/SchoolCommunity';
import Gallery from '../components/Gallery';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div className='w-full'>
      <Carousel className='w-full esi-carousel-banner' draggable dots pauseOnDotsHover pauseOnHover autoplay>
        <img className='esi-banner' src={BASE_URL + "about-us/Banner.png"} alt='Carousel-Image-1.png' />
        <img className='esi-banner' src={BASE_URL + "about-us/Banner1.png"} alt='Carousel-Image-2.png' />
        <img className='esi-banner' src={BASE_URL + "about-us/Banner2.jpg"} alt='Carousel-Image-3.png' />
      </Carousel>
      <Features />
      <div className='esi-white-space'></div>

      <div className='esi-std-container'>

        {/* about us */}
        <div className='md:grid grid-cols-5 gap-3 flex flex-col-reverse'>
          <div className='max-w-[640px] pt-5 pb-5 sm:pb-10 col-span-3 flex flex-col gap-3'>
            <div className='esi-content-title'>
              {t("About School")}
              <div className='esi-secondary-line'></div>
            </div>

            <div className='flex flex-col gap-4 mt-3'>
              <div className='esi-content' style={{ lineHeight: 2 }}>{t("iNiLabs School is an independent, non-governmental organisation, established to provide high-quality education to local and expatriate communities in Bangladesh and United State of America. iNiLabs School is an independent, non-governmental organisation, established to provide high-quality education to local and expatriate communities in Bangladesh and United State of America.")}</div>
            </div>
            <div className="text-start mt-10">
              <Link to="/about" className="px-6 py-3 text-white text-lg font-semibold rounded-lg shadow hover:bg-#e50a47-600 transition duration-300" style={{ backgroundColor: '#e50a47' }}>
                {t("Learn More")}
              </Link>
            </div>
          </div>
          <div className='col-span-2'>
            <img src={BASE_URL + "/about-us/home.jpg"} className='esi-image' alt='School' />
          </div>
        </div>

        <div className='esi-white-space'></div>

        <div className='md:grid grid-cols-5 gap-3 flex flex-col'>
          <div className='col-span-2'>
            <img src={BASE_URL + "/about-us/What We Do.jpg"} className='esi-image' alt='ESI What we do' />
          </div>
          <div className='max-w-[640px] pt-5 px-0 sm:px-[70px] pb-0 sm:pb-10 col-span-3 flex flex-col gap-3'>
            <div className='esi-content-title'>
              {t("From the Principle")}
              <div className='esi-secondary-line'></div>
            </div>

            <div className='esi-content mt-3 mb-3' style={{ lineHeight: 2 }}>{t("““iNiLabs School is a welcoming Catholic community renowned for its integrity and creative learning approaches that bring out the best in boys. Our rich Salesian charism underpinned by the educational principles of founder, St John Bosco, provides the foun”")}</div>

            <div className='mb-0 mt-auto flex justify-between'>
              <div className='flex flex-col gap-3 items-center'>
                <BeautyIcon className='esi-icons' color='#CABDFF' backgroundColor="#2C2B46" />
                <div className='esi-icons-content'>{t("HAIR-NEWS")}</div>
              </div>

              <div className='flex flex-col gap-3 items-center'>
                <MenSalonIcon className='esi-icons' color="#AFC6FF" backgroundColor="#2C2B46" />
                <div className='esi-icons-content'>{t("TRENDS")}</div>
              </div>

              <div className='flex flex-col gap-3 items-center'>
                <CleaningIcon className='esi-icons' color="#FFD88D" backgroundColor="#2C2B46" />
                <div className='esi-icons-content'>{t("EDUCATION")}</div>
              </div>
            </div>
          </div>
        </div>

        <div className='esi-white-space'></div>
      </div>
      <Teachers />
      <SchoolEvents />
      <SchoolCommunity />
      <Gallery />
    </div>
  )
}
