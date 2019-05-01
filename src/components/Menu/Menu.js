import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

import config from '../../config';

import imgFavicon from '../../assets/img/favicon.png';

import styles from './Menu.module.css';

const Menu = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.wrapper}>
      <Link className={styles.faviconContainer} to={config.paths.home}>
        <img className={styles.favicon} src={imgFavicon} alt="ArtConf" />
      </Link>
      <span className={styles.button} onClick={toggleMenu}>
        {!isOpen && <FontAwesomeIcon icon="bars" />}
        {isOpen && <FontAwesomeIcon icon="times" />}
      </span>

      {isOpen && <ul className={styles.list}>{children}</ul>}
    </div>
  );
};

export default Menu;
