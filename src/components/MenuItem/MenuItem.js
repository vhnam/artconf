import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import clsx from 'clsx';

import styles from './MenuItem.module.css';

const MenuItem = ({href, className, children, ...others}) => {
  return (
    <Link className={clsx(styles.link, className)} to={href} {...others}>
      {children}
    </Link>
  );
};

MenuItem.propTypes = {
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default MenuItem;
