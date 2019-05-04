import React from 'react';

import Typography, {
  TypoVariants,
  TypoWeight,
} from '../../components/Typography';

import Section from './components/Section';

import imgUsabilityTesting from '../../assets/img/usability-testing.svg';

import styles from './Introduction.module.css';

const sections = [
  {
    title: 'Design Sprint 2.0',
    description:
      'What I appreciate the most are all straight-to-the-point talks, simple yet practical for real job tasks. I love how passionate all the speakers are and I can see that they have really done things. Those talks are not like dogmatic/theoretical/above-the-clouds talks that some speakers bring to in some events haha. I can resonate with my personal principles on both emotional and professional aspects. I was contented during my grab ride on the way back home and yeah it did give me hope about the future growth of UX particularly and tech product generally in Vietnamese market.',
    speakers: 'Chris Nguyen and Bryant Castro from Wizeline',
  },
  {
    title:
      'Accelerate your User Research using Unmoderated Remote User Testing',
    description:
      'What I appreciate the most are all straight-to-the-point talks, simple yet practical for real job tasks. I love how passionate all the speakers are and I can see that they have really done things. Those talks are not like dogmatic/theoretical/above-the-clouds talks that some speakers bring to in some events haha. I can resonate with my personal principles on both emotional and professional aspects. I was contented during my grab ride on the way back home and yeah it did give me hope about the future growth of UX particularly and tech product generally in Vietnamese market.',
    speakers: 'Kuldeep Kulshreshtha from UXArmy',
  },
];

const Introduction = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <Typography
          className={styles.heading}
          variant={TypoVariants.h1}
          weight={TypoWeight.semibold}
        >
          Introduction
        </Typography>
        <Typography className={styles.section} weight={TypoWeight.semibold}>
          Inside out
        </Typography>
        <div className="row">
          <div className="col-lg-2">
            <img
              className={styles.illustration}
              src={imgUsabilityTesting}
              alt="Usability Testing"
            />
          </div>
          <div className="col-lg-2">
            {sections.map((section, index) => (
              <Section
                key={index}
                title={section.title}
                description={section.description}
                speakers={section.speakers}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
