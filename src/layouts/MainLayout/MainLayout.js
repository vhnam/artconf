import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import config from '../../config';

import Menu from '../../components/Menu';
import MenuItem from '../../components/MenuItem';

import imgFavicon from '../../assets/img/favicon.png';

import styles from './MainLayout.module.css';
import clsx from 'clsx';

const MainLayout = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={clsx(styles.wrapper, {
        [styles.lockScreen]: isOpen,
      })}
    >
      <Menu className={styles.menu} isOpen={isOpen} onClick={toggleMenu}>
        <MenuItem onClick={toggleMenu} href={config.paths.home}>
          Home
        </MenuItem>
        <MenuItem onClick={toggleMenu} href={config.paths.introduction}>
          Introduction
        </MenuItem>
        <MenuItem onClick={toggleMenu} href={config.paths.schedule}>
          Schedule
        </MenuItem>
        <MenuItem onClick={toggleMenu} href={config.paths.speakers}>
          Speakers
        </MenuItem>
        <MenuItem onClick={toggleMenu} href={config.paths.gallery}>
          Gallery
        </MenuItem>
        <MenuItem onClick={toggleMenu} href={config.paths.registration}>
          Registration
        </MenuItem>
      </Menu>

      <div
        className={clsx(styles.content, {
          [styles.hidden]: isOpen,
        })}
      >
        <div className="container">
          <Link className={styles.faviconContainer} to={config.paths.home}>
            <img
              className={styles.favicon}
              src={imgFavicon}
              alt={config.conferenceName}
            />
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
