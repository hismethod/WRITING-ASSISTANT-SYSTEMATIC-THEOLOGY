import React, { useState } from 'react';
import classNames from 'classnames';
import { useScrollPosition } from '../../hooks/useScroll';
import './Navbar.scss';
import { observer } from 'mobx-react-lite';
import { useAppStore } from '../../hooks/useAppStore';

const Navbar = ({ position = 'top', children }) => {
  const [visible, setVisible] = useState(true);
  const store = useAppStore();
  useScrollPosition(({ prevPos, currPos, direction }) => {
    const nearTop = currPos.y >= document.body.offsetTop;
    const nearBottom = document.body.offsetHeight <= (currPos.y * -1) + window.innerHeight;
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
