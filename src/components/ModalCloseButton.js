import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'antd';
import { IoClose } from 'react-icons/io5';
import { Z_OUTSIDE_PORTAL } from '../constants/ZIndex';

const ModalCloseButton = (props = { space: 30, onClose: () => { }, containerRef: null }, ref) => {
    const { onClose, containerRef, space } = props
    const [el, setEl] = useState(null);
    const [top, setTop] = useState(0);

    useEffect(() => {
        const newEl = document.createElement('div');
        document.body.appendChild(newEl);
        setEl(newEl);

        if (containerRef.current !== undefined) {
            updatePosition();
        }

        return () => {
            document.body.removeChild(newEl);
        };
    }, [containerRef]);

    useImperativeHandle(ref, () => {
        return {
            changePosition: updatePosition
        }
    })

    const updatePosition = () => {
        const clientRect = containerRef.current?.getBoundingClientRect();
        const positionOfButton = clientRect.bottom + (space ?? 20);
        setTop(positionOfButton);
    }

    if (!el) return null;

    return ReactDOM.createPortal(
        <Button style={{ zIndex: Z_OUTSIDE_PORTAL, top: top }} tabIndex={1} className='right-[50%] rounded-full fixed modal-close-button' icon={<IoClose />} onClick={onClose} />,
        el
    );
};

export default forwardRef(ModalCloseButton);
