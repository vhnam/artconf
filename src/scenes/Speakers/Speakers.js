import React from 'react';

import Typography, {
  TypoVariants,
  TypoWeight,
  TypoColors,
} from '../../components/Typography';

import styles from './Speakers.module.css';

const speakers = [
  {
    name: 'Jonathan Ive',
    work: 'Chief Design Officer (CDO) of Apple',
    description:
      'Sir Jonathan Paul "Jony" Ive, KBE, HonFREng, RDI is a British industrial designer who is currently serving as the Chief Design Officer (CDO) of Apple and Chancellor of the Royal College of Art in London. He joined Apple in 1992. Following ten years of service, he was promoted to Senior Vice President of design, overseeing the design of the iPod, iPhone, iPad, MacBook, and parts of Apple\'s user interface, iOS.',
    avatar:
      'https://casabrutus.com/wp-content/uploads/2018/10/1010iphone2_702.jpg',
  },
  {
    name: 'Tanner Christensen',
    work: 'Product Designer @Lyft',
    description:
      'Tanner Christensen is Digital Product Designer at Lyft, also a published author, developer, design advisor, and semi-entrepreneur. Previously I worked as Product Design Lead at Atlassian, and before that, I worked as a Product Designer at Facebook.',
    avatar:
      'https://miro.medium.com/fit/c/240/240/1*jVHNa07J6ONjXAlz9Bgsug@2x.jpeg',
  },
  {
    name: 'Dieter Rams',
    work: 'German industrial designer',
    description:
      'Dieter Rams is a German industrial designer and retired academic closely associated with the consumer products company Braun and the functionalist school of industrial design.',
    avatar: 'https://en.wikipedia.org/wiki/File:Designer-Dieter_Rams.jpg',
  },
  {
    name: 'Jakob Nielsen',
    work: 'Computer scientist',
    description:
      'Jakob Nielsen is a Danish web usability consultant. He holds a Ph.D. in human–computer interaction from the Technical University of Denmark in Copenhagen.',
    avatar:
      'https://media.nngroup.com/media/people/photos/jakob-nielsen_cropped.jpg.400x400_q95_autocrop_crop_upscale.jpg',
  },
  {
    name: 'Luke Wroblewski',
    work: 'Product Director at Google',
    description:
      'LukeW is an internationally recognized digital product leader who has designed and built software used by billions of people worldwide.',
    avatar:
      'http://thewebahead.net/sites/default/files/styles/circle_200/public/Luke%20Wroblewski_0.jpg',
  },
];

const Speakers = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <Typography
          className={styles.heading}
          variant={TypoVariants.h1}
          weight={TypoWeight.semibold}
        >
          Our <br /> speakers
        </Typography>
        <div className="row">
          <div className="col-xl-2">
            <ul className={styles.list}>
              {speakers.map((speaker) => (
                <li>
                  <span className={styles.speaker}>
                    <Typography
                      tag="span"
                      className={styles.name}
                      variant={TypoVariants.h3}
                    >
                      {speaker.name}
                    </Typography>
                    <span className={styles.work}>{speaker.work}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-xl-2">
            <div className={styles.profile}>
              <img
                className={styles.avatar}
                src={speakers[0].avatar}
                alt={speakers[0].name}
              />
              <div>
                <div className={styles.profileSpeaker}>
                  <Typography
                    color={TypoColors.brassDark}
                    variant={TypoVariants.h1}
                  >
                    {speakers[0].name}
                  </Typography>
                  <Typography
                    color={TypoColors.grey}
                    variant={TypoVariants.h3}
                    weight={TypoWeight.light}
                  >
                    {speakers[0].work}
                  </Typography>
                </div>
                <Typography tag="p" className={styles.description}>
                  {speakers[0].description}
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
