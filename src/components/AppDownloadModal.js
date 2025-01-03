import { Button, Modal } from 'antd';
import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import ModalCloseButton from './ModalCloseButton';
import { useTranslation } from 'react-i18next';
import { BASE_URL } from '../constants/Url';
import { useNavigate } from 'react-router';
import AppleIcon from '../assets/icons/Apple';
import AndroidIcon from '../assets/icons/Android';
import WindowIcon from '../assets/icons/Window';

const AppDownloadModal = (props, ref) => {
    const [open, setOpen] = useState(false);
    const { t } = useTranslation();
    const navigate = useNavigate();
    const buttonCloseRef = useRef();
    const containerRef = useRef();

    const showModal = () => {
        setOpen(true);
    }

    const closeModal = () => {
        setOpen(false);
    }

    const handleForceChangePositionButton = () => buttonCloseRef.current?.changePosition();

    useEffect(() => {
        const handleResize = () => {
            handleForceChangePositionButton()
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    useImperativeHandle(ref, () => {
        return { showModal: showModal, closeModal: closeModal }
    })

    return (
        <Modal
            className='esi-download'
            centered
            open={open}
            onOk={false}
            onCancel={() => setOpen(false)}
            width={1000}
            closeIcon={false}
            destroyOnClose={true}
            footer={null}
        >
            <ModalCloseButton
                ref={buttonCloseRef}
                onClose={() => setOpen(false)}
                containerRef={containerRef}
            />
            <div className='relative esi-download-container' ref={containerRef}>
                <img className='esi-download-background-image' src={BASE_URL + "/download-background/AppBackground.png"} />
                <div className='p-[1.25rem] md:p-[4rem] h-full relative z-[1] flex flex-col justify-between' >
                    <div className='flex gap-[1.5rem] lg:gap-[3.5rem] flex-col'>
                        <div className='ms-[10px] esi-download-title'>{t("Please view more in the App")} <br />{t("Detailed information")} </div>
                        <div className='flex flex-col gap-3 w-fit'>
                            <img alt='ESI-Logo' role='button' onClick={() => { navigate("/") }} src={BASE_URL + "/logo.png"} className='esi-download-logo' />
                            <div className='ms-[6px] esi-download-description'>{t("The world's leading online hairdressing magazine")}</div>
                        </div>
                    </div>
                    <div className='esi-download-button-container flex flex-col sm:flex-row gap-3'>
                        <Button size='large' className='esi-btn-apple' icon={<AppleIcon className='esi-apple-icon' color='white' />} >{t("App Store download")}</Button>
                        <Button size='large' className='esi-btn-android' icon={<AndroidIcon className='esi-android-icon' color='white' />}>{t("Android下载")}</Button>
                        <Button size='large' className='esi-btn-window' icon={<WindowIcon className='esi-window-icon' color='black' />}>{t("扫描二维码")}</Button>
                    </div>
                </div>
            </div>
        </Modal>
    )
};


export default forwardRef(AppDownloadModal);