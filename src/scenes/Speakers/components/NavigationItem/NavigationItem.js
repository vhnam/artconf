import React from 'react';
import PropTypes from 'prop-types';

import Typography, {TypoVariants} from '../../../../components/Typography';

import styles from './NavigationItem.module.css';
import clsx from 'clsx';

const NavigationItem = ({speaker, active, index, onChangeIndex}) => {
  const onClick = () => {
    onChangeIndex(index);
  };

  return (
    <li key={speaker.name} onClick={onClick}>
      <span
        className={clsx(styles.speaker, {
          [styles.active]: active,
        })}
      >
        <Typography
          tag="span"
          className={styles.name}
          variant={TypoVariants.h4}
        >
          {speaker.name}
        </Typography>
        <span className={styles.work}>{speaker.work}</span>
      </span>
    </li>
  );
};

NavigationItem.propTypes = {
  speaker: PropTypes.object.isRequired,
  active: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  onChangeIndex: PropTypes.func.isRequired,
};

export default NavigationItem;
