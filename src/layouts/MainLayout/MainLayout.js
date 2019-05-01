import React from 'react';

import config from '../../config';

import Menu from '../../components/Menu';
import MenuItem from '../../components/MenuItem';

import styles from './MainLayout.module.css';

const MainLayout = ({children}) => {
  return (
    <div className={styles.wrapper}>
      <Menu>
        <MenuItem href={config.paths.home}>Home</MenuItem>
        <MenuItem href={config.paths.introduction}>Introduction</MenuItem>
        <MenuItem href={config.paths.schedule}>Schedule</MenuItem>
        <MenuItem href={config.paths.speakers}>Speakers</MenuItem>
        <MenuItem href={config.paths.gallery}>Gallery</MenuItem>
        <MenuItem href={config.paths.registration}>Registration</MenuItem>
      </Menu>

      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default MainLayout;
