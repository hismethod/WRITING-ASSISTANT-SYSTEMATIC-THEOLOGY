import React, { useState, useEffect } from 'react';
import './BottomNavbar.scss';

const BottomNavbar = () => {
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
        <nav className={`navbar navbar-bottom ${!visible && 'navbar-bottom--hidden'}`}>
            <div className="navbar__content">
                <ul>
                    <li>
                        <button>다른책</button>
                    </li>
                    <li>
                        <button>다르게보기</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default BottomNavbar
