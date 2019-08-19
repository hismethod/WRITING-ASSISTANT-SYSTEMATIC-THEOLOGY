import React, { useState } from 'react';
import classNames from 'classnames';
import { useScrollPosition } from './../../util/useScroll';
import './Navbar.scss';

const Navbar = ({ position = 'top', children }) => {
  const [visible, setVisible] = useState(true);

  useScrollPosition(({ direction }) => {
    const isVisible = direction === 'up';
    if (isVisible !== visible) {
      setVisible(isVisible);
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
