import React, { useState, useEffect } from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

export function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            JobsUpply
            <i class='fab fa-typo3' />
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                // to='/profile-checker'
                className='nav-links'
                onClick={closeMobileMenu}>
                Profile Checker
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/random'
                className='nav-links'
                onClick={closeMobileMenu}>
                Settings
              </Link>
            </li>

            <li>
              <Link
                to='/log-out'
                className='nav-links'
                onClick={closeMobileMenu}>
                Quit
              </Link>
            </li>

          </ul>

          {/* {button && <Button buttonStyle='btn--outline'>LOG OUT</Button>} */}
        </div>
      </nav>
    </>
  );
}

