import { Button } from 'antd'
import React, { useEffect, useRef, useState } from 'react'

export default function TextScroll(props = { textButton: "", content: "" }) {
    const { textButton, content } = props;
    const [scroll, setScroll] = useState(false);
    const containerRef = useRef();
    const contentRef = useRef();

    useEffect(() => {
        //Follow Tailwind Responsive Structure
        const handleResize = () => {
            if (containerRef.current && contentRef.current) {
                if (contentRef.current.offsetWidth > containerRef.current.offsetWidth) {
                    setScroll(true);
                } else {
                    setScroll(false);
                }
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [contentRef, containerRef])

    return (
        <div className='esi-std-white-space p-3 rounded-lg flex items-center' style={{ backgroundColor: "var(--secondary-bg-color)" }}>
            <Button className='text-[14px] md:text-[15px] esi-std-button rounded-tl-none rounded-br-none !w-fit'>{textButton}</Button>
            <div class={`${scroll && "active"} ms-5 scrolling-container`} ref={containerRef}>
                <div class="esi-news-title" ref={contentRef}>
                    {content}
                </div>
                <div class={`esi-news-title`}>
                    {content}
                </div>
            </div>
        </div>
    )
}
