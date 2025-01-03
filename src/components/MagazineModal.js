import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import '../styles/Magazine.css';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import OnError from './OnError';
import OnLoad from './OnLoad';
import { Document, Page, pdfjs } from 'react-pdf';
import { Modal } from 'antd';
import HTMLFlipBook from 'react-pageflip';
import { BASE_FILE_URL } from '../constants/Url';
import { useSelector } from 'react-redux';
import { MOBILE } from '../constants/ConstantsKey';
import ModalCloseButton from './ModalCloseButton';
import _ from 'lodash';
import { Z_OUTSIDE_MAGAZINE } from '../constants/ZIndex';

const pdfjsVersion = '3.11.174'; // Replace with the correct version
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsVersion}/pdf.worker.min.js`;

function MagazineModal(props = { handleOpenDownloadApp: () => { } }, ref) {
    const { handleOpenDownloadApp } = props;
    const magazineContainerRef = useRef();
    const magazineRef = useRef();
    const buttonCloseRef = useRef();
    const [width, setWidth] = useState(0);
    const [showCover, setShowCover] = useState(true);
    const [open, setOpen] = useState(false);
    const [magazine, setMagazine] = useState({
        filePath: "/Estetica_CN_84_Book_A_Digital_Version.pdf",
        name: "ESI_Knowledge.pdf",
        preview: 3,
        _id: "1",
    });

    const showModal = (item) => {
        console.log("setMagazine", item)
        setMagazine({ ...item });
        setOpen(true);
    }

    const closeModal = () => setOpen(false)


    const handleForceChangePositionButton = () => buttonCloseRef.current.changePosition();

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [])

    useImperativeHandle(ref, () => ({ showModal: showModal }))

    return (
        open &&
        <Modal
            key={`${magazine.filePath}-${showCover}-${width}-${open}`}
            closeIcon={false}
            open={open}
            footer={null}
            rootClassName='root-magazine-modal'
            className={`magazine-modal ${magazine?._id}`}
            onOk={false}
            onCancel={() => setOpen(false)}
            width={1000}
            destroyOnClose={true}
        >
            <div>{console.log("magazineRef", magazineRef)}
                <ModalCloseButton
                    ref={buttonCloseRef}
                    onClose={() => setOpen(false)}
                    containerRef={magazineContainerRef}
                />
                <div ref={magazineContainerRef}>
                    <Magazine
                        ref={magazineRef}
                        handleOpenDownloadApp={handleOpenDownloadApp}
                        handleForceChangePositionButton={handleForceChangePositionButton}
                        filePath={magazine?.filePath}
                        preview={magazine?.preview}
                        id={magazine?._id}
                        showCover={showCover}
                        setShowCover={setShowCover}
                        closeModal={closeModal}
                    />
                </div>
            </div>
        </Modal>
    )
}

const MagazinePropType = {
    closeModal: () => { },
    preview: 3,
    filePath: "",
    id: "",
    showCover: true,
    setShowCover: () => { },
    handleForceChangePositionButton: () => { },
    handleOpenDownloadApp: () => { }
};

const Magazine = forwardRef((props = MagazinePropType, ref) => {
    const { closeModal, preview, filePath, id, setShowCover, showCover, handleForceChangePositionButton, handleOpenDownloadApp } = props;
    const flipBook = useRef(null);
    const documentRef = useRef(null);
    const [url, setUrl] = useState("");
    const [currentPage, setCurrentPage] = useState(0);
    const [renderPage, setRenderPage] = useState([]);
    const [opened, setOpened] = useState(true);
    const [refresh, setRefresh] = useState(false);
    const [totalPage, setTotalPage] = useState(0);
    const responsive = useSelector(state => state.responsive);

    useEffect(() => {
        if (filePath !== url) {
            setRefresh(true);
            setCurrentPage(0);
            setRenderPage([]);
            setUrl(filePath);
        }
    }, [filePath])

    useEffect(() => {
        const { screen } = responsive;
        setShowCover(screen !== MOBILE);
        const escapedId = CSS.escape(id);
        const contentUpdate = document.querySelector(`.${escapedId}.magazine-modal.ant-modal`);
        if (screen !== MOBILE) {
            contentUpdate.classList.add("active");
        } else {
            contentUpdate.classList.remove("active");
        }
    }, [responsive])

    function onDocumentLoadSuccess(pdf) {
        setTotalPage(pdf.numPages);
        const arr = Array(pdf.numPages);
        const arrKeys = arr.keys();
        const currentPage = 0;
        const total = Array.from(arrKeys);
        const newPage = total.slice(0, currentPage <= pdf.numPages - 6 ? currentPage + 6 : pdf.numPages);
        setCurrentPage(currentPage);
        setRenderPage([...newPage]);
        handleForceChangePositionButton();
    }

    const handleChangeOrientation = (flipEvent) => {
        setCurrentPage(flipEvent.object.pages.currentPageIndex);
    };
    console.log("flipBookflipBook", flipBook)

    const handleUnmountMagazine = () => {
        flipBook.current?.pageFlip()?.destroy();
        closeModal();
    }

    const onChangeState = (flipEvent) => {
        const escapedId = CSS.escape(id);
        const contentUpdate = document.querySelector(`.${escapedId}.magazine-modal.ant-modal`);
        if (contentUpdate && showCover) {
            if (flipEvent.object.pages.currentPageIndex === 0 && ["read"].includes(flipEvent.data)) {
                contentUpdate.classList.add("active");
                mountCloseAbleDiv(true);
            } else {
                if (["flipping", "user_fold"].includes(flipEvent.data)) {
                    contentUpdate.classList.remove("active");
                }
                mountCloseAbleDiv(false);
            }
        }

        setCurrentPage(flipEvent.object.pages.currentPageIndex);
        if (flipEvent.object.pages.currentPageIndex >= preview) {
            handleOpenDownloadApp(handleUnmountMagazine);
        }
    };

    const handleLoopReactPDF = () => {
        const arr = Array(totalPage);
        const arrKeys = arr.keys();
        const total = Array.from(arrKeys);
        const newPage = total.slice(0, currentPage <= totalPage - 6 ? currentPage + 6 : totalPage);
        if (renderPage.length < newPage.length) {
            setRenderPage([...newPage]);
        }
    };

    const mountCloseAbleDiv = (add) => {
        const escapedId = CSS.escape(id);
        const contentUpdate = document.querySelector(`.${escapedId}.magazine-modal.ant-modal .stf__wrapper`);
        if (contentUpdate) {
            if (add) {
                const el = document.createElement("div");
                el.onclick = handleUnmountMagazine;
                el.className = "magazine-closeable-div";
                el.style.zIndex = Z_OUTSIDE_MAGAZINE;
                contentUpdate.appendChild(el);
            } else {
                const elements = document.querySelectorAll(`.${escapedId}.magazine-modal.ant-modal .magazine-closeable-div`);
                elements.forEach(el => {
                    contentUpdate.removeChild(el);
                });
            }
        }
    }

    useEffect(() => {
        if (opened && refresh) {
            setOpened(false);
        } else if (!opened && refresh) {
            setOpened(true);
            setRefresh(false);
        }
    }, [refresh, opened]);

    useEffect(() => {
        handleLoopReactPDF();
    }, [currentPage]);

    useImperativeHandle(ref, () => ({
        handleUnmountMagazine: handleUnmountMagazine,
    }))

    return (
        opened &&
        <Document
            ref={documentRef}
            file={`${BASE_FILE_URL}${url}`}
            onLoadSuccess={onDocumentLoadSuccess}
            error={<OnError handleTryAgain={() => setRefresh(true)} />}
            loading={
                <div className="text-center content-center h-[80dvh]">
                    <OnLoad />
                </div>
            }
        >
            <div className="document-layout">
                <div className="book-layout">{console.log("flipBook", flipBook)}
                    <HTMLFlipBook
                        ref={flipBook}
                        startZIndex={Z_OUTSIDE_MAGAZINE}
                        key={`${BASE_FILE_URL}${url}${opened}`}
                        width={550}
                        height={733}
                        size="stretch"
                        minWidth={300}
                        maxWidth={600}
                        minHeight={450}
                        maxHeight={800}
                        maxShadowOpacity={1}
                        showCover={showCover}
                        mobileScrollSupport={true}
                        onChangeOrientation={handleChangeOrientation}
                        onChangeState={onChangeState}
                        onInit={() => {
                            const escapedId = CSS.escape(id);
                            const contentUpdate = document.querySelector(`.${escapedId}.magazine-modal.ant-modal`);
                            if (showCover) {
                                contentUpdate.classList.add("active");
                                mountCloseAbleDiv(true);
                            }
                            handleForceChangePositionButton();
                        }}
                        className={`esi-magazine`}
                        startPage={0}
                        drawShadow={true}
                        flippingTime={1500}
                        usePortrait={true}
                        autoSize={true}
                        clickEventForward={false}
                        useMouseEvents={true}
                        swipeDistance={0}
                        showPageCorners={true}
                        disableFlipByClick={false}
                    >
                        {renderPage.map((pg) => {
                            return <MagazinePage key={pg + 1} pageNumber={pg + 1}></MagazinePage>;
                        })}
                    </HTMLFlipBook>
                </div>
            </div>
        </Document>
    )
});

const MagazinePage = forwardRef((props = { pageNumber: 0 }, ref) => {
    const { pageNumber } = props;
    return (
        <div className="page bg-white" style={{ zIndex: 1000 }} key={pageNumber} ref={ref}>
            <div className="page-content relative">
                <Page
                    loading={
                        <div style={{ top: 0 }} className="w-full absolute h-full justify-center items-center flex">
                            <OnLoad />
                        </div>
                    }
                    error={
                        <div className="w-full h-full justify-center items-center flex">
                            <span>Failed to load Pages</span>
                        </div>
                    }
                    pageNumber={pageNumber}
                    renderAnnotationLayer={false}
                />
            </div>
        </div>
    );
});

export default forwardRef(MagazineModal);