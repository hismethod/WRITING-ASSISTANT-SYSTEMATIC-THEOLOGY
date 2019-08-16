import React, { useState, useEffect } from 'react';
import './Navbar.scss';

const Navbar = () => {
    const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const isVisible = prevScrollpos > currentScrollPos;

            setPrevScrollpos(currentScrollPos);
            setVisible(isVisible);
        };

        window.addEventListener("scroll", handleScroll);

        return () => { window.removeEventListener("scroll", handleScroll) }
    }, [prevScrollpos]);

    return (
        <nav className={`navbar navbar-top ${!visible && 'navbar--hidden'}`}>
            <div className="navbar__content">
                <span>

                성경으로 따라가는 조직신학 쓰기
                </span>
            </div>
        </nav>
    )
}

export default Navbar
