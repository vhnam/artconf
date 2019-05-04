import React from 'react';
import StackGrid, {easings, transitions} from 'react-stack-grid';

import Typography, {
  TypoVariants,
  TypoWeight,
} from '../../components/Typography';
import YouTubeVideo from '../../components/YouTubeVideo';

import styles from './Gallery.module.css';

const Gallery = () => {
  const transition = transitions.scaleDown;

  const images = [
    'https://dcs19.hcmus.edu.vn/wp-content/uploads/2019/03/DSC_0182.jpg',
    'https://dcs19.hcmus.edu.vn/wp-content/uploads/2019/03/DSC_0263.jpg',
    'https://dcs19.hcmus.edu.vn/wp-content/uploads/2019/03/DSC_0260.jpg',
    'https://dcs19.hcmus.edu.vn/wp-content/uploads/2019/03/DSC_0251.jpg',
    'https://dcs19.hcmus.edu.vn/wp-content/uploads/2019/03/DSC_0243.jpg',
    'https://dcs19.hcmus.edu.vn/wp-content/uploads/2019/03/DSC_0238.jpg',
    'https://dcs19.hcmus.edu.vn/wp-content/uploads/2019/03/DSC_0237.jpg',
    'https://dcs19.hcmus.edu.vn/wp-content/uploads/2019/03/DSC_0236.jpg',
    'https://dcs19.hcmus.edu.vn/wp-content/uploads/2019/03/DSC_0235.jpg',
    'https://dcs19.hcmus.edu.vn/wp-content/uploads/2019/03/DSC_0212.jpg',
    'https://dcs19.hcmus.edu.vn/wp-content/uploads/2019/03/DSC_0171.jpg',
    'https://dcs19.hcmus.edu.vn/wp-content/uploads/2019/03/DSC_0170.jpg',
    'https://dcs19.hcmus.edu.vn/wp-content/uploads/2019/03/DSC_0169.jpg',
    'https://dcs19.hcmus.edu.vn/wp-content/uploads/2019/03/DSC_0163.jpg',
    'https://dcs19.hcmus.edu.vn/wp-content/uploads/2019/03/DSC_0154.jpg',
    'https://dcs19.hcmus.edu.vn/wp-content/uploads/2019/03/DSC_0144.jpg',
    'https://dcs19.hcmus.edu.vn/wp-content/uploads/2019/03/DSC_0136.jpg',
    'https://dcs19.hcmus.edu.vn/wp-content/uploads/2019/03/DSC_0135.jpg',
    'https://dcs19.hcmus.edu.vn/wp-content/uploads/2019/03/DSC_0134.jpg',
    'https://dcs19.hcmus.edu.vn/wp-content/uploads/2019/03/DSC_0093.jpg',
    'https://dcs19.hcmus.edu.vn/wp-content/uploads/2019/03/DSC_0088.jpg',
    'https://dcs19.hcmus.edu.vn/wp-content/uploads/2019/03/DSC_0085.jpg',
    'https://dcs19.hcmus.edu.vn/wp-content/uploads/2019/03/DSC_0061.jpg',
    'https://dcs19.hcmus.edu.vn/wp-content/uploads/2019/03/DSC_0146.jpg',
  ];

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <Typography
          className={styles.heading}
          variant={TypoVariants.h1}
          weight={TypoWeight.semibold}
        >
          ArtConf 2018
        </Typography>
        <YouTubeVideo youtubeId="I0SgWabGGC8" title="DCS'2018 - Quy Nhon" />
        <StackGrid
          monitorImagesLoaded
          columnWidth={300}
          duration={600}
          gutterWidth={15}
          gutterHeight={15}
          easing={easings.cubicOut}
          appearDelay={60}
          appear={transition.appear}
          appeared={transition.appeared}
          enter={transition.enter}
          entered={transition.entered}
          leaved={transition.leaved}
        >
          {images.map((image, index) => (
            <img
              key={image}
              className={styles.image}
              src={image}
              alt={`${index + 1}`}
            />
          ))}
        </StackGrid>
      </div>
    </div>
  );
};

export default Gallery;
