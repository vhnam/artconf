import React from 'react';

import styles from './YouTubeVideo.module.css';

const YouTubeVideo = ({youtubeId, title}) => {
  return (
    <div className={styles.wrapper}>
      <iframe
        title={title}
        className={styles.frame}
        src={`https://www.youtube.com/embed/${youtubeId}`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
    </div>
  );
};

export default YouTubeVideo;
