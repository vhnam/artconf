import React from 'react';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import clsx from 'clsx';

import config from '../../config';

import imgFavicon from '../../assets/img/favicon.png';

import Button from '../Button';
import Typography, {TypoVariants, TypoWeight} from '../Typography';

import styles from './Menu.module.css';

const Menu = ({isOpen, onClick, className, children}) => {
  return (
    <div className={clsx(styles.wrapper, className)}>
      <Link className={styles.faviconContainer} to={config.paths.home}>
        <img
          className={styles.favicon}
          src={imgFavicon}
          alt={config.conferenceName}
        />
      </Link>
      <span className={styles.button} onClick={onClick}>
        {!isOpen && <FontAwesomeIcon icon="bars" />}
        {isOpen && <FontAwesomeIcon icon="times" />}
      </span>

      {isOpen && (
        <div className={styles.menu}>
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <ul className={styles.list}>{children}</ul>
              </div>
              <div className="col-md-2">
                <div className={styles.contact}>
                  <Typography
                    variant={TypoVariants.h2}
                    weight={TypoWeight.semibold}
                  >
                    Contact
                  </Typography>
                  <Typography
                    tag="p"
                    variant={TypoVariants.h4}
                    weight={TypoWeight.light}
                    className={styles.description}
                  >
                    2019, September 25 - 28
                    <br />
                    VNU University of Science, HCMC
                  </Typography>
                  <div className="row">
                    <div className="col-lg-2">
                      <Button
                        className={styles.btnRegister}
                        href={config.paths.registration}
                      >
                        Register Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Menu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Menu;
