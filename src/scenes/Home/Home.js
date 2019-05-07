import React from 'react';

import config from '../../config';

import Button from '../../components/Button';
import Typography, {
  TypoWeight,
  TypoVariants,
} from '../../components/Typography';

import imgPrototypingProcess from '../../assets/img/prototyping-process.svg';

import styles from './Home.module.css';

const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          <div className={styles.wrapper}>
            <div className={styles.container}>
              <Typography
                className={styles.heading}
                weight={TypoWeight.semibold}
              >
                Inside
                <br />
                out
              </Typography>
              <Typography
                className={styles.subHeading}
                variant={TypoVariants.h2}
                weight={TypoWeight.light}
              >
                International conference <br /> on illusstraion
              </Typography>
              <Typography
                className={styles.location}
                variant={TypoVariants.h4}
                weight={TypoWeight.semibold}
              >
                2019, September 25 - 28
                <br /> VNU University of Science, HCMC
              </Typography>
              <div className={styles.btnRegister}>
                <Button href={config.paths.registration}>Register Now</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2">
          <div className={styles.wrapperIllustration}>
            <img
              className={styles.illustration}
              src={imgPrototypingProcess}
              alt="Prototyping Process"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
