import React from 'react';
import PropTypes from 'prop-types';

import Typography, {
  TypoColors,
  TypoVariants,
  TypoWeight,
} from '../../../../components/Typography';

import styles from './Speaker.module.css';

const Speaker = ({speaker}) => {
  return (
    <div className={styles.profile} key={speaker.name}>
      <img className={styles.avatar} src={speaker.avatar} alt={speaker.name} />
      <div>
        <div className={styles.information}>
          <Typography color={TypoColors.brassDark} variant={TypoVariants.h2}>
            {speaker.name}
          </Typography>
          <Typography color={TypoColors.grey} variant={TypoVariants.h4}>
            {speaker.work}
          </Typography>
        </div>
        <Typography
          tag="p"
          className={styles.description}
          weight={TypoWeight.light}
        >
          {speaker.description}
        </Typography>
      </div>
    </div>
  );
};

Speaker.propTypes = {
  speaker: PropTypes.object.isRequired,
};

export default Speaker;
