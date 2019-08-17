import React, { useState, useEffect, useMemo } from 'react';
import throttle from 'lodash.throttle';
import debounce from 'lodash.debounce';
import classNames from 'classnames';
import './Navbar.scss';
// import { useScroll } from './../../util/useScroll';

const Navbar = ({ position = 'top' }) => {
    const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isVisible = prevScrollpos > currentScrollPos;

            setPrevScrollpos(currentScrollPos);
            setVisible(isVisible);
        };

        const throttledHandleScroll = throttle(handleScroll, 1000);

        window.addEventListener("scroll", throttledHandleScroll);
        return () => { window.removeEventListener("scroll", throttledHandleScroll) }
    });

    const navClassName = classNames('navbar', `navbar-${position}`, {
        [`navbar--hidden`]: !visible
    });

    return (
        <nav className={navClassName} >
            <div className="navbar__content">
                <span>
                    {prevScrollpos}
                    성경으로 따라가는 조직신학 쓰기
                </span>
            </div>
        </nav>
    )
}

export default React.memo(Navbar);
