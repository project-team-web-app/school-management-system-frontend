import React, { useEffect, useRef } from 'react'
import { BASE_URL } from '../constants/Url'
import { Outlet, useLocation, useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import MenuDrawer from '../components/MenuDrawer';
import { connect } from 'react-redux';
import { IPAD, MOBILE, PC } from '../constants/ConstantsKey';
import { CHANGE_SCREEN } from '../global/ActionsPath';
import { Z_HEADER } from '../constants/ZIndex';
import { FloatButton } from 'antd';
import { FaArrowUp } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';
import SwitchLanguage from "../components/switchLanguages/SwitchLanguage";

function DefaultLayout(props) {
  const { responsive, changeScreen } = props;
  const { t } = useTranslation();
  const menuDrawer = useRef();
  const navigate = useNavigate();
  const location = useLocation();

  const listMenu = [
    {
      link: "/",
      label: t("Home"),
    },
    {
      link: "/about",
      label: t("About"),
    },
    {
      link: "/teachers",
      label: t("Teachers"),
    },
    {
      link: "/events",
      label: t("Events"),
    },
    {
      link: "/gallery",
      label: t("Gallery"),
    },
    {
      link: "/blog",
      label: t("Blog"),
    },
    {
      link: "/notice",
      label: t("Notice"),
    },
    {
      link: "/contact",
      label: t("Contact"),
    },
    {
      link: "/admission",
      label: t("Admission"),
    },
    {
      link: "/privacy-policy",
      label: t("Privacy Policy"),
    },
  ];

  useEffect(() => {
    //Follow Tailwind Responsive Structure
    const handleResize = () => {
      if (window.innerWidth && window.innerWidth <= 639) {
        if (responsive.screen !== MOBILE) {
          changeScreen(MOBILE);
        }
      } else if (window.innerWidth && window.innerWidth <= 1023) {
        if (responsive.screen !== IPAD) {
          changeScreen(IPAD);
        }
      } else {
        changeScreen(PC);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [responsive, changeScreen]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname])

  return (
    <div className='esi-container'>
      <div className={`esi-header`} style={{ zIndex: Z_HEADER }}>
        <div className='esi-std-container h-full flex justify-between items-center'>
          <div className='flex items-center'>
            <img alt='ESI-Logo' role='button' src={BASE_URL + "/logo.png"} onClick={() => { navigate("/") }} className='esi-logo' />
          </div>
          <div className='hidden sm:flex items-center justify-center gap-[2rem]'>
            {
              listMenu.map((item) => {
                return <Link to={item.link} key={item.link} className={`esi-menu ${item.className} ${location.pathname === item.link && "active"}`}>{item.label}</Link>
              })
            }
          </div>
          <div className='block sm:hidden'>
            <IoMdMenu className='w-[25px] h-[25px]' onClick={() => menuDrawer.current?.open()} />
          </div>
          <SwitchLanguage />
        </div>
      </div>
      <div className='esi-content'>
        <Outlet />
      </div>
      <div className='esi-footer'>
        <div className='esi-std-container h-full grid grid-cols-6 py-[30px]'>
          <div className='md:max-lg:pr-3 lg:max-w-[440px] col-span-6 md:col-span-3 lg:col-span-2 flex flex-col'>
            <div className='flex items-center max-sm:justify-center'>
              <img alt='ESI-Logo' role='button' onClick={() => { navigate("/") }} src={BASE_URL + "/logo.png"} className='esi-logo' />
            </div>
            <div>
              <div className='social-media max-sm:justify-center'>
                <Link target="_blank" to='#'><FaTwitter className='social-media-icon' /></Link>
                <Link target="_blank" to='#'><RiInstagramFill className='social-media-icon' /></Link>
                <Link target="_blank" to='#'><FaFacebook className='social-media-icon' /></Link>
                <Link target="_blank" to='#'><FaYoutube className='social-media-icon' /></Link>
              </div>
              <div className='footer-content' style={{lineHeight:1.8}}>
                {t("A School Management System (SMS) is a comprehensive software solution designed to streamline and automate various administrative, academic, and financial tasks within educational institutions. It is a centralized platform that integrates multiple functions, enabling efficient communication, data management, and decision-making processes for administrators, teachers, students, and parents.")}
              </div>
            </div>
          </div>
          <div className='hidden lg:block lg:col-span-1'></div>
          <div className='col-span-6 md:col-span-3 mt-5 md:mt-0 flex justify-between md:justify-around'>
            <div className='col-span-1'>
              <div className='footer-submenu-container'>
                <div className='footer-submenu-title'>{t("Most popular sections")}</div>
                {
                  listMenu.slice(0, 6).map((item) => {
                    return <Link to={item.link} key={item.link} className={`footer-submenu ${item.className} ${location.pathname === item.link && "active"}`}>{item.label}</Link>
                  })
                }
              </div>
            </div>
            <div className='col-span-1'>
              <div className='footer-submenu-container'>
                <div className='footer-submenu-title'>{t("School Information Section")}</div>
                {
                  listMenu.slice(-4).map((item) => {
                    return <Link to={item.link} key={item.link} className={`footer-submenu ${item.className} ${location.pathname === item.link && "active"}`}>{item.label}</Link>
                  })
                }
              </div>
            </div>
          </div>
          <div className='col-span-6'>
            <div className='footer-content mt-5 md:mt-0'>
              {t("Copyright © School Management System")}
            </div>
          </div>
        </div>
      </div>
      <FloatButton.BackTop
        icon={<FaArrowUp style={{ color: "var(--primary-button-text-color)" }} />}
        className='esi-floating-button'
        style={{
          color: "white",
          backgroundColor: "black"
        }}
      />
      <MenuDrawer ref={menuDrawer} listMenu={listMenu} />
    </div>
  )
}


const mapDispatchToProps = (dispatch) => ({
  changeScreen: (payload) => dispatch({ type: CHANGE_SCREEN, payload: payload }),
});

const mapStateToProps = (state) => ({ responsive: state.responsive })

export default connect(mapStateToProps, mapDispatchToProps)(DefaultLayout);