import React, { useState } from 'react';
import classNames from 'classnames';
import { useScrollPosition } from '../../hooks/useScroll';
import './Navbar.scss';

const Navbar = ({ position = 'top', children }) => {
  const [visible, setVisible] = useState(true);

  useScrollPosition(({ direction }) => {
    const showNavbar = direction === 'up';
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
