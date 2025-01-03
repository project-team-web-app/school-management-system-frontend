import { Drawer } from 'antd'
import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BASE_URL } from '../constants/Url';

function MenuDrawer(props, ref) {
    const { listMenu } = props;
    const location = useLocation();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const onClose = () => setOpen(false);

    useImperativeHandle(ref, () => {
        return { open: () => setOpen(true) }
    })

    return (
        <Drawer
            title={<img role='button' src={BASE_URL + "/logo.png"}
            alt='ESI-Logo'
            onClick={() => {
                navigate("/");
                onClose();
            }} className='esi-logo' />}
            placement={"right"}
            onClose={onClose}
            open={open}
            rootClassName='custom-drawer'
        >
            <div className='flex flex-col justify-center gap-6'>
                {
                    listMenu.map((item) => {
                        return <Link onClick={onClose} key={item.link} to={item.link} className={`esi-menu ${item.className} ${location.pathname === item.link && "active"}`}>{item.label}</Link>
                    })
                }
            </div>
        </Drawer>
    )
};

export default forwardRef(MenuDrawer);
