import React, { useState } from 'react';
import classNames from 'classnames';
import { useScrollPosition } from './../../util/useScroll';
import './Navbar.scss';

let count = 0;
const Navbar = ({ position = 'top' }) => {
    const [visible, setVisible] = useState(true);

    useScrollPosition(({ prevPos, currPos }) => {
        const isVisible = currPos.y < prevPos.y;
        if (isVisible !== visible) {
            setVisible(isVisible);
        }
    }, [], null, true, 200);

    const navClassName = classNames('navbar', `navbar-${position}`, {
        [`navbar--hidden`]: !visible
    });

    console.log(`Nav rendered : ${count++}`);

    return (
        <nav className={navClassName} >
            <div className="navbar__content">
                <span>
                    성경으로 따라가는 조직신학 쓰기
                </span>
            </div>
        </nav>
    )
}

export default Navbar
