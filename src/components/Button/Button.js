import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {Link} from 'react-router-dom';

import Typography, {TypoColors, TypoVariants} from '../Typography';

import styles from './Button.module.css';

const PureButton = (props) => {
  const {type, className, children, ...others} = props;

  return (
    <button type={type} className={clsx(styles.button, className)} {...others}>
      <Typography variant={TypoVariants.button} color={TypoColors.white}>
        {children}
      </Typography>
    </button>
  );
};

const Button = (props) => {
  const href = props.href;

  return (
    <Fragment>
      {!href && <PureButton {...props} />}

      {href && (
        <Link to={href}>
          <PureButton {...props} />
        </Link>
      )}
    </Fragment>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
