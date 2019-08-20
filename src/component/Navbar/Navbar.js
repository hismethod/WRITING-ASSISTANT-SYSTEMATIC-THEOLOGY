import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import { useScrollPosition } from '../../hooks/useScroll';
import './Navbar.scss';

const Navbar = ({ position = 'top', children }) => {
  const [visible, setVisible] = useState(true);
  const bodyHeight = document.body.offsetHeight;
  const bodyTop = 0;
  
  useScrollPosition(({ prevPos, currPos, direction }) => {
    const nearTop = currPos.y > bodyTop;
    const nearBottom = currPos.y < -4300;
    const showNavbar = nearTop || nearBottom || (direction === 'up');
    if (showNavbar !== visible) {
      setVisible(showNavbar);
    }
  });
  const navClassName = classNames('navbar', `navbar-${position}`, {'navbar--hidden': !visible});
  return (
    <nav className={navClassName} >
      <div className="navbar__content">
        {children}
      </div>
    </nav>
  )
}

export default Navbar
