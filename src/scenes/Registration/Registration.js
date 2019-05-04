import React from 'react';

import Typography, {
  TypoVariants,
  TypoWeight,
} from '../../components/Typography';

import imgConferencce from '../../assets/img/conference.svg';

import styles from './Registration.module.css';

const Registration = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <Typography
          className={styles.heading}
          variant={TypoVariants.h1}
          weight={TypoWeight.semibold}
        >
          Registration
        </Typography>
        <div className="row">
          <div className="col-lg-2">
            <Typography className={styles.subHeading} variant={TypoVariants.h2}>
              Registration time
            </Typography>
            <Typography tag="p" className={styles.description}>
              From September 15 - 20, 2019
            </Typography>
            <Typography className={styles.subHeading} variant={TypoVariants.h2}>
              The priority to review
            </Typography>
            <Typography tag="p" className={styles.description}>
              <strong>Priority 1</strong> for you who learned DCS-18, added to
              the comments and learning results from the DCS-18.
            </Typography>
            <Typography tag="p" className={styles.description}>
              <strong>Priority 2</strong> for Students who are lecturers (by
              students) to write letters of recommendation to the Organizing
              Committee of DCS-19 (sent to the Facilitators or Philosophers and
              cc to Ms. Trang).
            </Typography>
            <Typography className={styles.subHeading} variant={TypoVariants.h2}>
              Registration methods
            </Typography>
            <Typography tag="p" className={styles.description}>
              Mail to Ms. Phung Thien Trang –{' '}
              <a href="mailto:dcs@hcmus.edu.vn">dcs@hcmus.edu.vn</a> with Subject
              mail "Đăng ký tham gia DCS-19"
            </Typography>
            <Typography tag="p" className={styles.description}>
              Content of mail:
              <br />
              1. Full name.
              <br />
              2. Date of birth.
              <br />
              3. University.
              <br />
              4. Class.
              <br />
              5. Speciality.
              <br />
              6. Email address.
              <br />
              7. Telephone number.
              <br />
              8. Write a paragraph that introduces you and your motivation to
              attend the DCS-19.
            </Typography>
          </div>
          <div className="col-lg-2">
            <img
              className={styles.illustration}
              src={imgConferencce}
              alt="Conference"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
