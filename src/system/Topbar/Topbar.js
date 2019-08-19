import React from 'react';
import Navbar from '../../component/Navbar/Navbar';
import './Topbar.scss';

const Topbar = () => {
    return (
        <Navbar position="top">
            <div className="topbar__content">
                성경을 따라가는 조직신학
            </div>
        </Navbar>
    )
}

export default Topbar
