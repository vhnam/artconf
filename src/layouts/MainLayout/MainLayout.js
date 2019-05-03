import React from 'react';
import {Link} from 'react-router-dom';

import config from '../../config';

import Menu from '../../components/Menu';
import MenuItem from '../../components/MenuItem';

import imgFavicon from '../../assets/img/favicon.png';

import styles from './MainLayout.module.css';

const MainLayout = ({children}) => {
  return (
    <div className={styles.wrapper}>
      <Menu className={styles.menu}>
        <MenuItem href={config.paths.home}>Home</MenuItem>
        <MenuItem href={config.paths.introduction}>Introduction</MenuItem>
        <MenuItem href={config.paths.schedule}>Schedule</MenuItem>
        <MenuItem href={config.paths.speakers}>Speakers</MenuItem>
        <MenuItem href={config.paths.gallery}>Gallery</MenuItem>
        <MenuItem href={config.paths.registration}>Registration</MenuItem>
      </Menu>

      <div className={styles.content}>
        <div className="container">
          <Link className={styles.faviconContainer} to={config.paths.home}>
            <img className={styles.favicon} src={imgFavicon} alt="ArtConf" />
          </Link>
        </div>
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
