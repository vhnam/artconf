import React from 'react';

import Typography, {
  TypoVariants,
  TypoWeight,
  TypoColors,
} from '../../../../components/Typography';

import styles from './Section.module.css';

const Section = ({title, description, speakers}) => {
  return (
    <div className={styles.wrapper}>
      <Typography
        className={styles.title}
        color={TypoColors.brassLight}
        variant={TypoVariants.h3}
        weight={TypoWeight.semibold}
      >
        {title}
      </Typography>
      <Typography
        className={styles.description}
        tag="p"
        weight={TypoWeight.light}
      >
        {description}
      </Typography>
      <Typography color={TypoColors.brassDark}>{speakers}</Typography>
    </div>
  );
};

export default Section;
